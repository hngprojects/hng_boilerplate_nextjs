import { getAllNotifications } from "~/actions/notifications/getAllNotifications";
import { getAnalytics, getStatistics } from "~/actions/organization";
import { getAllProduct } from "~/actions/product";
import OrgContextProvider from "~/contexts/orgContext";
import { auth } from "~/lib/auth";

interface GeneralLayoutProperties {
  children: React.ReactNode;
}

export default async function GeneralLayout(
  properties: GeneralLayoutProperties,
) {
  const session = await auth();

  if (!session || !session.currentOrgId) {
    return;
  }

  const { children } = properties;

  const [notifications, statistics, analytics, products] = await Promise.all([
    getAllNotifications(),
    getStatistics(),
    getAnalytics(),
    getAllProduct(session?.currentOrgId),
  ]);

  return (
    <OrgContextProvider
      initialData={{
        notifications: notifications?.data,
        dashboardData: statistics?.data,
        monthlyData: analytics?.data,
        products: products.products,
      }}
    >
      {children}
    </OrgContextProvider>
  );
}
