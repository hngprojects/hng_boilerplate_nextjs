import { Suspense } from "react";

import DashboardNavbar from "./_components/layout/navbar";
import Sidebar from "./_components/layout/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full pl-[50px] md:pl-[220px] lg:pl-[252px]">
      <Sidebar />
      <DashboardNavbar />
      <div className="">
        <main className="mt-12 p-3 pt-6 md:p-5 md:pt-8">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
