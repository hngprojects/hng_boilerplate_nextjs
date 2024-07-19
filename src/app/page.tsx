import React from "react";

import JobDetailsSnapshot from "./components/joblisting";

const job = {
  applicationDeadline: "July 19th 2024",
  workMode: "On-site",
  jobType: "internship",
  experienceLevel: "2-3 years",
  salaryRange: "$500,000 - $900,000",
  benefits: [
    "Competitive Salary and benefits",
    "Flexible working hours and remote work options",
    "Opportunities for personal growth and development ",
    "A collaborative and inclusive work environment",
  ],
  applicationInstructions:
    "Send your CV and cover letter to hng1232@gmail.com .",
};

const Page: React.FC = () => {
  return (
    <div className="container mx-auto p-4 flex items-center min-h-screen">
      <JobDetailsSnapshot job={job} />
    </div>
  );
};

export default Page;
