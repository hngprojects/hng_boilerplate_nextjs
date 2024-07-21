import AdminNavbar from "~/components/superadminlayout/navbar/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:grid-cols-[252px_1fr]x lg:grid-cols-[252px_1fr]x grid min-h-[100dvh] grid-rows-[auto_1fr]">
      <div className="hidden border-r bg-muted/40 md:block"></div>
      <div className="flex w-full flex-col gap-y-4 px-2 lg:gap-y-8 lg:px-4">
        <AdminNavbar />
        <div className="relative w-full bg-white">{children}</div>
      </div>
    </div>
  );
}
