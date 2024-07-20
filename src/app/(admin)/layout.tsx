import AdminNavbar from "~/components/superadminlayout/navbar/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[252px_1fr] lg:grid-cols-[252px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block"></div>
      <div className="flex flex-col">
        <AdminNavbar />
        {children}
      </div>
    </div>
  );
}
