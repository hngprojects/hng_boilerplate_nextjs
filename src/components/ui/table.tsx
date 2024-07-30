import * as React from "react";

import { cn } from "~/lib/utils";

type DivProperties = {
  divClassName?: string;
};

// Combine DivProperties with HTMLTableElement attributes
type TableProperties = DivProperties & React.HTMLAttributes<HTMLTableElement>;

const Table = React.forwardRef<HTMLTableElement, TableProperties>(
  ({ divClassName, className, ...properties }, reference) => (
    <div className={cn("relative w-auto overflow-auto", divClassName)}>
      <table
        ref={reference}
        className={cn("w-full caption-bottom text-sm", className)}
        {...properties}
      />
    </div>
  ),
);
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...properties }, reference) => (
  <thead
    ref={reference}
    className={cn("[&_tr]:border-b", className)}
    {...properties}
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...properties }, reference) => (
  <tbody
    ref={reference}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...properties}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...properties }, reference) => (
  <tfoot
    ref={reference}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className,
    )}
    {...properties}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...properties }, reference) => (
  <tr
    ref={reference}
    className={cn(
      "border-b transition-colors hover:bg-[#F1F5F9] data-[state=selected]:bg-muted",
      className,
    )}
    {...properties}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...properties }, reference) => (
  <th
    ref={reference}
    className={cn(
      "h-12 px-2 text-left align-middle font-medium text-neutral-dark-2 sm:px-4 [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...properties}
  />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...properties }, reference) => (
  <td
    ref={reference}
    className={cn(
      "p-4 align-middle text-neutral-dark-1 [&:has([role=checkbox])]:pr-0",
      className,
    )}
    {...properties}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...properties }, reference) => (
  <caption
    ref={reference}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...properties}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
