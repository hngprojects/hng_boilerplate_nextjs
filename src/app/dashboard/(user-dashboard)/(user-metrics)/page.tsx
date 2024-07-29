import { OverviewChart } from "~/app/dashboard/(user-dashboard)/_components/overview-chart";
import { OverviewRevenue } from "~/app/dashboard/(user-dashboard)/_components/overview-revenue";
import { OverviewSales } from "~/app/dashboard/(user-dashboard)/_components/overview-sales";

export default function DashboardOverview() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <OverviewRevenue />
      </div>
      <div className="flex flex-wrap gap-4">
        <OverviewChart className="flex-grow basis-full md:basis-1/2 lg:max-w-[787px]" />
        <div className="flex-1 flex-grow md:min-w-[400px]">
          <OverviewSales />
        </div>
      </div>
    </div>
  );
}
