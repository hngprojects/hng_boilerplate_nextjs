"use client";

import { Activity, DollarSign, PanelTop, Users } from "lucide-react";
import Link from "next/link";

import { DatePickerDemo } from "./Calendar";
import { Chart } from "./Chart";

export default function Home() {
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

  const gradients = [
    "linear-gradient(to bottom, #F6C790, #E77F1E)",
    "linear-gradient(to bottom, #F81404, #0F172A)",
    "linear-gradient(to bottom, #04BEF8, #0AB025)",
    "linear-gradient(to bottom, #FFFFFF, #7F838D, #0F172A)",
    "linear-gradient(to bottom, #1E1D1C, #3A1EE7)",
    "linear-gradient(to bottom, #EF9B38, #7EA7D9)",
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center justify-center mt-4 border-2 border-[#CBD5E1] rounded-[4px] space-x-4">
            <Link href="#" className="bg-[#F1F5F9] py-[6px] px-[12px]">
              Overview
            </Link>
            <Link href="#" className="py-[6px] px-[12px]">
              Analytics
            </Link>
            <Link href="#" className="py-[6px] px-[12px]">
              Report
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center border rounded">
            <DatePickerDemo />
            <span className="ml-2 "></span>
          </div>
          <button className="bg-orange-500 text-white px-[16px] py-[8px] rounded">
            Download
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-[24px] rounded shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-[14px] font-medium">Total Revenue</h2>
            <DollarSign className="h-[24px]" />
          </div>
          <p className="text-[24px] font-semibold">$45,000.00</p>
          <p className="text-sm text-[#525252]">+20% from last month</p>
        </div>
        <div className="bg-white p-[24px] rounded shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-[14px] font-medium">Subscriptions</h2>
            <Users className="h-[24px]" />
          </div>
          <p className="text-[24px] font-semibold">+2350</p>
          <p className="text-sm text-[#525252]">+150% from last month</p>
        </div>
        <div className="bg-white p-[24px] rounded shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="h-[14px] font-medium">Sales</h2>
            <PanelTop className="h-[24px]" />
          </div>
          <p className="text-[24px] font-semibold">15,000</p>
          <p className="text-sm text-[#525252]">+10% from last month</p>
        </div>
        <div className="bg-white p-[24px] rounded shadow-md">
          <div className="flex items-center justify-between">
            <h2 className="text-[14px] font-medium">Active Now</h2>
            <Activity className="h-[24px]" />
          </div>
          <p className="text-[24px] font-semibold">574</p>
          <p className="text-sm text-[#525252]">+201 since last hour</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-[16px]">
        <div className="bg-white p-4 rounded shadow-md lg:col-span-3">
          <h2 className="font-semibold mb-4">Overview</h2>
          <div className="p-2  rounded">
            <Chart />
          </div>
        </div>
        <div className="w-full bg-white p-4 rounded shadow lg:col-span-2">
          <h2 className="font-semibold text-[#080808]">Recent Sales</h2>
          <h1 className="text-[#626262] mb-6">You made 265 sales this month</h1>
          <ul>
            {data.map((item, index) => (
              <li key={index} className="flex justify-between mb-2">
                <div className="flex justify-start space-x-4">
                  <p
                    className="rounded-full p-6"
                    style={{ background: gradients[index % gradients.length] }}
                  ></p>
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-[#525252]">{item.email}</p>
                  </div>
                </div>
                <p className="text-[#0A0A0A]">{item.amount}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
