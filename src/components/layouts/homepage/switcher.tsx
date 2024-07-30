'use client'
import { useState } from "react";

const Switcher = () => {

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
      setIsOn(!isOn);
    };
  
  return (
    <div
className={`w-[44px] h-[24px] rounded-full p-[2px] cursor-pointer transition-colors duration-300 ${
  isOn ? 'bg-[#F97316]' : 'bg-gray-400'
}`}
onClick={toggleSwitch}
>
<div
  className={`w-[20px] h-[20px] rounded-full bg-white transition-transform duration-300 ${
    isOn ? 'transform translate-x-[20px]' : 'transform translate-x-0'
  }`}
></div>
</div>
  )
}

export default Switcher


