"use client";

import {
  Banknote,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Database,
  Globe,
  Menu,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import profile from "../../../public/images/avatar.png";
import AccountIcon from "../components/icons/accountIcon";
import LogoIcon from "../components/icons/logo";
import SearchIcon from "../components/icons/searchIcon";

const SideMenu = ({ children }: { children: React.ReactNode }) => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const [hasShadow, setHasShadow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setHasShadow(true);
    } else {
      setHasShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  const handleSideBar = () => {
    setSideBarOpen((previousBar) => !previousBar);
  };

  return (
    <div className="flex h-screen w-full flex-col">
      <div
        className={`fixed z-10 flex h-[60px] w-full items-center justify-between bg-white px-4 md:px-[2rem] ${hasShadow ? "shadow-md" : ""}`}
      >
        <div className="flex items-center gap-x-12">
          <div className="flex items-center gap-x-4">
            <Menu
              className="size-4 cursor-pointer stroke-[1px] md:size-7"
              onClick={handleSideBar}
              role="button"
              aria-label="menu"
            />
            <LogoIcon className="text-lg text-[#F97316] md:text-2xl" />
            <h2 className="text-2xl font-semibold max-[610px]:hidden md:block">
              Boilerplate.
            </h2>
          </div>
          <ul className="hidden items-center gap-x-4 text-sm font-semibold min-[800px]:flex">
            <li className="cursor-pointer text-[#F97316]">Overview</li>
            <li className="cursor-pointer">Customers</li>
            <li className="cursor-pointer">Products</li>
          </ul>
        </div>
        <div className="flex items-center gap-x-2 lg:gap-x-4">
          <div className="flex items-center gap-x-1 rounded-md border border-gray-200 p-2">
            <SearchIcon className="text-gray-500" />
            <input
              type="text"
              placeholder="Search option..."
              className="text-xs focus:outline-none"
            />
          </div>
          <Bell className="h-6 w-6 text-neutral-dark-2 transition-colors duration-300 hover:cursor-pointer hover:text-neutral-dark-1" />
          <CircleHelp className="h-6 w-6 text-neutral-dark-2 transition-colors duration-300 hover:cursor-pointer hover:text-neutral-dark-1" />
          <div className="flex items-center gap-x-2">
            <Image
              src={profile}
              alt="profile"
              width={40}
              height={40}
              className="w-[1.5rem] rounded-full md:w-[2rem]"
            />
            <ChevronDown className="h-6 w-6 text-neutral-dark-2 transition-colors duration-300 hover:cursor-pointer hover:text-neutral-dark-1" />
          </div>
        </div>
      </div>

      <div className="flex pt-[60px]">
        <div
          className={`fixed top-[60px] flex w-[280px] flex-col rounded-t-2xl bg-gray-100 px-[1.5rem] duration-500 ease-in-out lg:w-[310px] ${sideBarOpen ? "left-0" : "left-[-100%] md:left-0"} z-10 h-full overflow-y-auto pb-20`}
          role="navigation"
          aria-hidden={sideBarOpen}
        >
          <div className="flex h-full flex-col gap-y-6 py-[1rem]">
            <h2 className="flex items-center gap-x-1 text-xl font-semibold">
              <ChevronLeft />
              Settings
            </h2>
            <p className="text-sm font-semibold">Profile</p>
            <ul className="flex flex-col gap-y-6 text-sm text-[#525252]">
              <li className="flex items-center gap-x-2">
                <User className="size-5 stroke-[1.5px]" />
                General
              </li>
              <div className="flex items-center justify-between">
                <li className="flex items-center gap-x-2">
                  <AccountIcon />
                  Account
                </li>
                <ChevronRight className="size-5 stroke-[1.5px]" />
              </div>
              <div className="flex items-center justify-between">
                <li className="flex items-center gap-x-2">
                  <Bell className="size-5 stroke-[1.5px]" />
                  Notification
                </li>
                <ChevronRight className="size-5 stroke-[1.5px]" />
              </div>
              <div className="flex items-center justify-between">
                <li className="flex items-center gap-x-2">
                  <Banknote className="stroke-[1.5px]" />
                  Payment Information
                </li>
                <ChevronRight className="size-5 stroke-[1.5px]" />
              </div>
              <li className="flex items-center gap-x-2">
                <Database className="size-5 stroke-[1px]" />
                Data and Privacy
              </li>
              <li className="flex items-center gap-x-2">
                <Globe className="size-5 stroke-[1px]" />
                Language and Region
              </li>
            </ul>
            <hr />
            <p className="text-sm font-semibold">Organization</p>
            <ul className="flex flex-col gap-y-6 text-sm text-[#525252]">
              <div className="flex items-center justify-between">
                <li className="flex items-center gap-x-2">
                  <Users className="size-5 stroke-[1.5px]" />
                  Members
                </li>
                <ChevronRight className="size-5 stroke-[1.5px]" />
              </div>
              <div className="flex items-center justify-between">
                <li className="flex items-center gap-x-2">
                  <Bell className="size-5 stroke-[1.5px]" />
                  Roles and permissions
                </li>
                <ChevronRight className="size-5 stroke-[1.5px]" />
              </div>
              <div
                className={`${pathname === "/" ? "-pl-2 bg-[#F97316] text-white" : ""} flex w-full items-center justify-between rounded-md py-2`}
              >
                <li className="flex items-center gap-x-2">
                  <Banknote className="size-5 stroke-[1.5px]" />
                  Integrations
                </li>
                <ChevronRight className="size-5 stroke-[1.5px]" />
              </div>
            </ul>
          </div>
        </div>
        <div className="w-full flex-1 overflow-y-auto bg-white px-[2rem] pt-6 md:ml-[280px] lg:ml-[310px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
