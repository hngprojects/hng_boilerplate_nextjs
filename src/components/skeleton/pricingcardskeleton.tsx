"use client";

import { Skeleton } from "~/components/ui/skeleton";

// 

const PricingCardSkeleton = () => {
  return Array.from({ length: 4 }).map((_, index) => (
    <div className="border border-border rounded-xl py-8 px-5 w-full sm:w-[280px]" key={index}>
      <Skeleton
        className="mb-10 h-[12px] w-full rounded-xl"
        data-testid="skeleton"
      />
      <Skeleton
        className="mb-20 h-[12px] w-full rounded-xl"
        data-testid="skeleton"
      />
      <Skeleton
        className="mb-10 h-[12px] w-full rounded-xl"
        data-testid="skeleton"
      />
      <Skeleton
        className="mb-10 h-[12px] w-full rounded-xl"
        data-testid="skeleton"
      />
      <Skeleton
        className="mb-10 h-[12px] w-full rounded-xl"
        data-testid="skeleton"
      />
      <Skeleton
        className="mb-10 h-[12px] w-full rounded-xl"
        data-testid="skeleton"
      />
      <Skeleton
        className="h-[50px] w-full rounded-md"
        data-testid="skeleton"
      />
    </div>
  ));
};

export default PricingCardSkeleton