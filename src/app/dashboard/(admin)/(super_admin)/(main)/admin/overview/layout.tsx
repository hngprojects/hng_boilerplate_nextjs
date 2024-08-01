import { Suspense } from "react";

import Sidebar from "~/app/dashboard/(admin)/_components/layout/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <Sidebar />

      <main className="mt-12 p-3 pt-6 md:p-5 md:pt-8">
        <Suspense>{children}</Suspense>
      </main>
    </div>
  );
}
