import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { SessionProvider } from "next-auth/react";

import Providers from "~/components/providers";
import { Toaster } from "~/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "HNG Boilerplate",
  description: "HNG Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="mx-auto w-full">
          <Providers />
          <SessionProvider>{children}</SessionProvider>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
