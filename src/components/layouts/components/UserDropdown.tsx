import React, { useState } from 'react';
import ArrowDown from "../../../../public/arrow-down.svg"
import userImg from "../../../../public/user-img.png"

type UserDropdownProps = {
  isOpen: boolean;
  toggleDropdown: () => void;
};

const UserDropdown: React.FC<UserDropdownProps> = ({ isOpen, toggleDropdown }) => {

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-[5px] cursor-pointer">
        <div className="h-[35px] w-[35px] bg-gray-400 rounded-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${userImg.src})` }}
        ></div>
        <ArrowDown />
      </div>


      {isOpen && (
        <div className="absolute right-0 w-[250px] mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-[16px] py-[8px]">
            <p className="text-sm text-black font-bold">King Pin</p>
            <p className="text-sm text-neutral_dark_1">kingpin.gmail.com</p>
          </div>
          <hr />
          <div className="px-[16px] py-[8px] flex flex-col gap-[10px]">
            <div className="flex justify-between items-center">
              <a href="#" className="block text-sm text-neutral_dark_1 font-bold hover:bg-gray-100">Profile</a>
              <p className="text-xs">⇧P</p>
            </div>
            <div className="flex justify-between items-center">
              <a href="#" className="block text-sm text-neutral_dark_1 font-bold hover:bg-gray-100">Billing</a>
              <p className="text-xs">⇧B</p>
            </div>
            <a href="#" className="block text-sm text-neutral_dark_1 font-bold hover:bg-gray-100">New Team</a>
          </div>
          <hr />
          <div className="px-[16px] py-[12px]">
            <div className="flex justify-between items-center">
              <a href="#" className="block text-sm text-neutral_dark_1 font-bold hover:bg-gray-100">Log Out</a>
              <p className="text-xs">⇧P</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
