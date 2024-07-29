"use client";

import { useEffect, useState } from "react";

interface DimensionProperties {
  scrollY: number;
  totalHeight: number;
  winHeight: number;
}
const useWindowHeight = () => {
  const [dimensions, setDimensions] = useState<DimensionProperties>({
    scrollY: 0,
    totalHeight: 0,
    winHeight: 0,
  });

  useEffect(() => {
    setDimensions({
      scrollY: window.scrollY,
      totalHeight: document.documentElement.scrollHeight,
      winHeight: window.innerHeight,
    });
    const handleScroll = () => {
      setDimensions({
        scrollY: window.scrollY,
        totalHeight: document.documentElement.scrollHeight,
        winHeight: window.innerHeight,
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // console.log(scrollY);

  return dimensions;
};

export default useWindowHeight;
