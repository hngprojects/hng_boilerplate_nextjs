import NextAuth from "next-auth";

import authConfig from "~/config/auth.config";

export const {
  handlers: { GET, POST },
  auth,
  unstable_update,
} = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
});
