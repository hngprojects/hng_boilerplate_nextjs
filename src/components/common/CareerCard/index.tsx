import { FC } from "react";

import CareerCard from "./CareerCard";
import { Job } from "./Jobs";

interface CareerCardParentProperties {
  isLoading: boolean;
  job: Job;
  location?: string;
  description?: string;
  amount?: string;
  company?: string;
  onViewDetails: () => void;
}

const CareerCardParent: FC<CareerCardParentProperties> = ({
  isLoading,
  job,
  onViewDetails,
}) => {
  return (
    <CareerCard
      isLoading={isLoading}
      jobTitle={job.title}
      location={job.location}
      description={job.description}
      amount={job.salary_range}
      company={job.company_name}
      onViewDetails={onViewDetails}
    />
  );
};

export default CareerCardParent;
