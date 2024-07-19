import React from "react";

import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

interface CareerCardProperties {
  isLoading: boolean;
  jobTitle?: string;
  location?: string;
  description?: string;
  amount?: string;
  onViewDetails?: () => void;
}

const CareerCard: React.FC<CareerCardProperties> = ({
  isLoading,
  jobTitle,
  location,
  description,
  amount,
  onViewDetails,
}) => {
  return (
    <Card className="text-cardText max-w-[100%]">
      <CardContent className="pt-6">
        {isLoading ? (
          <div className="flex w-[800px] flex-col space-y-3">
            <Skeleton
              className="h-[125px] w-full rounded-[7px] md:w-full"
              data-testid="skeleton"
            />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[500px]" data-testid="skeleton" />
              <Skeleton
                className="h-4 w-[250px] md:w-full"
                data-testid="skeleton"
              />
              <Skeleton
                className="h-4 w-[200px] md:w-full"
                data-testid="skeleton"
              />
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-[24px] font-semibold">{jobTitle}</h3>
            <p className="text-[16px]">{location}</p>
            <p className="mt-[12px] line-clamp-2 text-[18px] text-sm">
              {description}
            </p>
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
            <span className="text-[16px] font-semibold">
              {amount}
              <span className="font-normal">/month</span>
            </span>
            <Button
              onClick={onViewDetails}
              className="hover:transtion-all hover:bg-primary/300 bg-primary text-white hover:scale-[1.03] hover:duration-200"
            >
              View Details
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
