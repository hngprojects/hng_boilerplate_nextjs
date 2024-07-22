"use client";

import Link from "next/link";

import CardComponent from "~/components/adminDashboard/CardComponent";
import { cardData } from "~/components/adminDashboard/cardData";
import { Chart } from "~/components/adminDashboard/Chart";
import { chartConfig, chartData } from "~/components/adminDashboard/chartData";
import { data, gradients } from "~/components/adminDashboard/productData";
import TopProductsComponent from "~/components/adminDashboard/TopProductsComponent";
import { Card } from "~/components/ui/card";

const Client = () => {
  return (
    <section className="px-4 md:p-4 md:pt-0">
      <div className="mb-4 md:mb-0">
        <div className="flex flex-col items-start justify-start">
          <Link href="#" className="pb-[6px]">
            <h1 className="text-2xl font-bold text-neutral-600">Overview</h1>
          </Link>
          <p className="text-base font-normal text-neutral-600">
            Showing records from the last .....
          </p>
        </div>
      </div>

      <div className="mb-6 mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
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

      <div className="mt-6 flex flex-col gap-4 lg:flex-row">
        <Card className="rounded-xl border border-slate-300 bg-white p-4 shadow-md lg:flex-1">
          <h2 className="mb-2 ml-4 text-base font-semibold text-zinc-950">
            Overview
          </h2>
          <Chart chartData={chartData} chartConfig={chartConfig} />
        </Card>
        <TopProductsComponent data={data} gradients={gradients} />
      </div>
    </section>
  );
};

export default Client;
