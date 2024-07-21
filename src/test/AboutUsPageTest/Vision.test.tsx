import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import "@testing-library/jest-dom";

import Vision from "~/app/AboutUs/Vision";

// test Vision component
describe("vision component", () => {
  it("renders the heading", () => {
    expect.assertions(1);
    render(<Vision />);
    const heading = screen.getByTestId(/vision/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the subheading", () => {
    expect.assertions(1);
    render(<Vision />);
    const subheading = screen.getByText(
      /leading the way, redefining industries/i,
    );
    expect(subheading).toBeInTheDocument();
  });

  it("renders the vision description", () => {
    expect.assertions(1);
    render(<Vision />);
    const description = screen.getByText(
      /at hng boilerplate, our vision is to revolutionize the industry landscape/i,
    );
    expect(description).toBeInTheDocument();
  });

  it("renders the vision image", () => {
    expect.assertions(1);
    render(<Vision />);
    const visionImage = screen.getByAltText(/mission/i);
    expect(visionImage).toBeInTheDocument();
  });

  it("renders the mask images", () => {
    expect.assertions(3);
    render(<Vision />);
    const maskImages = screen.getAllByAltText(/mask/i);
    expect(maskImages).toHaveLength(2);
    for (const mask of maskImages) {
      expect(mask).toBeInTheDocument();
    }
  });
});
