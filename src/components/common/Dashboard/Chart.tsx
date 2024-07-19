"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "~/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

const generateRandomRevenue = () => (Math.floor(Math.random() * 11) + 1) * 500;

const chartData = [
  { month: "January", revenue: generateRandomRevenue() },
  { month: "February", revenue: generateRandomRevenue() },
  { month: "March", revenue: generateRandomRevenue() },
  { month: "April", revenue: generateRandomRevenue() },
  { month: "May", revenue: generateRandomRevenue() },
  { month: "June", revenue: generateRandomRevenue() },
  { month: "july", revenue: generateRandomRevenue() },
  { month: "August", revenue: generateRandomRevenue() },
  { month: "Spetmeber", revenue: generateRandomRevenue() },
  { month: "Ocotber", revenue: generateRandomRevenue() },
  { month: "November", revenue: generateRandomRevenue() },
  { month: "December", revenue: generateRandomRevenue() },
];

const chartConfig = {
  desktop: {
    label: "Revenue",
    color: "#F97316",
  },
} satisfies ChartConfig;

export function Chart() {
  return (
    <Card>
      <CardContent className="pl-0">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <YAxis
              ticks={[0, 1500, 3000, 4500, 6000]}
              axisLine={false}
              tickLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="revenue" fill="var(--color-desktop)" radius={8}></Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
