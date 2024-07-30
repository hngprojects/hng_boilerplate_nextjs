"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import UserCard from "~/components/card/user-card";
import Logo from "~/components/common/logo";
import { cn } from "~/lib/utils";
import MobileNav from "./mobile-navbar";

const Navbar = () => {
  const [scrolling, setIsScrolling] = useState<boolean>(false);

  const { data: session } = useSession();

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
          session?.user?.email && "justify-between",
          // user.email && "justify-between",
          session?.user?.email && "justify-between",
        )}
      >
        <MobileNav />

        <Logo />
        {session?.user?.email ? (
          <UserCard image={session?.user?.image as string } />
        ) : (
          <div className="w-fullx hidden items-center justify-end gap-x-4 justify-self-end md:flex lg:gap-x-8">
            <Link href="/login"></Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
