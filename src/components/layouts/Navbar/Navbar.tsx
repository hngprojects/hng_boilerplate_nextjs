/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { AlignJustify, BellIcon, User } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "~/components/common/Button";
import Logo from "~/components/common/Logo/logo";

const test = () => {
  const { data: session } = useSession();

  const pathname = usePathname();

  return (
    <>
      <header className="hidden items-center justify-between bg-background px-[7.5rem] py-8 xl:flex">
        <Link href={"/"}>
          <div className="flex cursor-pointer items-center gap-2.5">
            <Logo size="big" />
            <h2 className="text-[28px] font-semibold text-neutral-dark-2">
              HNG Boilerplate
            </h2>
          </div>
        </Link>
        <nav className="flex list-none gap-[-17px]">
          <Link href={"/home"}>
            <li
              className={`cursor-pointer px-8 py-2 text-[16px] font-medium hover:text-primary ${pathname === "/home" ? "text-primary" : "text-neutral-dark-2"}`}
            >
              Home
            </li>
          </Link>
          <Link href={"/pricing"}>
            <li
              className={`cursor-pointer px-8 py-2 text-[16px] font-medium hover:text-primary ${pathname === "/pricing" ? "text-primary" : "text-neutral-dark-2"}`}
            >
              Pricing
            </li>
          </Link>
          <Link href={"/career"}>
            <li
              className={`cursor-pointer px-8 py-2 text-[16px] font-medium hover:text-primary ${pathname === "/career" ? "text-primary" : "text-neutral-dark-2"}`}
            >
              Career
            </li>
          </Link>
        </nav>
        {session ? (
          <div className="flex items-center gap-8 text-neutral-dark-2">
            <div className="flex h-10 w-10 items-center justify-center">
              <BellIcon size={16} className="text-[16px] font-bold" />
            </div>
            <Button
              variant={"outline"}
              className="flex gap-2.5 border border-neutral-dark-2 hover:border-background hover:bg-primary hover:text-background"
            >
              Profile
              <User size={"16"} className="font-semibold" />
            </Button>
          </div>
        ) : (
          <div className="space-x-8">
            <Button
              onClick={() => signIn()}
              className="border border-primary hover:bg-primary hover:text-background"
              variant={"outline"}
            >
              Log in
            </Button>
            <Button
              className="bg-primary text-background hover:bg-background hover:text-neutral-dark-2"
              variant="secondary"
            >
              Get Started
            </Button>
          </div>
        )}
      </header>
      <header className="hidden items-center justify-between bg-background px-16 py-6 md:flex xl:hidden">
        <div className="flex items-center gap-2">
          <div className="px-4 py-4">
            <AlignJustify size={40} />
          </div>
          <div className="flex items-center gap-2.5">
            <Logo size="big" />
            <h2 className="text-[28px] font-semibold text-neutral-dark-2">
              HNG Boilerplate
            </h2>
          </div>
        </div>
        {session ? (
          <div className="flex items-center gap-2">
            <div className="flex h-[62.4px] w-[62.4px] items-center justify-center">
              <BellIcon className="text-[24.96px] font-semibold text-neutral-dark-2" />
            </div>
            <div className="flex h-[68.64px] w-[68.64px] items-center justify-center">
              <User
                size={"24.96"}
                className="text-[24.96px] text-neutral-dark-2"
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
      <header className="flex items-center justify-between bg-background p-4 md:hidden">
        <div className="flex items-center gap-2">
          <div className=" ">
            <AlignJustify />
          </div>
          <div className="flex items-center gap-[7px] px-4">
            <Logo size={"small"} />
            <h2 className="xsm:tex-[14px] font-semibold text-neutral-dark-2 sm:text-[19.6px]">
              HNG Boilerplate
            </h2>
          </div>
        </div>
        {session ? (
          <div className="flex items-center gap-2">
            <div className="flex h-[44px] w-10 items-center justify-center">
              <BellIcon
                size={20}
                className="text-[20px] font-semibold text-neutral-dark-2"
              />
            </div>
            <div className="flex h-[44px] w-[44px] items-center justify-center">
              <User size={"20"} className="text-neutral-dark-2" />
            </div>
          </div>
        ) : (
          ""
        )}
      </header>
    </>
  );
};

export default test;
