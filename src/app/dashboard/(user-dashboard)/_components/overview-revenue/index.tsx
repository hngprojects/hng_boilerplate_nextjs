import { revenueData } from "~/app/dashboard/(user-dashboard)/_components/overview-revenue/revenueData";
import CardComponent from "~/components/common/DashboardCard/CardComponent";

export function OverviewRevenue() {
  return (
    <div className="mb-6 mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {revenueData.map((card, index) => (
        <CardComponent
          key={index}
          title={card.title}
          value={card.value}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
}
