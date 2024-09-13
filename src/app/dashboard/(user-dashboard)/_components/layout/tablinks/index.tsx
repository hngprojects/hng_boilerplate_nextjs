"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "~/lib/utils";

type TablinksProperties = {
  links: {
    title: string;
    href: Route;
  }[];
};

export function Tablinks({ links }: TablinksProperties) {
  const pathname = usePathname();
  return (
    <nav className="flex flex-wrap rounded-[6px] border border-stroke-colors-stroke px-[5px] py-1">
      {links.map(({ title, href }) => (
        <Link
          key={title}
          href={href}
          className={cn(
            "flex rounded bg-white px-3 py-1.5 text-sm font-medium text-neutral-dark-2",
            pathname === href && "bg-subtle",
          )}
        >
          {title}
        </Link>
      ))}
    </nav>
  );
}
