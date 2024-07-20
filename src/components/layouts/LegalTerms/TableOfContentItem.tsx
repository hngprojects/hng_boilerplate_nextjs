import Link, { LinkProps } from "next/link";
import { DetailedHTMLProps, LiHTMLAttributes, ReactNode } from "react";

import { cn } from "~/lib/utils";

type TableOfContentItemProperties = DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> & {
  className?: string;
  children: ReactNode;
  href: LinkProps["href"];
};

export default function TableOfContentItem({
  className,
  children,
  href,
  ...rest
}: TableOfContentItemProperties) {
  return (
    <li
      className={cn(
        "list-inside list-disc text-base font-normal leading-[16.94px] text-[hsl(0,0%,32%)] md:leading-[19.36px]",
        className,
      )}
      {...rest}
    >
      <Link
        href={href}
        className="decoration-[hsl(0,0%,32%)] decoration-2 hover:underline"
      >
        {children}
      </Link>
    </li>
  );
}
