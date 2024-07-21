"use client";

import { useState } from "react";

import Boilerplate from "../../../../public/Boilerplate.svg";
import Logo from "../../../../public/logo.svg";
import Menu from "../../../../public/menu.svg";
import Search from "../../../../public/search.svg";
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
    <div className="absolute top-0 z-[1000] flex w-full items-center justify-between bg-white px-[40px] py-[16px]">
      <div className="flex gap-[50px]">
        <div className="flex items-center gap-[20px]">
          <Menu />
          <div className="flex items-center gap-[20px]">
            <Logo />
            <Boilerplate className="mt-[4px]" />
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
        <UserDropdown
          isOpen={openDropdown === "user"}
          toggleDropdown={() => handleDropdown("user")}
        />
        <NotificationDropdown
          isOpen={openDropdown === "notification"}
          toggleDropdown={() => handleDropdown("notification")}
        />
        <HelpDropdown
          isOpen={openDropdown === "help"}
          toggleDropdown={() => handleDropdown("help")}
        />
      </div>
    </div>
  );
};

export default Navbar;
