import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import Providers from "~/components/providers";
import { Toaster } from "~/components/ui/toaster";
import AuthProvider from "~/contexts/authContext";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "HNG Boilerplate",
  description: "HNG Boilerplate",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="mx-auto h-full w-full max-w-[1920px]">
          <Providers />
          <AuthProvider>
            <NextIntlClientProvider messages={messages}>
              {children}
            </NextIntlClientProvider>
          </AuthProvider>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
