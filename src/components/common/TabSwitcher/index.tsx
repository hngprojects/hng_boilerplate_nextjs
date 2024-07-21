"use client"
import { Tapestry } from 'next/font/google'
import React from 'react'

type TabSwitcherProps = {
  tab: number;
  setTab: React.Dispatch<React.SetStateAction<number>>;
};

type Tabs = {
  id: number,
  name: string
}

const Tabs = [
  {
    id: 1,
    name: "Overview"
  },
  {
    id: 2,
    name: "Analytics"
  },
  {
    id: 3,
    name: "Reports"
  },
]

const TabSwitcher: React.FC<TabSwitcherProps> = ({ tab, setTab }) => {


  return (
    <div className="flex rounded-md border border-solid p-[5px] border-slate_100">
      {Tabs.map((tabItem) => (
        <div
          onClick={() =>{ 
            console.log(`Tab clicked: ${tabItem.id}`);
            setTab(tabItem.id)
          }}
          key={tabItem.id} className={`${tabItem.id === tab ? "bg-slate_100" : "bg-white"} flex-1 rounded-sm px-[20px] py-[6px] text-sm flex justify-center items-center cursor-pointer`}>
          {tabItem.name}
        </div>
      ))}
    </div>
  )
}

export default TabSwitcher