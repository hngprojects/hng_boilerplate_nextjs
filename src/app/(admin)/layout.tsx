import { Suspense } from "react";

import DashboardNavbar from "./_components/layout/navbar";
import Sidebar from "./_components/layout/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-[60px_1fr] md:grid-cols-[252px_1fr]">
      <Sidebar />
      <div className="grid grid-rows-[auto_1fr]">
        <DashboardNavbar />
        <main className="p-8">
          <Suspense>{children}</Suspense>
        </main>
      </div>
    </div>
  );
}
