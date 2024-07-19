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
    "linear-gradient(to right, #ff7e5f, #feb47b)",
    "linear-gradient(to right, #00c6ff, #0072ff)",
    "linear-gradient(to right, #f9d423, #ff4e50)",
    "linear-gradient(to right, #a1c4fd, #c2e9fb)",
    "linear-gradient(to right, #b26dff, #8e2de2)",
    "linear-gradient(to right, #ff9a9e, #fad0c4)",
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center justify-center mt-4 border-2 border-slate-200 rounded-md space-x-4">
            <Link href="#" className="bg-slate-100 p-2">
              Overview
            </Link>
            <p>Analytics</p>
            <p className="p-2">Report</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center border rounded px-2 py-1">
            <DatePickerDemo />
            <span className="ml-2 "></span>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Download
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 py-8 rounded shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h2>Total Revenue</h2>
            <DollarSign />
          </div>
          <p className="text-2xl font-bold">$45,000.00</p>
          <p className="text-sm">+20% from last month</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h2>Subscriptions</h2>
            <Users />
          </div>
          <p className="text-2xl font-bold">+2350</p>
          <p className="text-sm">+150% from last month</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h2>Sales</h2>
            <PanelTop />
          </div>
          <p className="text-2xl font-bold">15,000</p>
          <p className="text-sm">+10% from last month</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-gray-600">Active Now</h2>
            <Activity className="text-gray-600" />
          </div>
          <p className="text-2xl font-bold">574</p>
          <p className="text-sm">+201 since last hour</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-md lg:col-span-2">
          <h2 className="font-semibold mb-4">Overview</h2>
          <div className="p-2  rounded">
            <Chart />
          </div>
        </div>
        <div className="w-full bg-white p-4 rounded shadow">
          <h2 className="font-semibold">Recent Sales</h2>
          <h1 className="text-gray-600 mb-4">You made 265 sales this month</h1>
          <ul>
            {data.map((item, index) => (
              <li key={index} className="flex justify-between mb-2">
                <p
                  className="rounded-full p-6"
                  style={{ background: gradients[index % gradients.length] }}
                ></p>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-gray-600">{item.email}</p>
                </div>
                <p className="text-green-600">{item.amount}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
