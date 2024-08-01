"use client";

import Providers from "~/components/providers";
import AuthProvider from "~/contexts/authContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <Providers />
      {children}
    </AuthProvider>
  );
}
