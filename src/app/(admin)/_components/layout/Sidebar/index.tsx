"use client";

import { Box, House, LucideProps, Mail, Settings, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, ForwardRefExoticComponent, RefAttributes } from "react";

import DashboardLogo from "../logo";

const sideItems = [
  {
    route: "Dashboard",
    link: "/admin/dashboard",
    icon: House,
    id: "dashboard",
  },
  {
    route: "Products",
    link: "/admin/products",
    icon: Box,
    id: "products",
  },
  {
    route: "Users",
    link: "/admin/users",
    icon: Users,
    id: "users",
  },
  {
    route: "Email Templates",
    link: "/admin/email",
    icon: Mail,
    id: "email",
  },
  {
    route: "Squeeze Pages",
    link: "/admin/squeeze-pages",
    icon: Users,
    id: "squeeze",
  },
  {
    route: "Waitlist Page",
    link: "/admin/waitlist-page",
    icon: Mail,
    id: "waitlist",
  },
  {
    route: "Settings",
    link: "/admin/settings",
    icon: Settings,
    id: "settings",
  },
];
interface Iproperties {
  sideNavitems: {
    route: string;
    link: string;
    icon: ForwardRefExoticComponent<
      Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    id: string;
  }[];
  currenPathName?: string;
}
const Sidebar: FC<Iproperties> = ({
  sideNavitems = sideItems,
  currenPathName,
}) => {
  const pathname = usePathname();
  const currentPath = pathname?.split("/")[2];
  return (
    <div className="flex flex-col items-center justify-start border-r bg-muted/40 md:block md:px-4">
      <DashboardLogo />
      <section className="flex flex-col items-center gap-5 pt-6 md:items-stretch">
        {sideNavitems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            data-testid={item.id}
            role="sidebar-link"
            className={`${currenPathName || currentPath === item.id ? "bg-primary text-white" : "bg-transparent text-neutral-dark-2"} flex h-10 w-10 items-center justify-center gap-3 rounded-full px-2.5 py-4 transition-all duration-300 hover:bg-primary hover:text-white md:h-auto md:w-auto md:justify-start md:rounded-[8px]`}
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
