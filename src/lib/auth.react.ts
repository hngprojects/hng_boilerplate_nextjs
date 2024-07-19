import type { DefaultSession } from "next-auth";
import { getSession as getAuthSession } from "next-auth/react";

export { signIn, signOut } from "next-auth/react";

interface Session extends DefaultSession {
  user?: DefaultSession["user"] & {
    id: string;
  };
}

// @ts-expect-error Hacking the type so we don't have to do the module augmentation technique.
export const getSession: () => Promise<Session | null> = getAuthSession;
