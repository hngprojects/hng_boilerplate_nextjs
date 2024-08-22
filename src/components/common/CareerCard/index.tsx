import { FC } from "react";

import CareerCard from "./CareerCard";
import { Job } from "./Jobs";

interface CareerCardParentProperties {
  job: Job;
  location?: string;
  description?: string;
  amount?: string;
  company?: string;
  onViewDetails: () => void;
}

const CareerCardParent: FC<CareerCardParentProperties> = ({
  job,
  onViewDetails,
}) => {
  return (
    <CareerCard
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
