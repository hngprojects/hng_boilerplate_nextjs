import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import * as React from "react";

import { ButtonProperties, buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const Pagination = ({
  className,
  ...properties
}: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...properties}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...properties }, reference) => (
  <ul
    ref={reference}
    className={cn("flex flex-row items-center gap-0 md:gap-1", className)}
    {...properties}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...properties }, reference) => (
  <li ref={reference} className={cn("", className)} {...properties} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProperties = {
  isActive?: boolean;
  activeVariant?: "default" | "outline";
} & Pick<ButtonProperties, "size"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  activeVariant = "outline",
  size = "icon",
  ...properties
}: PaginationLinkProperties) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={cn(
      buttonVariants({
        variant: isActive ? activeVariant : "ghost",
        size,
      }),
      isActive
        ? "border-solid border-border bg-transparent"
        : "bg-white text-[#98A2B3]",
      className,
    )}
    {...properties}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...properties
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="icon"
    className={cn("border text-foreground", className)}
    {...properties}
  >
    <ChevronLeft className="h-4 w-4" />
    <span></span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...properties
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="icon"
    className={cn("border text-foreground", className)}
    {...properties}
  >
    <span></span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  ...properties
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...properties}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
