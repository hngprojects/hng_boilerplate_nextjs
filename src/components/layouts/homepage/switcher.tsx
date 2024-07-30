"use client";

import { useState } from "react";

const Switcher = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div
      className={`h-[24px] w-[44px] cursor-pointer rounded-full p-[2px] transition-colors duration-300 ${
        isOn ? "bg-[#F97316]" : "bg-gray-400"
      }`}
      onClick={toggleSwitch}
    >
      <div
        className={`h-[20px] w-[20px] rounded-full bg-white transition-transform duration-300 ${
          isOn ? "translate-x-[20px] transform" : "translate-x-0 transform"
        }`}
      ></div>
    </div>
  );
};

export default Switcher;
