import { Suspense } from "react";

import Navbar from "~/components/layouts/navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar is_auth_path />
      <div className="mx-auto w-5/6">
        <Suspense>{children}</Suspense>
      </div>
    </>
  );
}

export default Layout;
