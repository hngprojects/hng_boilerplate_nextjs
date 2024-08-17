import { Suspense } from "react";

import Providers from "~/components/providers";
import DashboardNavbar from "./_components/layout/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <DashboardNavbar />
      <Providers />
      <div className="bg-[#FFFFFF]">
        <main className="mt-12 p-3 pt-6 md:px-5 md:pt-8">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
