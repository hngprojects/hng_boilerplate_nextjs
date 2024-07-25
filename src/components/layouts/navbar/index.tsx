"use client";

import { BellIcon, Menu, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import UserCard from "~/components/card/user-card";
import Logo from "~/components/common/logo";
import { useUser } from "~/hooks/user/use-user";

const navlinks = [
  { route: "Home", link: "/" },
  { route: "Pricing", link: "/pricing" },
  { route: "Careers", link: "/career" },
];

const Navbar = ({ is_auth_path = false }: { is_auth_path?: boolean }) => {
  const [scrolling, setIsScrolling] = useState<boolean>(false);
  const { user } = useUser();

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
      className={`${scrolling ? "shadow-md" : "shadow-none"} sticky left-0 right-0 top-0 z-10 bg-background px-4`}
    >
      <div
        className={`${scrolling ? "py-2" : "py-4 md:py-9"} flex w-full items-center justify-between gap-x-4 transition-all duration-500`}
      >
        <div className="md:hidden">
          <Menu className="text-nuetral-black-1 h-6 w-6 cursor-pointer transition-colors duration-300 hover:text-neutral-dark-1/50" />
        </div>
        <Logo />
        <div className="hidden w-full items-center justify-center gap-x-4 md:flex lg:gap-x-8 xl:gap-x-16">
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
        {!is_auth_path && !user.email && (
          <div className="w-fullx hidden items-center justify-end gap-x-4 justify-self-end md:flex lg:gap-x-8">
            <Link
              href="/login"
              className="grid h-[44px] place-items-center whitespace-nowrap rounded-md border border-primary px-4 text-primary lg:px-8"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="grid h-[44px] place-items-center whitespace-nowrap rounded-md border border-primary bg-primary px-4 text-white lg:px-8"
            >
              Get Started
            </Link>
          </div>
        )}
        {user.email && <UserCard email={user.email} />}
        <div className="flex w-full max-w-[80px] items-center justify-between gap-2 md:hidden">
          <BellIcon className="text-nuetral-black-1 h-5 w-5 cursor-pointer transition-colors duration-300 hover:text-neutral-dark-1/50" />
          <User className="text-nuetral-black-1 h-5 w-5 cursor-pointer transition-colors duration-300 hover:text-neutral-dark-1/50" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
