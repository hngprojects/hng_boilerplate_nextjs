"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";

const links = [
  {
    route: "Overview",
    link: "/dashboard",
    id: "dashboard",
  },
  {
    route: "Customers",
    link: "/dashboard/customers",
    id: "customers",
  },
  {
    route: "Products",
    link: "/dashboard/products",
    id: "products",
  },
  {
    route: "Users",
    link: "/dashboard/users",
    id: "Users",
  },
];

type NavlinksProperties = {
  className?: string;
  mobile?: boolean;
};

export function Navlinks({ className, mobile }: NavlinksProperties) {
  const pathname = usePathname();
  const currentPath = pathname?.split("/").at(-1) ?? "";

  return (
    <div
      className={cn(
        "flex justify-between gap-[22px]",
        mobile ? "flex-col" : "items-center max-lg:hidden",
        className,
      )}
    >
      {links.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={cn(
            "text-xs font-bold leading-5 transition-all duration-200 hover:text-primary",
            currentPath === item.id ? "text-primary" : "text-neutral-dark-2",
          )}
        >
          {item.route}
        </Link>
      ))}
    </div>
  );
}
