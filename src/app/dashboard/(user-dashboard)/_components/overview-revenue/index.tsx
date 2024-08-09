"use client";

import { revenueData } from "~/app/dashboard/(user-dashboard)/_components/overview-revenue/revenueData";
import CardComponent from "~/components/common/DashboardCard/CardComponent";
import { useOrgContext } from "~/contexts/orgContext";

export function OverviewRevenue() {
  const { isLoading, dashboardData } = useOrgContext();
  return (
    <div className="mb-6 mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <CardComponent
        title={revenueData[0].title}
        value={dashboardData?.revenue.current_month || 0}
        percentage={dashboardData?.revenue.percentage_difference || 0}
        icon={revenueData[0].icon}
        loading={isLoading}
      />
      <CardComponent
        title={revenueData[1].title}
        value={dashboardData?.Subscriptions.current_month || 0}
        percentage={dashboardData?.Subscriptions.percentage_difference || 0}
        icon={revenueData[1].icon}
        loading={isLoading}
      />
      <CardComponent
        title={revenueData[2].title}
        value={dashboardData?.orders.current_month || 0}
        percentage={dashboardData?.orders.percentage_difference || 0}
        icon={revenueData[2].icon}
        loading={isLoading}
      />
      <CardComponent
        title={revenueData[3].title}
        value={dashboardData?.active_users.current || 0}
        percentage={dashboardData?.active_users.difference_an_hour_ago || 0}
        icon={revenueData[3].icon}
        loading={isLoading}
        isUser
      />
    </div>
  );
}
