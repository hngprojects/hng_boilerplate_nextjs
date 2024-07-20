"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import CustomButton from "~/components/common/Button/button";
import CheckIconSVG from "../../assets/svgs/check-icon.svg";
import FilterIconSVG from "../../assets/svgs/filter-icon.svg";
import DropdownMenu from "./dropdown-menu";

const FilterIcon = () => {
  return (
    <Image
      src={FilterIconSVG}
      className="h-[20px] w-[20px]"
      alt="filter svg icon"
    />
  );
};

const CheckIcon = () => {
  return (
    <Image
      src={CheckIconSVG}
      className="h-[16px] w-[16px]"
      alt="check svg icon"
    />
  );
};

// filter dropdown menu data
const filterMenuData: string[] = ["In Stock", "Out of Stock", "Low on Stock"];

const FilterProductsButton = () => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedFilter, setSelectedFilter] = useState<string>(
    filterMenuData[0],
  );

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
        <div onClick={() => setShowDropdown(!showDropdown)}>
          <CustomButton
            variant="outline"
            icon={<FilterIcon />}
            isLeftIconVisible={true}
            isLoading={false}
            isDisabled={false}
          >
            Filter
          </CustomButton>
        </div>

        <DropdownMenu width="w-[185px]" active={showDropdown}>
          <div className="border-b border-b-border p-[5px]">
            <div className="px-[8px] py-[6px] text-sm font-semibold leading-[20px]">
              Filter by
            </div>
          </div>
          <div className="flex flex-col p-[5px]">
            {filterMenuData.map((data, index) => {
              return (
                <button
                  onClick={() => setSelectedFilter(filterMenuData[index])}
                  key={index}
                  className="flex items-center gap-[8px] px-[8px] py-[6px] outline-none"
                >
                  <div
                    className={
                      selectedFilter === data ? "visible" : "invisible"
                    }
                  >
                    <CheckIcon />
                  </div>
                  <div className="text-sm font-[500] leading-[20px] text-neutral-dark-1">
                    {data}
                  </div>
                </button>
              );
            })}
          </div>
        </DropdownMenu>
      </div>
    </>
  );
};

export default FilterProductsButton;
