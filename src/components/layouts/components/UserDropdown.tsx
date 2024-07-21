import React from "react";

import ArrowDown from "../../../../public/arrow-down.svg";
import userImg from "../../../../public/user-img.png";

type UserDropdownProperties = {
  isOpen: boolean;
  toggleDropdown: () => void;
};

const UserDropdown: React.FC<UserDropdownProperties> = ({
  isOpen,
  toggleDropdown,
}) => {
  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className="flex cursor-pointer items-center gap-[5px]"
      >
        <div
          className="h-[35px] w-[35px] rounded-full bg-gray-400 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${userImg.src})` }}
        ></div>
        <ArrowDown />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[250px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-[16px] py-[8px]">
            <p className="text-sm font-bold text-black">King Pin</p>
            <p className="text-sm text-neutral_dark_1">kingpin.gmail.com</p>
          </div>
          <hr />
          <div className="flex flex-col gap-[10px] px-[16px] py-[8px]">
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="block text-sm font-bold text-neutral_dark_1 hover:bg-gray-100"
              >
                Profile
              </a>
              <p className="text-xs">⇧P</p>
            </div>
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="block text-sm font-bold text-neutral_dark_1 hover:bg-gray-100"
              >
                Billing
              </a>
              <p className="text-xs">⇧B</p>
            </div>
            <a
              href="#"
              className="block text-sm font-bold text-neutral_dark_1 hover:bg-gray-100"
            >
              New Team
            </a>
          </div>
          <hr />
          <div className="px-[16px] py-[12px]">
            <div className="flex items-center justify-between">
              <a
                href="#"
                className="block text-sm font-bold text-neutral_dark_1 hover:bg-gray-100"
              >
                Log Out
              </a>
              <p className="text-xs">⇧P</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
