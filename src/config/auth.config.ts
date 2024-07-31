import { NextAuthConfig, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import { LoginSchema } from "~/schemas";
import { CustomSession } from "~/types";
import { googleAuth } from "~/utils/googleAuth";
import { nextlogin } from "~/utils/login";

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
  user: User;
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
        const { email, password, rememberMe } = validatedFields.data;
        const response = await nextlogin({ email, password, rememberMe });

        if (!response) {
          return;
        }
        const user = {
          ...response.user,
          access_token: response.access_token,
        };

        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account && account.provider === "google" && profile?.email) {
        return profile.email.endsWith("@gmail.com");
      }

      return user ? true : false;
    },
    async jwt({ token, user, account }) {
      if (account && account.provider !== "google") {
        return { ...token, ...user };
      }
      const response: ApiResponse = (await googleAuth(
        account as Profile,
      )) as ApiResponse;

      user = response?.data?.user ?? response.user;

      return { ...token, ...user };
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<CustomSession> {
      session.user = {
        id: token.id as string,
        name: token.name as string,
        first_name: token.first_name as string,
        last_name: token.last_name as string,
        email: token.email as string,
        image: token.avatar_url as string,
        role: token.role as string,
        access_token: token.access_token as string,
      };

      return session as CustomSession;
    },
    // async redirect({ url, baseUrl }) {
    //   if (url === "/login") {
    //     return baseUrl;
    //   }
    //   if (url === `${baseUrl}/api/auth/signout`) {
    //     return baseUrl;
    //   }
    //   return "/dashboard";
    // },
  },
  pages: {
    signIn: "/login",
  },
  trustHost: true,
} satisfies NextAuthConfig;
