"use client";

import { FC } from "react";

import CareerCard from "./CareerCard";

interface CareerCardProperties {
  id: string;
  isLoading: boolean;
  jobTitle?: string;
  location?: string;
  description?: string;
  amount?: string;
}

const CareerCardParent: FC<CareerCardProperties> = ({
  id,
  isLoading,
  jobTitle,
  location,
  description,
  amount,
}) => {
  return (
    <CareerCard
      id={id}
      isLoading={isLoading}
      jobTitle={jobTitle}
      location={location}
      description={description}
      amount={amount}
    />
  );
};

export default CareerCardParent;
