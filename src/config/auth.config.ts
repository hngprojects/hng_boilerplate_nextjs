import { NextAuthConfig, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import { googleAuth } from "~/actions/googleAuth";
import { nextlogin } from "~/actions/login";
import { LoginSchema } from "~/schemas";
import { CustomJWT } from "~/types";

const isDevelopment = process.env.NODE_ENV === "development";

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
          ...response.data.user,
        };

        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  debug: isDevelopment,
  callbacks: {
    async signIn({ account, profile, user }) {
      if (account?.provider === "google" && profile?.email) {
        return true;
      }
      return !!user;
    },
    async jwt({ token, user, account, profile }) {
      if (account?.provider !== "google") {
        return {
          ...token,
          ...user,
        } as CustomJWT;
      }

      if (!account?.id_token) {
        return token;
      }

      const response = await googleAuth({ id_token: account?.id_token });

      if (!response.data) {
        token = {
          email: profile?.email,
          name: profile?.given_name,
          picture: profile?.picture,
        } as CustomJWT;
        return token;
      }
      token = response.data as CustomJWT;
      token.picture = profile?.picture;
      token.access_token = response.access_token;

      user = response.data as CustomJWT;

      return token;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const customToken = token as CustomJWT;
      session.user = {
        id: customToken.id as string,
        first_name: customToken.first_name as string,
        last_name: customToken.last_name as string,
        image: token.picture || customToken.avatar_url || "",
        role: customToken.role as string,
        email: token.email as string,
      };

      session.access_token = customToken.access_token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  trustHost: true,
} satisfies NextAuthConfig;
