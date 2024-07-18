"use client";

import {
  Banknote,
  Bell,
  ChevronLeft,
  Database,
  Globe,
  LucideIcon,
  User,
  UserPlus,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { cn } from "~/lib/utils";



const SETTINGS_SIDEBAR_LINKS = [
  {
    id: 1,
    label: "Profile",
    icon: User,
    link: "profile",
  },
  {
    id: 2,
    label: "account-security",
    icon: UserPlus,
    link: "account-security",
  },
  {
    id: 3,
    label: "Notification Settings",
    icon: Bell,
    link: "notification-settings",
  },
  {
    id: 4,
    label: "Payment Information",
    icon: Banknote,
    link: "payment-information",
  },
  {
    id: 5,
    label: "Data and Privacy Settings",
    icon: Database,
    link: "privacy-settings",
  },
  {
    id: 6,
    label: "Language and Region",
    icon: Globe,
    link: "language-settings",
  },
];

const SettingsSidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const currentPath = pathname?.replace("/settings/", "");

  useEffect(() => {
    setActiveLink(currentPath);
  }, [currentPath]);
  return (
    <section className="bg-[#FAFAFA] z-[50] w-[0px] md:w-[96px] min-[1140px]:w-[270px] hover:w-[270px] hover:p-4 transition-all duration-300 py-6 min-[1140px]:p-4 hidden md:flex flex-col gap-y-4 items-center h-screen left-0 top-0 overflow-hidden group select-none rounded-t-[16px]">
      <ul className="flex flex-col gap-y-4 pt-8">
        <div className="items-center">
          <button
            className={cn(
              "flex gap-x-3 py-2 px-3 h-[52px] font-medium transition-colors duration-300 cursor-pointer rounded-md justify-center items-center text-2xl",
            )}
            onClick={() => router.back()}
          >
            <ChevronLeft size={24} />
            <h2>Settings</h2>
          </button>
        </div>
        {SETTINGS_SIDEBAR_LINKS.map((link) => (
          <Link
            href={`/settings/${link.link}`}
            key={link.id}
            aria-current={activeLink === link.link ? "page" : undefined}
            onKeyUp={(t) => {
              if (t.key === "Enter" || t.key === " ") {
                setActiveLink(link.link);
              }
            }}
            aria-label={link.label}
            className={cn(
              "flex items-center gap-x-3 py-2 px-3 h-[52px] text-[#3a3a3a] font-medium text-base transition-colors duration-300 cursor-pointer rounded-md",
              activeLink === link.link
                ? "bg-[#f97316] text-white rounded outline-none"
                : "hover:bg-[#f97316]/30 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light",
            )}
          >
            <link.icon size={24} aria-hidden />

            <span className=" max-[1139px]:hidden group-hover:block w-[185px]">
              {link.label}
            </span>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default SettingsSidebar;
