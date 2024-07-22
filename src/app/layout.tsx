import "./globals.css";

// import "~/components/layouts/homepage/styles/styles.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "~/components/ui/toaster";

import "./globals.css";

import Providers from "~/components/Providers";

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
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
