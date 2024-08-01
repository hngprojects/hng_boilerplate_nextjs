"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface AuthProviderProperties {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProperties) {
  return <SessionProvider>{children}</SessionProvider>;
}
