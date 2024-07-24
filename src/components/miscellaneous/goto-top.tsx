"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

import useWindowHeight from "~/hooks/util-hooks/use-window-height";
import { cn } from "~/lib/utils";

const handleTop = () => {
  window && window.scroll({ top: 0, behavior: "smooth" });
};
const GotoTop = () => {
  const { scrollY } = useWindowHeight();

  const [hideToTop, setHideToTop] = useState(false);

  useEffect(() => {
    let previousScrollpos = window.scrollY;
    // console.log("PREV", prevScrollpos);
    window.addEventListener("scroll", () => {
      const currentScrollPos = window.scrollY;

      if (previousScrollpos >= currentScrollPos) {
        setHideToTop(false);
      } else {
        setHideToTop(true);
      }
      previousScrollpos = currentScrollPos;
    });
  }, []);

  return hideToTop ? undefined : (
    <div
      role="button"
      onClick={handleTop}
      className={cn(
        "fixed bottom-12 right-2 z-[9999] mx-auto flex max-w-[1440px] select-none items-center rounded border border-primary bg-primary/90 text-2xl text-white backdrop-blur-xl transition-all duration-1000 active:scale-95 active:duration-300 dark:bg-white dark:text-black dark:shadow-[0_0_40px_0_rgba(255,255,255,0.26)] max-[400px]:bottom-16 sm:bottom-16 sm:right-5 sm:text-4xl",
        scrollY > 1000
          ? "translate-x-0 opacity-100 shadow-[0_0_40px_0_rgba(0,0,0,0.16)]"
          : "translate-x-20 opacity-0",
      )}
    >
      <ChevronUp />
    </div>
  );
};

export default GotoTop;
