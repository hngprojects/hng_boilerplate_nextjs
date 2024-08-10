import NextAuth, { type DefaultSession } from "next-auth";

import authConfig from "~/config/auth.config";
import { User } from "~/types";

export const {
  handlers: { GET, POST },
  auth,
  unstable_update,
} = NextAuth({
  ...authConfig,
});

declare module "next-auth" {
  interface Session {
    user: {
      id: User["id"];
      first_name: User["first_name"];
      last_name: User["last_name"];
      email: User["email"];
      image: User["avatar_url"];
      role: User["role"];
      bio?: string;
      username?: string;
      is_superadmin?: boolean;
    } & DefaultSession["user"];
    access_token?: string;
  }
}
