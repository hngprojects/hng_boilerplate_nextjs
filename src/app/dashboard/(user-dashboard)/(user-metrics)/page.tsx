import { OverviewChart } from "~/app/dashboard/(user-dashboard)/_components/overview-chart";

export default function DashboardOverview() {
  return (
    <div className="flex flex-col gap-4">
      <div>Revenue Cards</div>
      <div className="flex flex-wrap gap-4">
        <OverviewChart className="flex-grow basis-full md:basis-1/2 lg:max-w-[787px]" />
        <div className="flex-1 flex-grow md:min-w-[400px]">Recent Sales</div>
      </div>
    </div>
  );
}
