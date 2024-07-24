"use client";

import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [winWidth, setWinWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setWinWidth(window.innerWidth);
      }, 500);

      const handleResize = () => {
        setWinWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return { winWidth };
};

export default useWindowWidth;
