interface waitListCardData {
  title: string;
  value: number;
  description: string;
  icon: string;
}

export const waitListCardData: waitListCardData[] = [
  {
    title: "Total Users",
    value: 4000,
    description: "+10% from last month",
    icon: `/admin-dashboard/icons/user.svg`,
  },
  {
    title: "Active Users",
    value: 1500,
    description: "+20% from last month",
    icon: `/admin-dashboard/icons/box.svg`,
  },
  {
    title: "Deleted Users",
    value: 2500,
    description: "+150% from last month",
    icon: `/admin-dashboard/icons/arrowUp.svg`,
  },
];

export interface WaitListDataProperties {
  id?: string;
  name: string;
  email: string;
  notes: string;
  status: "Online" | "Offline" | "Out of stock";
  date: string;
}
export const dummyUsers: WaitListDataProperties[] = [
  {
    name: "John Doe",
    email: "Johndoe2@gmail.com",
    notes: "Online request",
    status: "Offline",
    date: "2024-07-16 10:36AM",
  },
  {
    name: "Peter Paul",
    email: "Peterpau2@gmail.com",
    notes: "Online request",
    status: "Online",
    date: "2024-07-16 10:36AM",
  },
  {
    name: "Williams Kyle",
    email: "Willkyle12@gmail.com",
    notes: "Online request",
    status: "Online",
    date: "2024-07-16 10:36AM",
  },
  {
    name: "Ola Ola",
    email: "Olaolaolu1@gmail.com",
    notes: "Online request",
    status: "Offline",
    date: "2024-07-16 10:36AM",
  },
  {
    name: "Mary Jane",
    email: "Maryjane2@gmail.com",
    notes: "Online request",
    status: "Online",
    date: "2024-07-16 10:36AM",
  },
  {
    name: "Binta Doyle",
    email: "Bintadoyle@gmail.com",
    notes: "Online request",
    status: "Out of stock",
    date: "2024-07-16 10:36AM",
  },
  {
    name: "Binta Doyle",
    email: "Bintadoyle@gmail.com",
    notes: "Online request",
    status: "Out of stock",
    date: "2024-07-16 10:36AM",
  },
];

export const waitListData: WaitListDataTypes[] = [
  {
    pageTitle: "The Lemonade Blender",
    urlSlug: "Product",
    status: "active",
    createdDate: "01-01-24",
    activate: false,
  },
  {
    pageTitle: "The Lemonade Blender",
    urlSlug: "Product",
    status: "active",
    createdDate: "01-01-24",
    activate: false,
  },
  {
    pageTitle: "Bean Cake Powder",
    urlSlug: "Product",
    status: "active",
    createdDate: "02-07-24",
    activate: true,
  },
  {
    pageTitle: "Flour Mixer",
    urlSlug: "Product",
    status: "inactive",
    createdDate: "04-07-24",
    activate: false,
  },
  {
    pageTitle: "Smoothie Maker",
    urlSlug: "Product",
    status: "inactive",
    createdDate: "06-08-24",
    activate: false,
  },
  {
    pageTitle: "Blender",
    urlSlug: "Product",
    status: "active",
    createdDate: "12-08-24",
    activate: true,
  },
  {
    pageTitle: "Cake Powder",
    urlSlug: "Product",
    status: "active",
    createdDate: "13-09-24",
    activate: true,
  },
  {
    pageTitle: "Coffee Grinder",
    urlSlug: "Product",
    status: "inactive",
    createdDate: "15-09-24",
    activate: false,
  },
  {
    pageTitle: "Juicer",
    urlSlug: "Product",
    status: "active",
    createdDate: "20-09-24",
    activate: true,
  },
  {
    pageTitle: "Food Processor",
    urlSlug: "Product",
    status: "inactive",
    createdDate: "25-09-24",
    activate: false,
  },
];

type WaitListDataTypes = {
  pageTitle: string;
  urlSlug: string;
  status: "active" | "inactive";
  createdDate: string;
  activate: boolean;
};
