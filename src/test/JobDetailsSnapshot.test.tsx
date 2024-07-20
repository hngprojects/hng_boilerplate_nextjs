import { render, screen } from "@testing-library/react";

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
  applicationInstructions:
    "Send your CV and cover letter to hng1232@gmail.com.",
};

describe("jobDetailsSnapshot", () => {
  it("renders job details correctly", () => {
    expect.assertions(5);

    render(<JobDetailsSnapshot job={job} />);

    expect(screen.getByText("About the Job")).toBeInTheDocument();
    expect(screen.getByText(/Application Deadline:/)).toBeInTheDocument();
    expect(screen.getByText(/Work Mode:/)).toBeInTheDocument();
    expect(screen.getByText(/Job Type:/)).toBeInTheDocument();
    expect(screen.getByText(/Experience Level:/)).toBeInTheDocument();
  });

  it("renders benefits correctly", () => {
    expect.assertions(1); // Ensure that 1 assertion is made

    render(<JobDetailsSnapshot job={job} />);

    expect(screen.getByText("What We Offer")).toBeInTheDocument();
  });

  it("renders application instructions correctly", () => {
    expect.assertions(1); // Ensure that 1 assertion is made

    render(<JobDetailsSnapshot job={job} />);

    expect(screen.getByText("How to Apply")).toBeInTheDocument();
  });
});
