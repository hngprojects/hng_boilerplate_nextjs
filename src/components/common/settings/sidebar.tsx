"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Settings_Sidebar_Links } from "~/lib/constant";
import { cn } from "~/lib/utils";

const SettingsSidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  // remove the / from the pathname
  const currentPath = pathname?.replace("/settings/", "");

  useEffect(() => {
    setActiveLink(currentPath);
  }, [currentPath]);
  return (
    <section className="bg-sidebar-background z-[50] w-[0px] md:w-[96px] min-[1140px]:w-[270px] hover:w-[270px] hover:p-4 transition-all duration-300 py-6 min-[1140px]:p-4 hidden md:flex flex-col gap-y-4 items-center  fixed h-screen left-0 top-0 overflow-hidden group select-none rounded-t-[16px]">
      <div className="items-center">
        <button
          className={cn(
            "flex gap-x-3 py-2 px-3 h-[52px] font-medium text-base transition-colors duration-300 cursor-pointer rounded-md justify-start items-start",
          )}
          onClick={() => router.back()}
        >
          <ChevronLeft />
          <h2>Settings</h2>
        </button>
      </div>
      <ul className="flex flex-col gap-y-4 pt-8">
        {Settings_Sidebar_Links.map((link) => (
          <Link
            href={`/settings/${link.link}`}
            key={link.id}
            aria-current={activeLink === link.link ? "page" : undefined}
            onKeyUp={(t) => {
              if (t.key === "Enter" || t.key === " ") {
                setActiveLink(link.link);
                return;
              }
            }}
            tabIndex={0}
            aria-label={link.label}
            className={cn(
              "flex items-center gap-x-3 py-2 px-3 h-[52px] text-[#3a3a3a] font-medium text-base transition-colors duration-300 cursor-pointer rounded-md",
              activeLink === link.link
                ? "bg-primary text-white rounded outline-none"
                : "hover:bg-primary/30 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light",
            )}
          >
            <link.icon
              size={24}
              aria-hidden
              variant={activeLink === link.link ? "Bold" : "Outline"}
            />

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
