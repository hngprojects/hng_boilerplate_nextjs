"use client";

import Link from "next/link";
import { FC } from "react";

import { Card, CardContent, CardFooter } from "~/components/ui/card";

interface CareerCardProperties {
  jobTitle?: string;
  location?: string;
  description?: string;
  amount?: string;
  company?: string;
  onViewDetails: () => void;
}

const CareerCard: FC<CareerCardProperties> = ({
  jobTitle,
  location,
  description,
  amount,
  company,
  onViewDetails,
}) => {
  return (
    <Card className="w-full bg-background text-foreground">
      <CardContent className="pt-6">
        <h3 className="mb-2 text-lg font-semibold">{jobTitle}</h3>
        <p className="text-md mb-1">{company}</p>
        <p className="text-sm">{location}</p>
        <p className="text-md mt-4">{description}</p>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <span className="text-sm font-semibold">
          {amount}
          <span className="font-normal">/month</span>
        </span>
        <Link
          href={`/career/${jobTitle}`}
          onClick={(event) => {
            event.preventDefault();
            onViewDetails();
          }}
          className="rounded bg-primary px-4 py-2 text-[14px] text-background hover:bg-destructive"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
