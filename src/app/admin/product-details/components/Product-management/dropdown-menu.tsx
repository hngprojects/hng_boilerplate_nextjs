import React from "react";

interface DropdownMenuProperties {
  children: React.ReactNode;
  active: boolean;
  width: string;
}

const DropdownMenu = ({ children, active, width }: DropdownMenuProperties) => {
  return (
    <>
      <div
        className={`${active ? "visible translate-y-0 opacity-100" : "invisible -translate-y-[5px] opacity-0"} ease absolute right-0 top-full mt-2 rounded-[6px] bg-white opacity-0 shadow-md ring-1 ring-border duration-300 ${width}`}
      >
        {children}
      </div>
    </>
  );
};

export default DropdownMenu;
