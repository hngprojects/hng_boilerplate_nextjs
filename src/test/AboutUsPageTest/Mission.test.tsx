import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Mission from "~/app/AboutUs/Mission";

// Test Mission Section

describe("mission component", () => {
  it("renders the main mission heading and subheading for mobile view", () => {
    expect.assertions(2);
    render(<Mission />);
    const missionHeading = screen.getByTestId(/mission mobile/i);
    const subheading = screen.getByTestId(/subheading mobile/i);
    expect(missionHeading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();
  });

  it("renders the mission description for mobile view", () => {
    expect.assertions(1);
    render(<Mission />);
    const description = screen.getByTestId(/description mobile/i);
    expect(description).toBeInTheDocument();
  });

  it("renders the mission image and mask images", () => {
    expect.assertions(4);
    render(<Mission />);
    const missionImage = screen.getByAltText("mission");
    const maskImages = screen.getAllByAltText("mask");
    expect(missionImage).toBeInTheDocument();
    expect(maskImages).toHaveLength(2); // There should be two mask images
    for (const image of maskImages) expect(image).toBeInTheDocument();
  });

  it("renders the main mission heading and subheading for desktop view", () => {
    expect.assertions(2);
    render(<Mission />);
    const missionHeadingDesktop = screen.getAllByText(/our mission/i);
    const subheadingDesktop = screen.getAllByText(
      /we are committed to giving you the best/i,
    );
    expect(missionHeadingDesktop.length).toBeGreaterThan(0);
    expect(subheadingDesktop.length).toBeGreaterThan(0);
  });

  it("renders the mission description for desktop view", () => {
    expect.assertions(1);
    render(<Mission />);
    const descriptionDesktop = screen.getAllByText(
      /at hng boilerplate, we are dedicated to exceeding your expectations. we strive to understand your unique needs and challenges, providing tailored solutions that drive real results and empower your success./i,
    );
    expect(descriptionDesktop.length).toBeGreaterThan(0);
  });
});
