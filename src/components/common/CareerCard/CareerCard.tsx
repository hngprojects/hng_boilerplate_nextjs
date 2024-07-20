import React from "react";

import { Card, CardContent, CardFooter } from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";
import CustomButton from "../Button/button";

interface CareerCardProperties {
  isLoading: boolean;
  jobTitle?: string;
  location?: string;
  description?: string;
  amount?: string;
}

const CareerCard: React.FC<CareerCardProperties> = ({
  isLoading,
  jobTitle,
  location,
  description,
  amount,
}) => {
  return (
    <Card className="max-w-full text-foreground">
      <CardContent className="pt-6">
        {isLoading ? (
          <div className="flex w-full max-w-6xl flex-col space-y-3">
            <Skeleton
              className="h-32 w-full rounded-lg md:w-full"
              data-testid="skeleton"
            />
            <div className="space-y-2">
              <Skeleton className="h-4 w-60 sm:w-96" data-testid="skeleton" />
              <Skeleton className="h-4 w-60 md:w-full" data-testid="skeleton" />
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold">{jobTitle}</h3>
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
              {amount}
              <span className="font-normal">/month</span>
            </span>
            <CustomButton variant="primary">View Details</CustomButton>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
