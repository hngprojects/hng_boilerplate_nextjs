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
    <Card className="max-w-[100%]  text-cardText hover:transtion-all hover:duration-500  hover:scale-[1.04]">
      <CardContent className="pt-6">
        {isLoading ? (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] md:w-full rounded-[7px]" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px] md:w-full" />
              <Skeleton className="h-4 w-[200px] md:w-full" />
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-[24px] font-semibold">{jobTitle}</h3>
            <p className="text-[16px] ">{location}</p>
            <p className="mt-[12px] text-[18px] text-sm line-clamp-2 ">
              {description}
            </p>
          </>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {isLoading ? (
          <>
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-10 w-28" />
          </>
        ) : (
          <>
            <span className="font-semibold text-[16px]">
              {amount}
              <span className="font-normal">/month</span>
            </span>
            <Button
              onClick={onViewDetails}
              className="bg-primary hover:bg-primary/700 text-white"
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
