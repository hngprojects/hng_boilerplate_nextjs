// components/layout/index.tsx

import { SessionProvider } from "next-auth/react";

import Navbar from "./Navbar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SessionProvider>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </SessionProvider>
  );
};

export default Layout;
