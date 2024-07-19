"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "../../components/ui/button";
import { cn } from "../../lib/utils";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

const SidebarNav = ({ className, items, ...props }: SidebarNavProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className,
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "text-[#F97316]"
              : "hover:underline",
            "justify-start",
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default SidebarNav;
