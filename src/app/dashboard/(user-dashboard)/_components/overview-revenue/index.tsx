"use client";

import { useEffect, useState } from "react";

import { dashboard } from "~/actions/dashboard";
import { revenueData } from "~/app/dashboard/(user-dashboard)/_components/overview-revenue/revenueData";
import CardComponent from "~/components/common/DashboardCard/CardComponent";
import { useOrgContext } from "~/contexts/orgContext";

interface dashboard {
  revenue: number;
  subscriptions: number;
  sales: number;
  activeSubscription: number;
  monthSales: [
    {
      id: string;
      user_id: string;
      product_id: string;
      subscription_id: string;
      type: string;
      status: string;
      partners: string;
      amount: number;
      reference: string;
      created_at: string;
      paid_at: string;
      modified_at: string;
    },
  ];
}
export function OverviewRevenue() {
  const [dashboardObjectData, setDashboardObjectData] = useState<dashboard>();
  useEffect(() => {
    getDashboardData();
  }, []);
  const getDashboardData = async () => {
    const data = await dashboard();
    setDashboardObjectData(data);
  };
  const { isLoading, dashboardData } = useOrgContext();
  return (
    <div className="mb-6 mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      <CardComponent
        title={revenueData[0].title}
        // title={revenueData[0].title}
        value={dashboardObjectData?.revenue || 0}
        // value={dashboardData?.revenue.current_month || 0}
        percentage={dashboardData?.revenue.percentage_difference || 0}
        // percentage={dashboardData?.revenue.percentage_difference || 0}
        icon={revenueData[0].icon}
        // icon={revenueData[0].icon}
        loading={isLoading}
        // loading={isLoading}
      />
      <CardComponent
        title={revenueData[1].title}
        // title={revenueData[1].title}
        value={dashboardObjectData?.subscriptions || 0}
        // value={dashboardData?.Subscriptions.current_month || 0}
        percentage={dashboardData?.Subscriptions.percentage_difference || 0}
        // percentage={dashboardData?.Subscriptions.percentage_difference || 0}
        icon={revenueData[1].icon}
        // icon={revenueData[1].icon}
        loading={isLoading}
        // loading={isLoading}
      />
      <CardComponent
        title={revenueData[2].title}
        // title={revenueData[2].title}
        value={dashboardObjectData?.sales || 0}
        // value={dashboardData?.orders.current_month || 0}
        percentage={dashboardData?.orders.percentage_difference || 0}
        // percentage={dashboardData?.orders.percentage_difference || 0}
        icon={revenueData[2].icon}
        // icon={revenueData[2].icon}
        loading={isLoading}
        // loading={isLoading}
      />
      <CardComponent
        title={revenueData[3].title}
        // title={revenueData[3].title}
        value={dashboardObjectData?.activeSubscription || 0}
        // value={dashboardData?.active_users.current || 0}
        percentage={dashboardData?.active_users.difference_an_hour_ago || 0}
        // percentage={dashboardData?.active_users.difference_an_hour_ago || 0}
        icon={revenueData[3].icon}
        // icon={revenueData[3].icon}
        loading={isLoading}
        // loading={isLoading}
        isUser
      />
    </div>
  );
}
