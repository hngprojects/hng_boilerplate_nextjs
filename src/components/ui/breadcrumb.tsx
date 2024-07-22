import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";
import * as React from "react";

import { cn } from "~/lib/utils";

interface BreadcrumbProperties extends React.ComponentPropsWithoutRef<"nav"> {}
const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProperties>(
  ({ ...properties }, reference) => (
    <nav ref={reference} aria-label="breadcrumb" {...properties} />
  ),
);
Breadcrumb.displayName = "Breadcrumb";

interface BreadcrumbListProperties
  extends React.ComponentPropsWithoutRef<"ol"> {
  className?: string;
}
const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  BreadcrumbListProperties
>(({ className, ...properties }, reference) => (
  <ol
    ref={reference}
    className={cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className,
    )}
    {...properties}
  />
));
BreadcrumbList.displayName = "BreadcrumbList";

interface BreadcrumbItemProperties
  extends React.ComponentPropsWithoutRef<"li"> {
  className?: string;
}
const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  BreadcrumbItemProperties
>(({ className, ...properties }, reference) => (
  <li
    ref={reference}
    className={cn("inline-flex items-center gap-1.5", className)}
    {...properties}
  />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

interface BreadcrumbLinkProperties extends React.ComponentPropsWithoutRef<"a"> {
  asChild?: boolean;
  className?: string;
}
const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProperties
>(({ asChild, className, ...properties }, reference) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={reference}
      className={cn("transition-colors hover:text-foreground", className)}
      {...properties}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

interface BreadcrumbPageProperties
  extends React.ComponentPropsWithoutRef<"span"> {
  className?: string;
}
const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbPageProperties
>(({ className, ...properties }, reference) => (
  <span
    ref={reference}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...properties}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

interface BreadcrumbSeparatorProperties
  extends React.ComponentPropsWithoutRef<"li"> {
  className?: string;
}
const BreadcrumbSeparator = ({
  children,
  className,
  ...properties
}: BreadcrumbSeparatorProperties) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...properties}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

interface BreadcrumbEllipsisProperties
  extends React.ComponentPropsWithoutRef<"span"> {
  className?: string;
}
const BreadcrumbEllipsis = ({
  className,
  ...properties
}: BreadcrumbEllipsisProperties) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...properties}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
