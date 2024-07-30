import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

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
        return { ...token, ...user };
      }
      const response: ApiResponse = (await googleAuth(
        account as Profile,
      )) as ApiResponse;

      return { ...token, ...response };
    },
    async redirect({ url, baseUrl }) {
      if (url === "/login") {
        return baseUrl;
      }
      return "/register/organisation";
    },
  },
  pages: {
    signIn: "/login",
  },
  trustHost: true,
} satisfies NextAuthConfig;
