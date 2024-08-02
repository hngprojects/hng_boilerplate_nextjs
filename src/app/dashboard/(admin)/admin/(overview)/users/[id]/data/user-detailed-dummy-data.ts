import type { LucideIconName } from "~/components/common/lucide-icon";

export interface UserDetailedCardData {
  title: string;
  value: string;
  description: string;
  icon: LucideIconName;
}

export interface UserStatusProperties {
  active: boolean;
}

export interface UserDataProperties {
  avatar: string;
  fullName: string;
  email: string;
  phone: string;
  date: string;
  status: UserStatusProperties;
}

export const userDetailedCardData: UserDetailedCardData[] = [
  {
    title: "Total Products",
    value: "4000",
    description: "+10% from last month",
    // icon: `/admin-dashboard/icons/user.svg`,
    icon: "user",
  },
  {
    title: "Total Orders",
    value: "1000",
    description: "+20% from last month",
    // icon: `/admin-dashboard/icons/box.svg`,
    icon: "box",
  },
  {
    title: "Total Sales",
    value: "$450,000.00",
    description: "+150% from last month",
    // icon: `/admin-dashboard/icons/arrowUp.svg`,
    icon: "a-arrow-up",
  },
];

export const userData: UserDataProperties[] = [
  {
    avatar: "/admin-dashboard/images/user-1.png",
    fullName: "Afolabi Olanipekun",
    email: "Afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: true,
    },
  },
  {
    avatar: "/admin-dashboard/images/user-2.png",
    fullName: "Adetunji Oluwaseun",
    email: "Afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: false,
    },
  },
  {
    avatar: "/admin-dashboard/images/user-3.png",
    fullName: "Ifunanya Adedapo",
    email: "Afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: false,
    },
  },
  {
    avatar: "/admin-dashboard/images/user-4.png",
    fullName: "Busola Igwe",
    email: "Afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: false,
    },
  },
  {
    avatar: "/admin-dashboard/images/user-5.png",
    fullName: "Moshood Adedayo",
    email: "Afolabiolanipekun@gmail.com",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: true,
    },
  },
];
