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
          isOpen ? "w-64" : "w-16",
        )}
      >
        <div className="mx-4 mb-5 mt-2 flex items-center justify-between p-4 px-2">
          {isOpen && (
            <span className="font-inter text-center text-xl font-medium leading-[24.2px] text-neutral-dark1">
              LOGO
            </span>
          )}

          <div
            className={isOpen ? "ml-auto" : "ml-0"}
            onClick={() => setIsOpen((previous) => !previous)}
          >
            <CustomButton
              variant="ghost"
              size="icon"
              isIconOnly={true}
              icon={isOpen ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
            />
          </div>
        </div>
        <nav className="mt-3 flex-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "font-inter mx-4 my-5 flex items-center px-2 py-1 text-center text-base font-medium leading-[19.2px] text-neutral-dark1",
                pathname === item.href && "bg-primary text-white",
                !isOpen && "justify-center bg-white",
                isOpen && "rounded",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center p-2",
                  pathname === item.href && "rounded-full bg-primary",
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
