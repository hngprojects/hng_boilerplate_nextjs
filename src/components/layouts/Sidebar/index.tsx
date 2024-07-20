"use client";

import {
  ArrowLeft,
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

import CustomButton from "~/components/common/Button/button";
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

  return (
    <>
      <div
        className={cn(
          "flex h-screen flex-col border-r bg-white transition-all duration-300",
          "dark:bg-neutralColor-dark-1",
          isOpen ? "w-64" : "w-24",
        )}
      >
        <div className="mx-4 mb-5 mt-2 flex items-center justify-between p-4 px-2">
          <span
            className={cn(
              "font-inter text-neutralColor-dark-1 text-center text-xl font-medium leading-[24.2px] dark:text-white",
              !isOpen && "cursor-pointer",
            )}
            onClick={() => !isOpen && setIsOpen(true)}
          >
            LOGO
          </span>

          <div
            className={isOpen ? "ml-auto" : "ml-0"}
            onClick={() => setIsOpen((previous) => !previous)}
          >
            {isOpen && (
              <CustomButton
                variant="ghost"
                size="icon"
                isIconOnly={true}
                icon={
                  <ArrowLeft
                    size={20}
                    className="text-neutralColor-dark-1 dark:text-white"
                  />
                }
              />
            )}
          </div>
        </div>
        <nav className="mt-3 flex-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "font-inter text-neutralColor-dark-1 mx-2 my-5 flex items-center py-1 text-center text-base font-medium leading-[19.2px] dark:text-white",
                pathname === item.href && "text-white",
                !isOpen && "justify-center",
                isOpen && "rounded-lg",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center p-2",
                  pathname === item.href && "bg-primary",
                  isOpen && "rounded-lg px-5",
                  !isOpen && "rounded-full",
                )}
              >
                <item.icon
                  size={24}
                  className={cn(
                    "shrink-0",
                    pathname === item.href && "text-white",
                  )}
                />

                {isOpen && <span className="ml-3">{item.name}</span>}
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
