<<<<<<< HEAD
"use client"

import Menu from "../../../../public/menu.svg"
import Logo from "../../../../public/logo.svg"
import Boilerplate from "../../../../public/Boilerplate.svg"
import Search from "../../../../public/search.svg"
import Navigation from "../components/Navigation"
import { useState } from "react"
import UserDropdown from "./UserDropdown"
import HelpDropdown from "./HelpDropdown"
import NotificationDropdown from "./NotificationDropdown"

const Navbar: React.FC = () => {

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };





  return (
    <div className="absolute w-full top-0 z-[1000] bg-white py-[16px] px-[40px] flex justify-between items-center">
      <div className="flex gap-[50px]">
        <div className="flex items-center gap-[20px]">
          <Menu />
          <div className="flex gap-[20px] items-center">
            <Logo />
            <Boilerplate className="mt-[4px]" />
          </div>
        </div>

        <div className="flex items-center">
          <Navigation />
        </div>
      </div>

      <div className="flex gap-[20px] items-center">
        <div className="py-[7px] hidden md:flex x-[25px] gap-[10px] rounded-sm border border-solid border-gray-500 items-center px-[12px] text-sm">
          <Search />
          <input type="text" className="text-sm outline-none" placeholder="Search Option..." />
        </div>
        <UserDropdown
          isOpen={openDropdown === 'user'}
          toggleDropdown={() => handleDropdown('user')}
        />
        <NotificationDropdown
          isOpen={openDropdown === 'notification'}
          toggleDropdown={() => handleDropdown('notification')}
        />
        <HelpDropdown
          isOpen={openDropdown === 'help'}
          toggleDropdown={() => handleDropdown('help')}
        />
      </div>

    </div>
  )
=======
"use client";

import { BellIcon, Menu, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import CustomButton from "~/components/common/Button/button";
import Logo from "~/components/common/Logo";

const navlinks = [
  { route: "Home", link: "/" },
  { route: "Pricing", link: "/" },
  { route: "Features", link: "/" },
];

const Navbar = () => {
  const [scrolling, setIsScrolling] = useState<boolean>(false);

  const handleScrollEvent = () => {
    if (window.scrollY > 1) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  });
  return (
    <nav
      className={`${scrolling ? "shadow-md" : "shadow-none"} sticky left-0 right-0 top-0 z-[10000000000000] bg-background px-4`}
    >
      <div
        className={`${scrolling ? "py-2" : "py-4 md:py-9"} mx-auto flex w-full max-w-[1200px] items-center justify-between gap-2 transition-all duration-500`}
      >
        <div className="md:hidden">
          <Menu className="text-nuetral-black-1 h-6 w-6 cursor-pointer transition-colors duration-300 hover:text-neutral-dark-1/50" />
        </div>
        <Logo />
        <div className="hidden w-full max-w-[330px] items-center justify-between gap-2 md:flex">
          {navlinks?.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className="p-3 text-[16px] font-medium text-neutral-dark-1 transition-all duration-300 hover:text-primary"
              >
                {item.route}
              </Link>
            );
          })}
        </div>
        <div className="hidden w-full max-w-[280px] items-center justify-between gap-2 md:flex">
          <CustomButton
            variant="outline"
            className="h-[44px] w-[105px] border-primary text-primary"
          >
            Log in
          </CustomButton>
          <CustomButton variant="primary" className="h-[44px] w-[142px]">
            Get Started
          </CustomButton>
        </div>
        <div className="flex w-full max-w-[80px] items-center justify-between gap-2 md:hidden">
          <BellIcon className="text-nuetral-black-1 h-5 w-5 cursor-pointer transition-colors duration-300 hover:text-neutral-dark-1/50" />
          <User className="text-nuetral-black-1 h-5 w-5 cursor-pointer transition-colors duration-300 hover:text-neutral-dark-1/50" />
        </div>
      </div>
    </nav>
  );
>>>>>>> dev
};

export default Navbar;
