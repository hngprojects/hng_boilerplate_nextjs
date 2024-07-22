"use client";

import { Activity, DollarSign, PanelTop, Users } from "lucide-react";
import Link from "next/link";

import { ChartConfig } from "~/components/ui/chart";
import DataCard from "../common/DataCard/DataCard";
import { DatePickerDemo } from "./Calendar";
import { Chart } from "./Chart";

const generateRandomRevenue = () => (Math.floor(Math.random() * 11) + 1) * 500;

export default function Home() {
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

  const data = [
    {
      name: "Jackson Lee",
      email: "jackson.lee@gmail.com",
      amount: "+$2,999.00",
    },
    {
      name: "Olivia Martin",
      email: "olivia.martin@gmail.com",
      amount: "+$7,999.00",
    },
    {
      name: "Joseph Chernysuck",
      email: "joseph.chernysuck@gmail.com",
      amount: "+$5,999.00",
    },
    {
      name: "Paul Halland",
      email: "paul.halland@gmail.com",
      amount: "+$12,999.00",
    },
    {
      name: "Eden Hazard",
      email: "eden.hazard@gmail.com",
      amount: "+$3,999.00",
    },
    {
      name: "Ronaldo Messi",
      email: "ronaldo.martin@gmail.com",
      amount: "+$4,999.00",
    },
  ];

  const gradientClasses = [
    "bg-gradient-to-b from-orange-200 to-orange-700",
    "bg-gradient-to-b from-red-600 to-gray-900",
    "bg-gradient-to-b from-blue-400 to-green-600",
    "bg-gradient-to-b from-white to-gray-500 to-gray-900",
    "bg-gradient-to-b from-black to-blue-700",
    "bg-gradient-to-b from-yellow-400 to-blue-400",
  ];

  return (
    <div className="w-full p-4 md:p-8">
      <div className="mb-6 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold md:text-3xl">Dashboard</h1>
          <div className="mt-4 flex items-center justify-center space-x-4 rounded-[4px] border-2 border-border">
            <Link href="#" className="bg-input px-[12px] py-[6px]">
              Overview
            </Link>
            <Link href="#" className="px-[12px] py-[6px]">
              Analytics
            </Link>
            <Link href="#" className="px-[12px] py-[6px]">
              Report
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center rounded border">
            <DatePickerDemo />
            <span className="ml-2"></span>
          </div>
          <button className="rounded bg-primary px-[16px] py-[8px] text-primary-foreground">
            Download
          </button>
        </div>
      </div>
      <div className="gap:4 mb-6 grid grid-cols-1 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
        <DataCard
          heading={{
            title: "Total Revenue",
            icon: <DollarSign />,
          }}
          content={{ amount: "$45,000.00", subtext: "+20% from last month" }}
        />
        <DataCard
          heading={{
            title: "Subscriptions",
            icon: <Users />,
          }}
          content={{ amount: "+2350", subtext: "+150% from last month" }}
        />
        <DataCard
          heading={{ title: "Sales", icon: <PanelTop /> }}
          content={{ amount: "15,000", subtext: "+10% from last month" }}
        />
        <DataCard
          heading={{
            title: "Active Now",
            icon: <Activity />,
          }}
          content={{ amount: "574", subtext: "+201 since last hour" }}
        />
      </div>
      <div className="grid grid-cols-1 gap-[16px] lg:grid-cols-5">
        <div className="rounded bg-card p-4 shadow-md lg:col-span-3">
          <h2 className="mb-4 font-semibold">Overview</h2>
          <div className="rounded p-2">
            {chartData.length > 0 && (
              <Chart chartData={chartData} chartConfig={chartConfig} />
            )}
          </div>
        </div>
        <div className="w-full rounded bg-card p-4 shadow lg:col-span-2">
          <h2 className="font-semibold text-foreground">Recent Sales</h2>
          <h1 className="mb-6·text-breadcrumb-page">
            You made 265 sales this month
          </h1>
          <ul>
            {data.map((item, index) => (
              <li key={index} className="mb-2 flex justify-between">
                <div className="flex justify-start space-x-4">
                  <div
                    className={`rounded-full p-6 ${gradientClasses[index % gradientClasses.length]}`}
                  ></div>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-description-text text-sm">
                      {item.email}
                    </p>
                  </div>
                </div>
                <p className="text-foreground">{item.amount}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
