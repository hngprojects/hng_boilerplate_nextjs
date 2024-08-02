"use client";

import { cardData } from "~/components/adminDashboard/cardData";
import { Chart } from "~/components/adminDashboard/Chart";
import { chartConfig, chartData } from "~/components/adminDashboard/chartData";
import { data, gradients } from "~/components/adminDashboard/productData";
import TopProductsComponent from "~/components/adminDashboard/TopProductsComponent";
import CardComponent from "~/components/common/DashboardCard/CardComponent";
import { Card } from "~/components/ui/card";

const AdminPage = () => {
  return (
    <section>
      <div className="mb-4 md:mb-0">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-2xl font-semibold text-neutral-dark-1">
            Overview
          </h1>
          <p className="text-base font-normal leading-[19.36px] text-neutral-dark-1">
            Showing records from the last .....
          </p>
        </div>
      </div>

      <div className="mb-6 mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cardData.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            value={card.value}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>

      <div className="mt-8 flex w-full flex-col gap-4 xl:flex-row">
        <Card className="basis-2/3 rounded-xl border border-border bg-white px-1.5 py-3 shadow-spread md:px-2 md:py-5">
          <h2 className="mb-2 ml-3 text-xl font-semibold leading-4 text-zinc-950">
            Overview
          </h2>
          <Chart chartData={chartData} chartConfig={chartConfig} />
        </Card>
        <TopProductsComponent data={data} gradients={gradients} />
      </div>
    </section>
  );
};

export default AdminPage;
