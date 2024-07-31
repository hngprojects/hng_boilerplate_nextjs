"use client";

import { Chart } from "~/components/userDashboard/Chart";
import { chartConfig, chartData } from "~/components/userDashboard/chartData";

type OverviewChartProperties = {
  className?: string;
};
export function OverviewChart({ className }: OverviewChartProperties) {
  return (
    <Chart
      className={className}
      chartData={chartData}
      chartTitle="Overview"
      chartConfig={chartConfig}
    />
  );
}
