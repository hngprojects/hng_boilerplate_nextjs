type CardData = {
  title: string;
  value: string;
  description: string;
  icon: string;
};

export const revenueData: CardData[] = [
  {
    title: "Total Revenue",
    value: "$45,000.00",
    description: "+20% from last month",
    icon: `/admin-dashboard/icons/dollarSign.svg`,
  },
  {
    title: "Subscriptions",
    value: "+2,350",
    description: "+150% from last month",
    icon: `/admin-dashboard/icons/userGroup.svg`,
  },
  {
    title: "Sales",
    value: "15,000",
    description: "+10% from last month",
    icon: `/admin-dashboard/icons/creditCard.svg`,
  },
  {
    title: "Active Now",
    value: "574",
    description: "+201 since last hour",
    icon: `/admin-dashboard/icons/arrowRise.svg`,
  },
];
