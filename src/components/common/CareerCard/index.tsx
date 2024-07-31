"use client";

import { FC, useEffect, useState } from "react";

import CareerCard from "./CareerCard";

interface CareerCardProperties {
  isLoading: boolean;
  jobTitle?: string;
  location?: string;
  description?: string;
  amount?: string;
}

const CareerCardParent: FC<CareerCardProperties> = ({
  isLoading,
  jobTitle,
  location,
  description,
  amount,
}) => {
  return (
    <CareerCard
      isLoading={isLoading}
      jobTitle={jobTitle}
      location={location}
      description={description}
      amount={amount}
    />
  );
};

export default CareerCardParent;
