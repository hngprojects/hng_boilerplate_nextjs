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
    console.log(scrolling);

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
};

export default Navbar;
