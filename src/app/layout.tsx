import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "~/components/layouts/Navbar";
import Sidebar from "~/components/layouts/sidebar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boilerplate",
  description: "HNG Boilerplate Settings Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-6 md:scroll-pt-10">
      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <Sidebar />
        {children}
        </body>
    </html>
  );
}
