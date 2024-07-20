"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import DropdownMenu from "./dropdown-menu";

const VerticalDotsIcon = () => {
  return (
    <Image
      src="/images/user-product-details/vertical-dots-icon.svg"
      className="h-[20px] w-[20px]"
      height={20}
      width={20}
      alt="vertical dots svg icon"
    />
  );
};

const PenIcon = () => {
  return (
    <Image
      src="/images/user-product-details/pen-icon.svg"
      className="h-[16px] w-[16px]"
      width={16}
      height={16}
      alt="pen svg icon"
    />
  );
};

const TrashIcon = () => {
  return (
    <Image
      src="/images/user-product-details/trash-icon.svg"
      className="h-[16px] w-[16px]"
      width={16}
      height={16}
      alt="trash svg icon"
    />
  );
};

const TableMenuButton = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const menuReference = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        menuReference.current &&
        !menuReference.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
        console.log(menuReference.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <>
      <div className="relative" ref={menuReference}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="outline-none"
        >
          <VerticalDotsIcon />
        </button>

        <DropdownMenu
          position="right-[83%]"
          width="w-[121px]"
          active={showDropdown}
        >
          <div className="border-b border-b-border p-[5px]">
            <div className="px-[8px] py-[6px] text-sm font-semibold leading-[20px]">
              Actions
            </div>
          </div>
          <div className="flex flex-col p-[5px]">
            <button className="flex items-center gap-[8px] px-[8px] py-[6px] outline-none">
              <div>
                <PenIcon />
              </div>
              <div className="text-sm font-[500] leading-[20px] text-neutral-dark-1">
                Edit
              </div>
            </button>
            <button className="flex items-center gap-[8px] px-[8px] py-[6px] outline-none">
              <div>
                <TrashIcon />
              </div>
              <div className="text-sm font-[500] leading-[20px] text-error">
                Delete
              </div>
            </button>
          </div>
        </DropdownMenu>
      </div>
    </>
  );
};

export default TableMenuButton;
