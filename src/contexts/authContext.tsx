"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { ReactNode } from "react";

interface AuthProviderProperties {
  children: ReactNode;
}

function SessionChecker({ children }: AuthProviderProperties) {
  const { status } = useSession();

  if (status === "loading") {
    return;
  }

  return <>{children}</>;
}

export default function AuthProvider({ children }: AuthProviderProperties) {
  return (
    <SessionProvider>
      <SessionChecker>{children}</SessionChecker>
    </SessionProvider>
  );
}
