interface squeezeCardData {
  title: string;
  value: number;
  description: string;
  icon: string;
}

interface squeezeStatusProperties {
  active: boolean;
}

export interface squeezeDataProperties {
  avatar: string;
  fullName: string;
  phone: string;
  date: string;
  status: squeezeStatusProperties;
}

export const squeezeCardData: squeezeCardData[] = [
  {
    title: "Total squeezes",
    value: 4000,
    description: "+10% from last month",
    icon: `/admin-dashboard/icons/squeeze.svg`,
  },
  {
    title: "Active squeezes",
    value: 1500,
    description: "+20% from last month",
    icon: `/admin-dashboard/icons/box.svg`,
  },
  {
    title: "Deleted squeezes",
    value: 2500,
    description: "+150% from last month",
    icon: `/admin-dashboard/icons/arrowUp.svg`,
  },
];

export const squeezeData: squeezeDataProperties[] = [
  {
    avatar: "/admin-dashboard/images/squeeze-1.png",
    fullName: "Afolabi Olanipekun",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: true,
    },
  },

  {
    avatar: "/admin-dashboard/images/squeeze-2.png",
    fullName: "Adetunji Oluwaseun",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: false,
    },
  },

  {
    avatar: "/admin-dashboard/images/squeeze-3.png",
    fullName: "Ifunanya Adedapo",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: false,
    },
  },

  {
    avatar: "/admin-dashboard/images/squeeze-4.png",
    fullName: "Busola Igwe",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: false,
    },
  },

  {
    avatar: "/admin-dashboard/images/squeeze-5.png",
    fullName: "Moshood Adedayo",
    phone: "09123456789",
    date: "02/07/2024",
    status: {
      active: true,
    },
  },
];
