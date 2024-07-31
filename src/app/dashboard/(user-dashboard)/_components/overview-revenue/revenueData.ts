import type { LucideIconName } from "~/components/common/lucide-icon";

type CardData = {
  title: string;
  value: string;
  description: string;
  icon: LucideIconName;
};

export const revenueData: CardData[] = [
  {
    title: "Total Revenue",
    value: "$45,000.00",
    description: "+20% from last month",
    icon: "dollar-sign",
  },
  {
    title: "Subscriptions",
    value: "+2,350",
    description: "+150% from last month",
    icon: "users",
  },
  {
    title: "Sales",
    value: "15,000",
    description: "+10% from last month",
    icon: "credit-card",
  },
  {
    title: "Active Now",
    value: "574",
    description: "+201 since last hour",
    icon: "trending-up",
  },
];
