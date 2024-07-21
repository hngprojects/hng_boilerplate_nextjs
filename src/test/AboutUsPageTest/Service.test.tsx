import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import "@testing-library/jest-dom";

import OurServices from "~/app/AboutUs/OurServices";

// Test Service Section
describe("service component", () => {
  it("renders the Our Services heading", () => {
    expect.assertions(1);
    render(<OurServices />);
    const heading = screen.getByText(/our services/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the subheading", () => {
    expect.assertions(1);
    render(<OurServices />);
    const subheading = screen.getByText(/trained to give you the best/i);
    expect(subheading).toBeInTheDocument();
  });

  it("renders the contact button", () => {
    expect.assertions(1);
    render(<OurServices />);
    const button = screen.getByText(/contact us/i);
    expect(button).toBeInTheDocument();
  });

  it("renders the description text", () => {
    expect.assertions(1);
    render(<OurServices />);
    const description = screen.getByText(/since our founding in/i);
    expect(description).toBeInTheDocument();
  });
});
