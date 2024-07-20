import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Toaster } from "~/components/ui/toaster";

import "./globals.css";
import "~/components/layouts/homepage/styles/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metaData: Metadata = {
  title: "Boilerplate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
