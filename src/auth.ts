import NextAuth, { type DefaultSession } from "next-auth";

import authConfig from "./auth.config";
import { IUser } from "./types";

export const {
  handlers: { GET, POST },
  auth,
  unstable_update,
} = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
});

declare module "next-auth" {
  interface Session {
    user: {
      id: IUser["id"];
      name: IUser["name"];
      email: IUser["email"];
      image: IUser["image"];
      access_token: IUser["access_token"];
    } & DefaultSession["user"];
  }
}
