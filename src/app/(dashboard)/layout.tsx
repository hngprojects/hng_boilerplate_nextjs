import { Suspense } from "react";

import DashboardNavbar from "./_components/layout/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-cols-[60px_1fr] md:grid-cols-[252px_1fr]">
      <div className="border-r bg-muted/40 md:block" />
      <div className="grid grid-rows-[auto_1fr]">
        <DashboardNavbar />
        <div className="p-8">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}
