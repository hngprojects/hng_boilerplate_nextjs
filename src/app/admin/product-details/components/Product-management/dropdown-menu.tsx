import React from "react";

interface DropdownMenuProperties {
  children: React.ReactNode;
  active: boolean;
  width: string;
  position?: string;
}

const DropdownMenu = ({
  children,
  active,
  width,
  position,
}: DropdownMenuProperties) => {
  return (
    <>
      <div
        className={`${active ? "visible translate-y-0 opacity-100" : "invisible -translate-y-[5px] opacity-0"} ease absolute top-full mt-2 rounded-[6px] bg-white opacity-0 shadow-md ring-1 ring-border duration-300 ${width} z-20 ${position && position} ${!position && "right-0"}`}
      >
        {children}
      </div>
    </>
  );
};

export default DropdownMenu;
