"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import UserCard from "~/components/card/user-card";
import Logo from "~/components/common/logo";
import { cn } from "~/lib/utils";
import useVersionSync from "~/utils/useVersionSync";
import { NAV_LINKS } from "./links";
import MobileNav from "./mobile-navbar";

const Navbar = () => {
  const [scrolling, setIsScrolling] = useState<boolean>(false);
  const { data: session, status } = useSession();

  const version = "v1.0";
  useVersionSync(version);

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
          status === "authenticated" && "justify-between md:justify-between",
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
        {status !== "authenticated" && (
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
        <UserCard status={status} session={session} />
      </div>
    </nav>
  );
};

export default Navbar;
