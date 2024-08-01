import { NextAuthConfig, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { cookies } from "next/headers";

import { LoginSchema } from "~/schemas";
import { ApiResponse, CustomJWT, CustomSession } from "~/types";
import { googleAuth } from "~/utils/googleAuth";
import { loginAuth } from "~/utils/loginAuth";

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
          throw new Error("Invalid credentials");
        }
        const { email, password, rememberMe } = validatedFields.data;
        try {
          const response = await loginAuth({ email, password, rememberMe });

          if (!response) {
            throw new Error("User authentication failed");
          }

          return {
            ...response,
          } as CustomJWT;
        } catch {
          throw new Error("Something went wrong");
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account?.provider === "google" && profile?.email) {
        return profile.email.endsWith("@gmail.com");
      }

      return !!user;
    },
    async jwt({ token, user, account }) {
      if (account?.provider === "google" && account?.id_token) {
        try {
          const response: ApiResponse = (await googleAuth(
            account.id_token ?? "",
          )) as ApiResponse;

          if (!response) {
            throw new Error("User authentication failed");
          }

          return {
            ...token,
            ...response,
          } as CustomJWT;
        } catch {
          throw new Error("Something went wrong");
        }
      }

      return { ...token, ...user } as CustomJWT;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: JWT;
    }): Promise<CustomSession> {
      const customToken = token as CustomJWT;
      const authToken = cookies().get("access_token")?.value;

      session.user = {
        id: customToken.id,
        first_name:
          customToken.first_name ||
          customToken.name?.split(" ")[0] ||
          customToken.fullname?.split(" ")[0] ||
          "",
        last_name:
          customToken.last_name ||
          customToken.name?.split(" ").slice(1).join(" ") ||
          customToken.fullname?.split(" ").slice(1).join(" ") ||
          "",
        email: customToken.email,
        image: customToken.picture || customToken.avatar_url || "",
        role: customToken.role,
      };
      session.access_token = authToken;

      return session as CustomSession;
    },
  },
  pages: {
    signIn: "/login",
  },
  trustHost: true,
} satisfies NextAuthConfig;
