import React from "react";

interface Job {
  applicationDeadline: string;
  workMode: string;
  jobType: string;
  experienceLevel: string;
  salaryRange: string;
  benefits: string[];
  applicationInstructions: string;
}

interface JobDetailsSnapshotProperties {
  job: Job;
}

const JobDetailsSnapshot: React.FC<JobDetailsSnapshotProperties> = ({
  job,
}) => {
  return (
    <div className="flex flex-col p-4 w-[282px] h-[864px] gap-6 opacity-100">
      <div className="about-job border border-gray-300 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4 font-inter text-[20px] font-semibold leading-[24.2px]">
          About the Job
        </h2>
        <p className="mb-2 text-[16px]">
          Application Deadline: <br /> {job.applicationDeadline}
        </p>
        <p className="mb-2 text-[16px]">
          Work Mode: <br /> {job.workMode}
        </p>
        <p className="mb-2 text-[16px]">
          Job Type: <br /> {job.jobType}
        </p>
        <p className="mb-2 text-[16px]">
          Experience Level: <br /> {job.experienceLevel}
        </p>
        <p className="mb-2 text-[16px] ">
          Salary Range: <br /> {job.salaryRange}
        </p>
      </div>
      <div className="what-we-offer border border-gray-300 p-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4 font-inter text-[20px] font-semibold leading-[24.2px]">
          What We Offer
        </h2>
        <ul className="list-disc ml-5">
          {job.benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className="how-to-apply border border-gray-300 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4 font-inter text-[18px] font-semibold leading-[24.2px]">
          How to Apply
        </h2>
        <p>{job.applicationInstructions}</p>
      </div>
    </div>
  );
};

export default JobDetailsSnapshot;
