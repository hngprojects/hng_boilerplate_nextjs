"use client";

import { BellIcon, User } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import hamburger from "../../../../public/images/navbar/hamburger.svg";
import hamburger2 from "../../../../public/images/navbar/hamburger(mobile).svg";
import logo from "../../../../public/images/navbar/logo(large).svg";
import logo2 from "../../../../public/images/navbar/logo(small).svg";
import { Button } from "../../../components/ui/button";

const Navbar = () => {
  const { data: session } = useSession();

  const pathname = usePathname();

  return (
    <>
      <header className="bg-white hidden px-[7.5rem] py-8 xl:flex items-center justify-between ">
        <Link href={"/"}>
          <div className="flex items-center gap-2.5 cursor-pointer">
            <Image src={logo} alt="large" width="57" height="52" />
            <h2 className="text-[28px] font-semibold text-[#525252]">
              HNG Boilerplate
            </h2>
          </div>
        </Link>
        <nav className="list-none flex gap-[-17px]">
          <Link href={"/home"}>
            <li
              className={`nav ${pathname === "/home" ? "text-[#F97316]" : "text-[#434343]"}`}
            >
              Home
            </li>
          </Link>
          <Link href={"/pricing"}>
            <li
              className={`nav ${pathname === "/pricing" ? "text-[#F97316]" : "text-[#434343]"}`}
            >
              Pricing
            </li>
          </Link>
          <Link href={"/career"}>
            <li
              className={`nav ${pathname === "/career" ? "text-[#F97316]" : "text-[#434343]"}`}
            >
              Career
            </li>
          </Link>
        </nav>
        {session ? (
          <div className="flex items-center gap-8 text-[#434343]">
            <div className="w-10 h-10 flex items-center justify-center ">
              <BellIcon size={16} className="font-bold text-[16px] " />
            </div>
            <Button
              variant={"outline"}
              className=" flex gap-2.5 border border-[#434343] hover:bg-[#F97316] hover:text-white hover:border-white"
            >
              Profile
              <User size={"16"} className="font-semibold" />
            </Button>
            {/* <p onClick={() => signOut()}>Sign out</p> */}
          </div>
        ) : (
          <div className="space-x-8">
            <Button
              onClick={() => signIn()}
              className="border border-[#F97316] hover:bg-[#F97316] hover:text-white"
              variant={"outline"}
            >
              Log in
            </Button>
            <Button
              className="bg-[#F97316] text-white hover:bg-white hover:text-black hover:border-[#F97316] hover:border "
              variant="secondary"
            >
              Get Started
            </Button>
          </div>
        )}
      </header>
      <header className="bg-white px-16 py-6 hidden md:flex xl:hidden  items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="px-4 py-4  ">
            <Image src={hamburger} alt="hamburger" width="40" height="40" />
          </div>
          <div className="flex items-center gap-2.5">
            <Image src={logo} alt="medium" width="57" height="52" />
            <h2 className="text-[28px] font-semibold text-[#525252]">
              HNG Boilerplate
            </h2>
          </div>
        </div>
        {session ? (
          <div className="flex items-center gap-2">
            <div className="w-[62.4px] h-[62.4px] flex items-center justify-center">
              <BellIcon className="font-semibold text-[24.96px] text-[#525252]" />
            </div>
            <div className="flex items-center justify-center w-[68.64px] h-[68.64px]">
              <User size={"24.96"} className="text-[24.96px] text-[#525252]" />
            </div>
            {/* <p onClick={() => signOut()}>Sign out</p> */}
          </div>
        ) : (
          ""
        )}
      </header>
      <header className="bg-white flex md:hidden p-4 items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="  ">
            <Image
              src={hamburger2}
              alt="hamburgerMobile"
              width="24"
              height="24"
            />
          </div>
          <div className="flex items-center gap-[7px] px-4 ">
            <Image src={logo2} alt="small" width="40" height="37" />
            <h2 className="sm:text-[19.6px] xsm:tex-[14px] font-semibold text-[#525252]">
              HNG Boilerplate
            </h2>
          </div>
        </div>
        {session ? (
          <div className="flex items-center gap-2">
            <div className="w-10 h-[44px] flex items-center justify-center">
              <BellIcon
                size={20}
                className="font-semibold text-[20px] text-[#525252]"
              />
            </div>
            <div className="w-[44px]  h-[44px] flex items-center justify-center">
              <User size={"20"} className=" text-[#525252]" />
            </div>
            {/* <p onClick={() => signOut()}>Sign out</p> */}
          </div>
        ) : (
          ""
        )}
      </header>
    </>
  );
};

export default Navbar;
