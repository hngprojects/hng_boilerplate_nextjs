import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { CardContent } from "~/components/ui/card";
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

export function Chart({ chartData = [], chartConfig }: ChartProperties) {
  return (
    <>
      <div className="h-full w-full">
        <CardContent className="h-full w-full pl-0">
          <ChartContainer
            className="h-[250px] w-full p-0 md:h-full"
            config={chartConfig}
          >
            <BarChart
              className="w-full"
              accessibilityLayer
              data={chartData}
              margin={{ top: 20, bottom: 2 }}
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
                tickFormatter={(value) => `$${value}`}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar
                dataKey="revenue"
                fill="var(--color-desktop)"
                radius={8}
                data-testid="bar"
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </div>
    </>
  );
}
