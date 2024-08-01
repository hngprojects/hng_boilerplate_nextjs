"use client";

import AuthProvider from "~/contexts/authContext";
import Providers from "~/components/providers";

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
