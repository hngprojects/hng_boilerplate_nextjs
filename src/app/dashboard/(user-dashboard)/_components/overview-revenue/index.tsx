"use client";

import { revenueData } from "~/app/dashboard/(user-dashboard)/_components/overview-revenue/revenueData";
import CardComponent from "~/components/common/DashboardCard/CardComponent";
import { useOrgContext } from "~/contexts/orgContext";

export function OverviewRevenue() {
  const { subscriptionCount, isLoading } = useOrgContext();
  return (
    <div className="mb-6 mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <CardComponent
        title={revenueData[0].title}
        value={revenueData[0].value}
        description={revenueData[0].description}
        icon={revenueData[0].icon}
        loading={isLoading}
      />
      <CardComponent
        title={revenueData[1].title}
        value={subscriptionCount || 0}
        description={revenueData[1].description}
        icon={revenueData[1].icon}
        loading={isLoading}
      />
      <CardComponent
        title={revenueData[2].title}
        value={revenueData[2].value}
        description={revenueData[2].description}
        icon={revenueData[2].icon}
        loading={isLoading}
      />
      <CardComponent
        title={revenueData[3].title}
        value={revenueData[3].value}
        description={revenueData[3].description}
        icon={revenueData[3].icon}
        loading={isLoading}
      />
    </div>
  );
}
