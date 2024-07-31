import { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import { nextlogin } from "~/actions/login";
import { LoginSchema } from "~/schemas";
import { googleAuth } from "~/utils/googleAuth";

interface Profile {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
  id_token: string;
  expires_at: number;
  provider: string;
  type: string;
  providerAccountId: string;
}

interface User {
  id: string;
  email: string;
  fullname: string;
  avatar_url: string;
  expires_in: string;
  role: string;
}

interface Data {
  access_token: string;
  user: User;
}

interface ApiResponse {
  status: string;
  status_code: number;
  message: string;
  data: Data;
}

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (!validatedFields.success) {
          return;
        }
        const { email, password } = validatedFields.data;
        const response = await nextlogin({ email, password });

        if (!response.data) {
          return;
        }
        const user = response.data;

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account && account.provider === "google" && profile?.email) {
        return profile.email.endsWith("@gmail.com");
      }

      return false;
    },
    async jwt({ token, user, account }) {
      if (account && account.provider !== "google") {
        return { token, user };
      }
      const response: ApiResponse = (await googleAuth(
        account as Profile,
      )) as ApiResponse;

      user = response?.data?.user;

      return { ...token };
    },
    async session({ session }) {
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url === "/login") {
        return baseUrl;
      }
      return "/dashboard/admin";
    },
  },
  pages: {
    signIn: "/login",
  },
  trustHost: true,
} satisfies NextAuthConfig;
