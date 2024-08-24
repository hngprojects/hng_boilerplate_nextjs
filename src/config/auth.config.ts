import { NextAuthConfig, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";

import { nextlogin } from "~/actions/login";
import { googleAuth, twitterAuth } from "~/actions/socialAuth";
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
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
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
          ...response.data,
          ...response.data.user,
          access_token: response.access_token,
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

      if (account?.provider === "twitter") {
        return true;
      }

      return !!user;
    },
    async jwt({ token, user, account, profile }) {
      if (account?.provider === "google") {
        if (!account?.id_token) {
          return token;
        }

        const response = await googleAuth(account?.id_token);

        if (!response.data) {
          token = {
            email: profile?.email,
            name: profile?.given_name,
            picture: profile?.picture,
          } as CustomJWT;
          token.access_token = response.access_token;
          return token;
        }

        token = response.data as CustomJWT;
        token.picture = profile?.picture;
        token.access_token = response.access_token;

        user = response.data as CustomJWT;

        return token;
      }

      if (account?.provider === "twitter") {
        if (!account?.access_token) {
          return token;
        }

        const response = await twitterAuth(account?.access_token);

        if (!response || !("data" in response)) {
          token = {
            email: user?.email,
            name: user?.name,
            picture: user?.image,
          } as CustomJWT;
          return token;
        }
        token = response.data as CustomJWT;
        token.picture = profile?.picture;
        token.access_token = response.access_token;

        user = response.data as CustomJWT;

        return token;
      }

      return {
        ...token,
        ...user,
      } as CustomJWT;
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      const customToken = token as CustomJWT;
      session.user = {
        id: customToken.id as string,
        first_name: customToken.first_name,
        last_name: customToken.last_name,
        image: customToken.avatar_url || "",
        email: customToken.email as string,
      };
      session.access_token = customToken.access_token;
      session.userOrg = customToken.organisations;
      session.currentOrgId =
        customToken.organisations &&
        customToken.organisations[0]?.organisation_id;

      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
  secret: process.env.AUTH_SECRET,
  trustHost: true,
} satisfies NextAuthConfig;
