import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Layout from "~/components/layouts";

import "./globals.css";
import "~/components/layouts/homepage/styles/styles.css";

import Sidebar from "~/components/layouts/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
