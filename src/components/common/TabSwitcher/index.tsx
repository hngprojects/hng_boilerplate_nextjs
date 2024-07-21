"use client";

import React from "react";

type TabSwitcherProperties = {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
};

type Tabs = {
  id: number;
  name: string;
};

const Tabs = [
  {
    id: 1,
    name: "Overview",
  },
  {
    id: 2,
    name: "Analytics",
  },
  {
    id: 3,
    name: "Reports",
  },
];

const TabSwitcher: React.FC<TabSwitcherProperties> = ({ tab, setTab }) => {
  return (
    <div className="flex rounded-md border border-solid border-slate_100 p-[5px]">
      {Tabs.map((tabItem) => (
        <div
          onClick={() => {
            setTab(tabItem.id);
          }}
          key={tabItem.id}
          className={`${tabItem.id === tab ? "bg-slate_100" : "bg-white"} flex flex-1 cursor-pointer items-center justify-center rounded-sm px-[20px] py-[6px] text-sm`}
        >
          {tabItem.name}
        </div>
      ))}
    </div>
  );
};

export default TabSwitcher;
