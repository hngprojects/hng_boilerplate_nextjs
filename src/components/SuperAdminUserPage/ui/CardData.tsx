import { ArrowUpRight, Box, User } from "lucide-react";

import { Card, CardContent, CardDescription, CardTitle } from "./card";

export const CardData = [
  {
    label: "Total Users",
    amount: 4000,
    description: "+10% from last month",
    icon: User,
    id: "card1",
  },
  {
    label: "Active Users",
    amount: 1500,
    description: "+20% from last month",
    icon: Box,
    id: "card2",
  },
  {
    label: "Deleted Users",
    amount: 2500,
    description: "+150% from last month",
    icon: ArrowUpRight,
    id: "card3",
  },
];

export default function CardDataContent() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
      {CardData.map((data) => (
        <Card
          key={data.id}
          // border-none rounded-xl shadow-md shadow-[#CBD5E1]
          className="py-4 shadow-slate-300"
        >
          <CardTitle>
            <div className="flex justify-between gap-2">
              <p className="text-sm">{data.label}</p>
              <data.icon className="h-4 w-4" />
            </div>
          </CardTitle>
          <CardContent className="bg-white p-4">
            <p className="text-[24px] font-bold">{data.amount} </p>
          </CardContent>
          <CardDescription>
            <p className="text-sm">{data.description} </p>
          </CardDescription>
        </Card>
      ))}
    </div>
  );
}
