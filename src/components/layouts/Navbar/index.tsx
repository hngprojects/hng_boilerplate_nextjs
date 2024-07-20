"use client"

import Menu from "../../../../public/menu.svg"
import Logo from "../../../../public/logo.svg"
import Boilerplate from "../../../../public/Boilerplate.svg"
import Search from "../../../../public/search.svg"
import Navigation from "../components/Navigation"
import { useState } from "react"
import UserDropdown from "./UserDropdown"
import HelpDropdown from "./HelpDropdown"
import NotificationDropdown from "./NotificationDropdown"

const Navbar: React.FC = () => {

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdown = (dropdown: string) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };





  return (
    <div className="absolute w-full top-0 z-[1000] bg-white py-[16px] px-[40px] flex justify-between items-center">
      <div className="flex gap-[50px]">
        <div className="flex items-center gap-[20px]">
          <Menu />
          <div className="flex gap-[20px] items-center">
            <Logo />
            <Boilerplate className="mt-[4px]" />
          </div>
        </div>

        <div className="flex items-center">
          <Navigation />
        </div>
      </div>

      <div className="flex gap-[20px] items-center">
        <div className="py-[7px] hidden md:flex x-[25px] gap-[10px] rounded-sm border border-solid border-gray-500 items-center px-[12px] text-sm">
          <Search />
          <input type="text" className="text-sm outline-none" placeholder="Search Option..." />
        </div>
        <UserDropdown
          isOpen={openDropdown === 'user'}
          toggleDropdown={() => handleDropdown('user')}
        />
        <NotificationDropdown
          isOpen={openDropdown === 'notification'}
          toggleDropdown={() => handleDropdown('notification')}
        />
        <HelpDropdown
          isOpen={openDropdown === 'help'}
          toggleDropdown={() => handleDropdown('help')}
        />
      </div>

    </div>
  )
};

export default Navbar;
