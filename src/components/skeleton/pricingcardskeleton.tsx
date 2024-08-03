"use client";

import { Skeleton } from "~/components/ui/skeleton";



// 

const PricingCardSkeleton = () => {
  return Array.from({ length: 4 }).map((_, index) => (
    <div className="bg-white py-8 px-5 w-full sm:w-[280px] rounded:md" key={index}>
      <Skeleton
        className="mb-10 h-[10px] w-full rounded-xl"
        data-testid="skeleton"
      />
      <Skeleton
        className="mb-20 h-[10px] w-full rounded-xl"
        data-testid="skeleton"
      />
      <Skeleton
        className="mb-10 h-[10px] w-full rounded-xl"
        data-testid="skeleton"
      />
      <Skeleton
        className="mb-10 h-[10px] w-full rounded-xl"
        data-testid="skeleton"
      />
      <Skeleton
        className="mb-10 h-[10px] w-full rounded-xl"
        data-testid="skeleton"
      />
      <Skeleton
        className="mb-10 h-[10px] w-full rounded-xl"
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