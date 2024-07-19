"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import {
  Breadcrumb as BreadcrumbBase,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";

type PagesList = {
  name: string;
  href: string;
  isCurrent?: boolean;
};

export type BreadcrumbProperties = {
  pages?: PagesList[];
  maxPages?: number;
  variant?: "primary" | "default";
};

export function Breadcrumb({
  pages,
  maxPages = 3,
  variant = "default",
}: BreadcrumbProperties) {
  const paths = usePathname().split("/");

  const generatedPages: PagesList[] = paths.map((path, index, _paths) => {
    const isHomePath = path.trim().length === 0;
    return {
      name: isHomePath ? "Home" : path.replaceAll("-", " "),
      href: isHomePath ? "/" : "" + _paths.slice(0, index + 1).join("/"),
      isCurrent: index === _paths.length - 1,
    };
  });
  const isStatic = pages && pages.length > 0;
  const breadcrumbs = isStatic ? pages : generatedPages;
  const firstBreadcrumb = breadcrumbs[0];
  const hasEllipsis = breadcrumbs.length > maxPages;
  const isPrimary = variant === "primary";

  return (
    <BreadcrumbBase>
      <BreadcrumbList>
        <BreadcrumbItem>
          {firstBreadcrumb.isCurrent ? (
            <BreadcrumbPage
              className={isPrimary ? "text-[#F97316]" : "text-[#6A6A6A]"}
            >
              {firstBreadcrumb.name}
            </BreadcrumbPage>
          ) : (
            <BreadcrumbLink
              className={isPrimary ? "text-[#525252]" : "text-[#222222]"}
              asChild
            >
              <Link href={firstBreadcrumb.href}>{firstBreadcrumb.name}</Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {hasEllipsis && (
          <>
            <BreadcrumbSeparator className="text-[#6A6A6A]" />
            <BreadcrumbItem>
              <BreadcrumbLink
                className={isPrimary ? "text-[#525252]" : "text-[#222222]"}
                asChild
              >
                <Link href={breadcrumbs[breadcrumbs.length - maxPages].href}>
                  <BreadcrumbEllipsis />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
        {breadcrumbs
          .slice(hasEllipsis ? -maxPages + 1 : 1)
          .map(({ name, href, isCurrent }) => {
            return (
              <Fragment key={name}>
                <BreadcrumbSeparator className="text-[#6A6A6A]" />
                {isCurrent ? (
                  <BreadcrumbItem>
                    <BreadcrumbPage
                      className={
                        isPrimary ? "text-[#F97316]" : "text-[#6A6A6A]"
                      }
                    >
                      {name}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className={
                        isPrimary ? "text-[#525252]" : "text-[#222222]"
                      }
                      asChild
                    >
                      <Link href={href}>{name}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )}
              </Fragment>
            );
          })}
      </BreadcrumbList>
    </BreadcrumbBase>
  );
}
