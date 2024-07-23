"use client";

import { Menu, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import Logo from "../../../../../public/Logo.png";
import HelpDropdown from "./HelpDropdown";
import NotificationDropdown from "./NotificationDropdown";
import UserDropdown from "./UserDropdown";
import UserNavigation from "./UserNavigation";

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>();

  const handleDropdown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(undefined);
    } else {
      setOpenDropdown(dropdown);
    }
  };

  return (
    <div className="fixed top-0 z-[1000] flex w-full items-center justify-between bg-white px-[40px] py-[16px]">
      <div className="flex gap-[50px]">
        <div className="flex items-center gap-[20px]">
          <Menu />
          <div className="flex items-center gap-[20px]">
            <Image
              src={Logo}
              width={20}
              height={20}
              alt="Picture of the author"
            />
            <h1 className="text-[24px] font-bold tracking-wider text-black">
              Boilerplate.
            </h1>
          </div>
        </div>

        <div className="flex items-center">
          <UserNavigation />
        </div>
      </div>

      <div className="flex items-center gap-[20px]">
        <div className="x-[25px] hidden items-center gap-[10px] rounded-sm border border-solid border-gray-500 px-[12px] py-[7px] text-sm md:flex">
          <Search />
          <input
            type="text"
            className="text-sm outline-none"
            placeholder="Search Option..."
          />
        </div>
        <NotificationDropdown
          isOpen={openDropdown === "notification"}
          toggleDropdown={() => handleDropdown("notification")}
        />
        <HelpDropdown
          isOpen={openDropdown === "help"}
          toggleDropdown={() => handleDropdown("help")}
        />
        <UserDropdown
          isOpen={openDropdown === "user"}
          toggleDropdown={() => handleDropdown("user")}
        />
      </div>
    </div>
  );
};

export default Navbar;
