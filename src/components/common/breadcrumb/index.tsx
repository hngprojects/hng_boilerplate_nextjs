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
} from "~/components/common/breadcrumb/breadcrumb";
import { cn } from "~/lib/utils";

type PagesList = {
  /** Specifies the page name */
  name: string;
  /** Specifies the page URL */
  href: string;
  /** Specifies if the page is the current page */
  isCurrent?: boolean;
};

export type BreadcrumbProperties = {
  /** Specifies the pages to display in the breadcrumb */
  pages?: PagesList[];
  /** Specifies the maximum number of pages to display in the breadcrumb */
  maxPages?: number;
  /** Specifies the breadcrumb style variant */
  variant?: "primary" | "default";
};

export function Breadcrumb({
  pages,
  maxPages = 3,
  variant = "default",
}: BreadcrumbProperties) {
  const paths = usePathname()?.split("/");

  const generatedPages: PagesList[] =
    paths?.map((path, index, _paths) => {
      const isHomePath = path.trim().length === 0;
      return {
        name: isHomePath ? "Home" : path.replaceAll("-", " "),
        href: isHomePath ? "/" : "" + _paths.slice(0, index + 1).join("/"),
        isCurrent: index === _paths.length - 1,
      };
    }) ?? [];
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
            <BreadcrumbPage className={cn(isPrimary && "text-primary")}>
              {firstBreadcrumb.name}
            </BreadcrumbPage>
          ) : (
            <BreadcrumbLink
              className={cn(isPrimary && "text-neutral-dark-1")}
              asChild
            >
              <Link href={firstBreadcrumb.href}>{firstBreadcrumb.name}</Link>
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {hasEllipsis && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                className={cn(isPrimary && "text-neutral-dark-1")}
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
                <BreadcrumbSeparator />
                {isCurrent ? (
                  <BreadcrumbItem>
                    <BreadcrumbPage className={cn(isPrimary && "text-primary")}>
                      {name}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbLink
                      className={cn(isPrimary && "text-neutral-dark-1")}
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
