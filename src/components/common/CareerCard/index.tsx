import { FC } from "react";

import CareerCard from "./CareerCard";
import { Job } from "./Jobs";

interface CareerCardParentProperties {
  isLoading: boolean;
  job: Job;
}

const CareerCardParent: FC<CareerCardParentProperties> = ({
  isLoading,
  job,
}) => {
  return (
    <CareerCard
      isLoading={isLoading}
      jobTitle={job.title}
      location={job.location}
      description={job.description}
      amount={job.salary_range}
      company={job.company_name}
    />
  );
};

export default CareerCardParent;
