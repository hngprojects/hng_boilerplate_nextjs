import { Suspense } from "react";

import Footer from "~/components/layouts/footer";
import Navbar from "~/components/layouts/navbar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-5/6">
        <Suspense>{children}</Suspense>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
