"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import UserCard from "~/components/card/user-card";
import Logo from "~/components/common/logo";
import { useUser } from "~/hooks/user/use-user";
import { cn } from "~/lib/utils";
import { NAV_LINKS } from "./links";
import MobileNav from "./mobile-navbar";

const Navbar = () => {
  const [scrolling, setIsScrolling] = useState<boolean>(false);

  const { data: session } = useSession();
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
      className={`${scrolling ? "shadow-md" : "shadow-none"} sticky left-0 right-0 top-0 z-40 bg-background px-2 sm:px-4`}
    >
      <div
        className={cn(
          `relative mx-auto flex w-full max-w-[1200px] items-center gap-x-4 transition-all duration-500 md:justify-between`,
          scrolling ? "py-2" : "py-4 md:py-9",
          user.email && "justify-between",
        )}
      >
        <MobileNav />

        <Logo />
        <div className="hidden w-full items-center justify-center gap-x-4 md:flex lg:gap-x-8 xl:gap-x-16">
          {NAV_LINKS.map((item, index) => {
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
        {session?.user?.email ? (
          <div className="hidden md:flex">
            <UserCard image={session?.user?.image as string} />
          </div>
        ) : (
        {!user.email && (
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
      </div>
    </nav>
  );
};

export default Navbar;
