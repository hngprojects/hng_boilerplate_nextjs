
import { render, screen } from '@testing-library/react';
import React from "react";
import JobDetailsSnapshot from "../components/Dynamic-pages/joblisting";  

const job = {
  applicationDeadline: "July 19th 2024",
  workMode: "On-site",
  jobType: "internship",
  experienceLevel: "2-3 years",
  salaryRange: "$500,000 - $900,000",
  benefits: [
    "Competitive Salary and benefits",
    "Flexible working hours and remote work options",
    "Opportunities for personal growth and development",
    "A collaborative and inclusive work environment",
  ],
  applicationInstructions: "Send your CV and cover letter to hng1232@gmail.com.",
};

test('renders job details', () => {
  expect.assertions(10); 

  render(<JobDetailsSnapshot job={job} />);


  expect(screen.getByText(/Application Deadline:/)).toBeInTheDocument();
  expect(screen.getByText(/July 19th 2024/)).toBeInTheDocument();
  expect(screen.getByText(/Work Mode:/)).toBeInTheDocument();
  expect(screen.getByText(/On-site/)).toBeInTheDocument();
  expect(screen.getByText(/Job Type:/)).toBeInTheDocument();
  expect(screen.getByText(/internship/)).toBeInTheDocument();
  expect(screen.getByText(/Experience Level:/)).toBeInTheDocument();
  expect(screen.getByText(/2-3 years/)).toBeInTheDocument();
  expect(screen.getByText(/Salary Range:/)).toBeInTheDocument();
  expect(screen.getByText(/\$500,000 - \$900,000/)).toBeInTheDocument();
});