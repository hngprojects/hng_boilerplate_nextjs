import type { LucideIconName } from "~/components/common/lucide-icon";

type UserData = {
  title: string;
  value: string;
  description: string;
  icon: LucideIconName;
};

export const users: UserData[] = [
  {
    title: "Total Users",
    value: "0",
    description: "+10% from last month",
    icon: "user",
  },
  {
    title: "Active Users",
    value: "0",
    description: "+10% from last month",
    icon: "box",
  },
  {
    title: "Inactive Users",
    value: "0",
    description: "+20% from last month",
    icon: "arrow-up-right",
  },
];
