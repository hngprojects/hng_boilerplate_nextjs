import RecentSales from "~/app/dashboard/(user-dashboard)/_components/RecentSales";
import {
  data,
  gradients,
} from "~/app/dashboard/(user-dashboard)/_components/salesData";

export function OverviewSales() {
  return (
    <RecentSales data={data} gradients={gradients} noOfSales={data.length} />
  );
}
