type CardData = {
  title: string;
  value: string;
  description: string;
  icon: string;
};

export const cardData: CardData[] = [
  {
    title: "Total Revenue",
    value: "$45,000.00",
    description: "+20% from last month",
    icon: `/icons/dollarSign.svg`,
  },
  {
    title: "Total Users",
    value: "+4,000",
    description: "+10% from last month",
    icon: `/icons/user.svg`,
  },
  {
    title: "Total Products",
    value: "1,000",
    description: "+20% from last month",
    icon: `/icons/box.svg`,
  },
  {
    title: "Lifetime Sales",
    value: "$450,000.00",
    description: "+150% from last month",
    icon: `/icons/arrowUp.svg`,
  },
];
