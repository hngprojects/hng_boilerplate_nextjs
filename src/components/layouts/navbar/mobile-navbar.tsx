import "./menu.css";

import { motion, stagger, useAnimate } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useUser } from "~/hooks/user/use-user";
import { cn } from "~/lib/utils";
import { NAV_LINKS } from "./links";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const { user } = useUser();

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // create the animations that will be applied
  // whenever the open state is toggled

  useEffect(() => {
    animate(
      "ul",
      {
        width: open ? 180 : 0,
        height: open && user.email ? 140 : open ? 250 : 0,
        opacity: open ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      },
    );
    animate(
      "li",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0,
      },
    );
  }, [animate, open, staggerList, user.email]);

  return (
    <>
      <div
        aria-hidden
        className={cn(
          "fixed left-0 top-0 z-[99] min-h-screen w-full bg-black/5 transition-all md:hidden",
          open
            ? "opacity-100 duration-500"
            : "pointer-events-none opacity-0 duration-300",
        )}
        onClick={() => {
          setOpen(false);
        }}
      />

      <div
        className="relative z-[999] shadow-xl shadow-black/20 md:hidden"
        ref={scope}
      >
        <motion.button
          id="menu-button"
          className={cn("flex flex-col justify-center gap-y-1")}
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.95 }}
          data-menu-open={open}
        >
          {[1, 2, 3].map((number_) => (
            <span key={number_} />
          ))}
        </motion.button>
        <ul
          className="absolute left-0 top-10 overflow-hidden bg-white/90 pl-8 pt-1 backdrop-blur-lg"
          data-menu-ul
        >
          {NAV_LINKS.map((link, index) => (
            <motion.li key={index}>
              <Link
                href={link.link}
                key={link.route}
                onClick={() => {
                  setOpen(false);
                }}
                className={cn(
                  "hover:text-accent-color relative w-fit text-sm font-medium text-neutral-dark-1 transition-colors duration-300",
                )}
              >
                {link.route}
                <span
                  tabIndex={-1}
                  aria-hidden
                  className={cn(
                    "absolute -bottom-2 left-1/2 h-[2px] w-full -translate-x-1/2 translate-y-2 transform rounded-tl-lg rounded-tr-lg border-none bg-white opacity-0 outline-none transition-all duration-300 md:w-[120%]",
                  )}
                />
              </Link>
            </motion.li>
          ))}
          <motion.li key={NAV_LINKS.length + 1}>
            <Link
              href="/login"
              className={cn(
                "grid max-w-[100px] place-items-center whitespace-nowrap rounded-md border border-primary px-2 py-2 text-sm text-primary",
                user?.email ? "hidden" : "",
              )}
            >
              Log in
            </Link>
          </motion.li>

          <motion.li key={NAV_LINKS.length + 2}>
            <Link
              href="/register"
              className={cn(
                "grid max-w-[100px] place-items-center whitespace-nowrap rounded-md border border-primary bg-primary px-2 py-2 text-sm text-white",
                user?.email ? "hidden" : "",
              )}
            >
              Get Started
            </Link>
          </motion.li>
        </ul>
      </div>
    </>
  );
}
