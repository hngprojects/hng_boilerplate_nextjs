"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "~/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";

type ChartProperties = {
  chartData: { month: string; revenue: number }[];
  chartConfig: ChartConfig;
};

export function Chart({ chartData, chartConfig }: ChartProperties) {
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
