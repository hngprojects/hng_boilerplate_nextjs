import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

import { GOOGLE_SIGN_IN } from "./actions/google";

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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async signIn({ account, profile, user }: any) {
      // if (account && account.provider === "google") {
      //   // eslint-disable-next-line unicorn/prevent-abbreviations
      //   const res = await GOOGLE_SIGN_IN(profile);
      //   const use = res.user;

      //   return { user: { ...use } };
      // }
      return { ...account, ...profile, ...user };
    },
    async jwt({ token, user, account }) {
      if (account && account.provider !== "google") {
        return { ...token, ...user };
      }
      // eslint-disable-next-line unicorn/prevent-abbreviations
      const res = await GOOGLE_SIGN_IN(account);

      const use = res.user;

      user = use;

      return { ...token, ...user };
    },
    async session({ session, token }) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      session.user = token as any;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
} satisfies NextAuthConfig;
