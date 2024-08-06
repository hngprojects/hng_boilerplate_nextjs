"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import useVersionSync from "~/actions/useVersionSync";
import UserCard from "~/components/card/user-card";
import Logo from "~/components/common/logo";
import { cn } from "~/lib/utils";
import { NAV_LINKS } from "./links";
import MobileNav from "./mobile-navbar";

const Navbar = () => {
  const [scrolling, setIsScrolling] = useState<boolean>(false);
  const { status } = useSession();
  const pathname = usePathname();

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
      className={`${scrolling ? "shadow-md" : "shadow-none"} sticky left-0 right-0 top-0 z-40 bg-background`}
    >
      <div
        className={cn(
          `relative mx-auto flex w-full max-w-[1200px] items-center gap-x-4 transition-all duration-500 md:justify-between`,
          scrolling ? "py-2" : "py-4 md:py-6",
          status === "authenticated" && "justify-between md:justify-between",
        )}
      >
        <MobileNav />

        <Logo />
        <div className="hidden w-full items-center justify-center gap-x-4 md:flex lg:gap-x-6">
          {NAV_LINKS.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className={`p-3 text-[16px] font-medium text-neutral-dark-1 transition-all duration-300 hover:text-primary ${pathname === item.link ? "text-primary" : ""}`}
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
              className="grid h-[44px] place-items-center whitespace-nowrap rounded-md border border-primary px-4 text-primary hover:bg-subtle lg:px-8"
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="grid h-[44px] place-items-center whitespace-nowrap rounded-md border border-primary bg-primary px-4 text-white hover:bg-destructive lg:px-8"
            >
              Get Started
            </Link>
          </div>
        )}
        {status === "authenticated" && <UserCard />}
      </div>
    </nav>
  );
};

export default Navbar;
