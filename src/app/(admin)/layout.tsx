import { Suspense } from "react";

import AdminNavbar from "~/components/superadminlayout/navbar/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:grid-cols-[252px_1fr]x lg:grid-cols-[252px_1fr]x grid min-h-[100dvh] grid-rows-[auto_1fr]">
      {/* <div className="hidden border-r bg-muted/40 md:block" /> */}
      <AdminNavbar />

      <div className="relative w-full bg-white px-2 max-lg:overflow-hidden xl:px-4">
        <Suspense>{children}</Suspense>
      </div>
    </div>
  );
}
