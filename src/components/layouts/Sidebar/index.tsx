"use client";

import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Briefcase,
  Building2,
  MonitorSmartphone,
  SlidersHorizontal,
  User,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

interface SidebarItem {
  name: string;
  icon: LucideIcon;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  { name: "Home", icon: User, href: "/" },
  { name: "About us", icon: Building2, href: "/about" },
  { name: "Job Listing", icon: Briefcase, href: "/jobs" },
  { name: "Features Updates", icon: Bell, href: "/updates" },
  { name: "Blog", icon: MonitorSmartphone, href: "/blog" },
  { name: "Settings", icon: SlidersHorizontal, href: "/settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  console.log(isOpen);

  return (
    <>
      <div
        className={cn(
          "flex h-screen flex-col border-r bg-white transition-all duration-300",
          isOpen ? "w-64" : "w-16",
        )}
      >
        <div className="mx-4 mb-5 mt-2 flex items-center justify-between p-4 px-2">
          {isOpen && (
            <span className="font-inter text-neutral-dark1 text-center text-xl font-medium leading-[24.2px]">
              LOGO
            </span>
          )}

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => {
              console.log(isOpen);
              setIsOpen((previous) => !previous);
            }}
            className="ml-auto"
          >
            {isOpen ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
          </Button>
        </div>
        <nav className="mt-3 flex-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "font-inter text-neutral-dark1 mx-4 my-5 flex items-center px-2 py-1 text-center text-base font-medium leading-[19.2px]",
                pathname === item.href && "bg-primary_color text-white",
                !isOpen && "justify-center bg-white",
                isOpen && "rounded",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center p-2",
                  pathname === item.href && "bg-primary_color rounded-full",
                )}
              >
                <item.icon
                  size={24}
                  className={cn(
                    "shrink-0",
                    pathname === item.href && "text-white",
                  )}
                />
              </div>

              {isOpen && <span className="ml-3">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
