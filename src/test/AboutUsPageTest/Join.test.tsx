import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Join from "~/app/AboutUs/Join";

describe("join Component", () => {
  it("renders the heading correctly", () => {
    expect.hasAssertions();
    render(<Join />);
    const heading = screen.getByText(/join our team/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Join Our Team");
  });

  it("renders the description correctly", () => {
    expect.hasAssertions();
    render(<Join />);
    const description = screen.getByText(/interested in joining out team\?/i);
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent(
      "Interested in joining out team? View our Job Listing page for openings and apply with an equal chance of working with us!",
    );
  });

  it("renders the button with correct text and class", () => {
    expect.hasAssertions();
    render(<Join />);
    const button = screen.getByText(/join us/i);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
  });
});
