"use client";

import { Search } from "lucide-react";
import { useEffect, useState } from "react";

import { cardData } from "~/app/integration/data/data";
import { IntegrationCard } from "~/components/common/IntegrationCard/IntegrationCard";
import SideMenu from "../Sidemenu/sideMenu";

interface CardProperty {
  heading: string;
  description: string;
  logoURL: string;
  isActive: boolean;
}

const Integration = () => {
  const [filter, setFilter] = useState("All");
  const [filteredCards, setFilteredCards] = useState<CardProperty[]>([]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    const temporary = cardData?.filter((data) => {
      if (filter === "Active") return data.isActive;
      if (filter === "Inactive") return !data.isActive;
      return true;
    });
    setFilteredCards([...temporary]);
  }, [filter]);

  return (
    <SideMenu>
      <div className="w-full">
        <p className="text-xl font-semibold">Integration</p>
        <p className="mt-2 text-sm">
          Supercharge your workflow and handle repetitive tasks with apps you
          use everyday
        </p>
        <div className="mt-8 flex w-full flex-col justify-between gap-x-2 gap-y-2 md:flex-row md:gap-x-4">
          <ul className="flex w-[9.5rem] items-center justify-center gap-x-4 rounded-md border border-[#CBD5E1] py-1 text-xs">
            <li
              className={`cursor-pointer rounded-md px-2 py-1 ${filter === "All" ? "bg-gray-300" : ""}`}
              onClick={() => handleFilterChange("All")}
            >
              All
            </li>
            <li
              className={`cursor-pointer ${filter === "Active" ? "rounded-md bg-gray-300 px-1 py-1" : ""}`}
              onClick={() => handleFilterChange("Active")}
            >
              Active
            </li>
            <li
              className={`cursor-pointer ${filter === "Inactive" ? "rounded-md bg-gray-300 px-1 py-1" : ""}`}
              onClick={() => handleFilterChange("Inactive")}
            >
              Inactive
            </li>
          </ul>
          <div className="flex max-w-[22rem] items-center gap-x-2 rounded-md border border-gray-200 px-2">
            <Search className="w-4 md:w-7" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 text-sm focus:outline-none"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4 pb-8 pt-4 max-[550px]:grid-cols-1 md:gap-x-6 lg:grid-cols-3">
          {filteredCards.map((data: CardProperty, index: number) => (
            <div key={index}>
              <IntegrationCard
                heading={data.heading}
                description={data.description}
                logoURL={data.logoURL}
                isActive={data.isActive}
              />
            </div>
          ))}
        </div>
      </div>
    </SideMenu>
  );
};

export default Integration;
