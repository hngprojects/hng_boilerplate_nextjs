"use client";

import { Skeleton } from "~/components/ui/skeleton";

//

const FaqSkeleton = () => {
  return Array.from({ length: 4 }).map((_, index) => (
    <div
      className="mb-3 w-full rounded-xl border border-border px-2 py-2"
      key={index}
    >
      <Skeleton className="h-[40px] w-full rounded-md" data-testid="skeleton" />
    </div>
  ));
};

export default FaqSkeleton;
