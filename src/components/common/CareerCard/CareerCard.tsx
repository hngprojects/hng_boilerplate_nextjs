"use client";

import Link from "next/link";
import { FC } from "react";

import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

const salaryRange = {
  below_30k: "$30k",
  "30k_to_50k": "$30k - $50k",
  "50k_to_70k": "$50k - $70k",
  "70k_to_100k": "$70k - $100k",
  "100k_to_150k": "$100k - $150k",
  above_150k: "above $150k",
};
const mapSalaryRange = (range: string): string => {
  return salaryRange[range as keyof typeof salaryRange] || range;
};

interface CareerCardProperties {
  isLoading: boolean;
  jobTitle?: string;
  location?: string;
  description?: string;
  amount?: string;
  company?: string;
  onViewDetails: () => void;
}

const CareerCard: FC<CareerCardProperties> = ({
  isLoading,
  jobTitle,
  location,
  description,
  amount,
  company,
  onViewDetails,
}) => {
  const mappedAmount = amount ? mapSalaryRange(amount) : "";
  return (
    <Card className="max-w-full bg-background text-foreground">
      <CardContent className="pt-6">
        {isLoading ? (
          <div className="flex w-full max-w-6xl flex-col space-y-3">
            <Skeleton
              className="h-20 w-full rounded-lg md:w-full"
              data-testid="skeleton"
            />
            <div className="space-y-2">
              <Skeleton className="h-4 w-60 md:w-full" data-testid="skeleton" />
              <Skeleton className="h-4 w-60 md:w-full" data-testid="skeleton" />
            </div>
          </div>
        ) : (
          <>
            <h3 className="mb-2 text-xl font-semibold">{jobTitle}</h3>
            <p className="text-sm">{company}</p>
            <p className="text-sm">{location}</p>
            <p className="mt-4 line-clamp-2 text-sm">{description}</p>
          </>
        )}
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        {isLoading ? (
          <>
            <Skeleton className="h-6 w-1/3" data-testid="skeleton" />
            <Skeleton className="h-10 w-28" data-testid="skeleton" />
          </>
        ) : (
          <>
            <span className="text-sm font-semibold">
              {mappedAmount}
              <span className="font-normal">/month</span>
            </span>
            <Link
              href={`/career/${jobTitle}`}
              onClick={(event) => {
                event.preventDefault();
                onViewDetails();
              }}
              className="rounded bg-primary px-4 py-2 text-[14px] text-background"
            >
              View Details
            </Link>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
