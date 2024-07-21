import RevenueDashboard from "~/components/revenuecard/RevenueDashboard";
import AdminLayout from "~/components/superadminlayout";

export default function Home() {
  return (
    <AdminLayout>
      <RevenueDashboard />
    </AdminLayout>
  );
}
