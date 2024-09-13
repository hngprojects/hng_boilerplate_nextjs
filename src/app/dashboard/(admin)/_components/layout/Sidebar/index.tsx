"use client";

import {
  Bot,
  Box,
  House,
  List,
  LucideProps,
  Mail,
  Settings,
  TabletSmartphone,
  Users,
} from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ForwardRefExoticComponent, RefAttributes } from "react";

const sideItems = [
  {
    route: "Dashboard",
    link: "/dashboard/admin",
    icon: House,
    id: "dashboard",
  },
  {
    route: "Products",
    link: "/dashboard/admin/products",
    icon: Box,
    id: "products",
  },
  {
    route: "Users",
    link: "/dashboard/admin/users",
    icon: Users,
    id: "users",
  },
  {
    route: "Email Templates",
    link: "/dashboard/admin/email",
    icon: Mail,
    id: "email",
  },
  {
    route: "Squeeze Pages",
    link: "/dashboard/admin/squeeze-pages",
    icon: List,
    id: "squeeze",
  },
  {
    route: "Waitlist Page",
    link: "/dashboard/admin/waitlist-page",
    icon: TabletSmartphone,
    id: "waitlist",
  },
  {
    route: "FAQs",
    link: "/dashboard/admin/faqs",
    icon: Bot,
    id: "faqs",
  },
  {
    route: "Settings",
    link: "/dashboard/admin/settings",
    icon: Settings,
    id: "settings",
  },
];

interface Iproperties {
  sideNavitems?: {
    route: string;
    link: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    id: string;
  }[];
  currenPathName?: string;
}

const Sidebar: FC<Iproperties> = ({ sideNavitems = sideItems }) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const currentPath = pathname?.split("/")[3];

  const filteredItems = session?.user?.is_superadmin
    ? [
        ...sideNavitems,
        {
          route: "Faq Page",
          link: "/dashboard/admin/faqs",
          icon: List,
          id: "faqs",
        },
      ]
    : sideNavitems;

  return (
    <div className="flex h-screen w-[50px] flex-col items-center justify-start overflow-y-auto border-r bg-[#FDFDFD] md:block md:w-[220px] md:px-4 lg:w-[252px]">
      <section className="flex flex-col items-center gap-y-3 pt-6 md:items-stretch">
        {filteredItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            data-testid={item.id}
            role="sidebar-link"
            className={`${
              currentPath === item.id
                ? "bg-primary text-white"
                : "bg-transparent text-neutral-dark-2 hover:bg-gray-200"
            } flex items-center justify-center gap-2.5 rounded-full px-2.5 py-3 text-sm transition-all duration-300 ease-in md:h-auto md:w-auto md:justify-start md:rounded-sm`}
          >
            <item.icon className="h-5 w-5" role="sidebar-icon" />
            <span className="hidden md:block">{item.route}</span>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Sidebar;
