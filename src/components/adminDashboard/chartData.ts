import { ChartConfig } from "~/components/ui/chart";

export const generateRandomRevenue = () =>
  (Math.floor(Math.random() * 11) + 1) * 500;

export const chartData = [
  { month: "January", revenue: generateRandomRevenue() },
  { month: "February", revenue: generateRandomRevenue() },
  { month: "March", revenue: generateRandomRevenue() },
  { month: "April", revenue: generateRandomRevenue() },
  { month: "May", revenue: generateRandomRevenue() },
  { month: "June", revenue: generateRandomRevenue() },
  { month: "July", revenue: generateRandomRevenue() },
  { month: "August", revenue: generateRandomRevenue() },
  { month: "September", revenue: generateRandomRevenue() },
  { month: "October", revenue: generateRandomRevenue() },
  { month: "November", revenue: generateRandomRevenue() },
  { month: "December", revenue: generateRandomRevenue() },
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
