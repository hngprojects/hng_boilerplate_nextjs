import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "~/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import { cn } from "~/lib/utils";

type ChartProperties = {
  chartData: { month: string; revenue: number }[] | undefined;
  chartConfig: ChartConfig;
  chartTitle: string;
  className?: string;
};

export function Chart({
  chartData = [],
  chartConfig,
  chartTitle,
  className,
}: ChartProperties) {
  return (
    <Card
      className={cn(
        "rounded-xl border border-border bg-white px-1.5 py-3 shadow-spread md:px-2 md:py-5",
        className,
      )}
    >
      <h2 className="mb-2 ml-3 text-xl font-semibold leading-4 text-zinc-950">
        {chartTitle}
      </h2>

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
                radius={3}
                data-testid="bar"
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </div>
    </Card>
  );
}
