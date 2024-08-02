import type { LucideIconName } from "~/components/common/lucide-icon";

type CardData = {
  title: string;
  value: string;
  description: string;
  icon: LucideIconName;
};

export const cardData: CardData[] = [
  {
    title: "Total Revenue",
    value: "$45,000.00",
    description: "+20% from last month",
    icon: "dollar-sign",
  },
  {
    title: "Total Users",
    value: "+4,000",
    description: "+10% from last month",
    icon: "user",
  },
  {
    title: "Total Products",
    value: "1,000",
    description: "+20% from last month",
    icon: "box",
  },
  {
    title: "Lifetime Sales",
    value: "$450,000.00",
    description: "+150% from last month",
    icon: "arrow-up-right",
  },
];
