import { ChartConfig } from "~/components/ui/chart";

export const generateZeroRevenue = () => 0;

export const chartData = [
  { month: "January", revenue: generateZeroRevenue() },
  { month: "February", revenue: generateZeroRevenue() },
  { month: "March", revenue: generateZeroRevenue() },
  { month: "April", revenue: generateZeroRevenue() },
  { month: "May", revenue: generateZeroRevenue() },
  { month: "June", revenue: generateZeroRevenue() },
  { month: "July", revenue: generateZeroRevenue() },
  { month: "August", revenue: generateZeroRevenue() },
  { month: "September", revenue: generateZeroRevenue() },
  { month: "October", revenue: generateZeroRevenue() },
  { month: "November", revenue: generateZeroRevenue() },
  { month: "December", revenue: generateZeroRevenue() },
];

export const chartConfig: ChartConfig = {
  desktop: {
    label: "Revenue",
    color: "#F97316",
  },
  mobile: {
    label: "Mobile",
    color: "#F97316",
  },
};
