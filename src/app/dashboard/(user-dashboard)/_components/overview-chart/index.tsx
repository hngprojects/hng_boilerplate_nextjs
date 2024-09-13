"use client";

import { Chart } from "~/components/userDashboard/Chart";
import { chartConfig, chartData } from "~/components/userDashboard/chartData";
import { useOrgContext } from "~/contexts/orgContext";

type OverviewChartProperties = {
  className?: string;
};
export function OverviewChart({ className }: OverviewChartProperties) {
  const { monthlyData } = useOrgContext();
  return (
    <Chart
      className={className}
      chartData={monthlyData || chartData}
      chartTitle="Overview"
      chartConfig={chartConfig}
    />
  );
}
