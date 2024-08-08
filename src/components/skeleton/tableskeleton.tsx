"use client";

import { Skeleton } from "~/components/ui/skeleton";
import { TableCell, TableRow } from "~/components/ui/table";

//

const TableSkeleton = () => {
  return Array.from({ length: 6 }).map((_, index) => (
    <TableRow
      key={index}
      className="h-[50px] w-full border-b border-slate-300 p-4 text-sm font-medium text-black *:text-black last-of-type:border-b"
    >
      <TableCell>
        <Skeleton
          className="h-[20px] w-full rounded-md"
          data-testid="skeleton"
        />
      </TableCell>
      <TableCell>
        <Skeleton
          className="h-[20px] w-full rounded-md"
          data-testid="skeleton"
        />
      </TableCell>
      <TableCell>
        <Skeleton
          className="h-[20px] w-full rounded-md"
          data-testid="skeleton"
        />
      </TableCell>
      <TableCell>
        <Skeleton className="h-[20px] rounded-md" data-testid="skeleton" />
      </TableCell>
    </TableRow>
  ));
};

export default TableSkeleton;
