"use client";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useState } from "react";
import { IoCheckmarkOutline, IoFunnelOutline } from "react-icons/io5";

interface FilterMenuPropertyType {
  id: number;
  title: string;
  selected?: boolean;
  function?: () => void;
}

const filterMenuData: FilterMenuPropertyType[] = [
  {
    id: 1,
    title: "In stock",
    selected: true,
  },

  {
    id: 2,
    title: "Out of stock",
    selected: false,
  },

  {
    id: 3,
    title: "Low on stock",
    selected: false,
  },
];

const FilterButton = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterMenuPropertyType>(
    filterMenuData[1],
  );

  const toggleCheckIcon = (id: number) => {
    const filterMenuButtonData = filterMenuData.find((data) => data.id === id);

    if (filterMenuButtonData) setSelectedFilter(filterMenuButtonData);
  };

  return (
    <>
      <Popover className="relative">
        <PopoverButton className="p-[8px] outline-none rounded-[6px] ring-1 ring-[#CBD5E1] flex flex-row items-center gap-[8px] text-base leading-[19.36px] text-[#0A0A0A]">
          <IoFunnelOutline className="h-[20px] w-[20px] text-[#0A0A0A]" />
          <div>Filter</div>
        </PopoverButton>

        <PopoverPanel
          transition
          className="absolute xl:-left-[10px] md:left-1/3 -left-[58px] z-10 mt-2 flex w-screen max-w-max -translate-x-1/2 outline-none transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <div className="w-[185px] flex-auto overflow-hidden outline-none rounded-[6px] bg-white shadow ring-1 ring-[#CBD5E1]">
            <div className="p-[5px] border-b border-b-">
              <div className="py-[6px] px-[8px] text-sm leading-[20px] font-semibold text-[#0A0A0A]">
                Filter by
              </div>
            </div>
            <div className="p-[5px]">
              {filterMenuData.map((data, index) => {
                const { selected, title, id } = data;

                selectedFilter.id === id
                  ? (data.selected = true)
                  : (data.selected = false);

                return (
                  <button
                    onClick={() => toggleCheckIcon(id)}
                    key={index}
                    className="outline-none w-full text-sm leading-[20px] font-[500] text-[#525252] duration-200 ease-in bg-white font-secondary flex items-center gap-3 px-[8px] py-[6px]"
                  >
                    <IoCheckmarkOutline
                      className={`h-[16px] w-[16px] ${selected ? "opacity-100" : "opacity-0"}`}
                    />
                    <div>{title}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </PopoverPanel>
      </Popover>
    </>
  );
};

export default FilterButton;
