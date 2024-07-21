import AdminNavbar from "~/components/superadminlayout/navbar/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div
        className="hidden border-r bg-muted/40 md:block"
        role="sidebar"
      ></div>
      <div className="flex w-full flex-col gap-y-4 px-2 lg:gap-y-8 lg:px-4">
        <AdminNavbar />
        <div role="children" className="relative w-full bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
