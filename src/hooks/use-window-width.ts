"use client";

import { useEffect, useState } from "react";

const useWindowWidth = () => {
  const [winWidth, setWinWidth] = useState(0);
  useEffect(() => {
    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setWinWidth(window.innerWidth);
    }, 300);

    const handleResize = () => {
      setWinWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, []);

  return { winWidth };
};

export default useWindowWidth;
