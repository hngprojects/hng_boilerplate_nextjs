import { Inter } from "next/font/google";

import "./globals.css";

import { Metadata } from "next";
import Navbar from "~/components/layouts/Navbar";

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
        <main>
          <Navbar />
          {children}
          Footer
        </main>
      </body>
    </html>
  );
}
