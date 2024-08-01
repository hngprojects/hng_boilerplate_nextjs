import { Suspense } from "react";

import Sidebar from "~/app/dashboard/(admin)/_components/layout/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <Suspense>{children}</Suspense>
      </main>
    </div>
  );
}
