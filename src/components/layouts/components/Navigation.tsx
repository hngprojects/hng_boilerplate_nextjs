"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function Navigation() {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Overview",
      path: "/",
    },
    {
      name: "Orders",
      path: "/orders",
    },
    {
      name: "Customers",
      path: "/customers",
    },
  ];

  return (
    <>
      <div className="flex items-center gap-[22px] text-xs font-[500]">
        {navItems.map((item, id) => (
          <Link key={id} href={item.path}>
            <div
              className={`${pathname === item.path ? "font-[700] text-primary" : "text-black"}`}
            >
              <p className="">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navigation;
