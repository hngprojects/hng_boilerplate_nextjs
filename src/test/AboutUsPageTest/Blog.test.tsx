import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import "@testing-library/jest-dom";

import Blog from "~/app/AboutUs/Blog";

// Test blog component
describe("blog component", () => {
  it("renders the Blog component with heading content", () => {
    expect.hasAssertions();
    render(<Blog />);
    // Check for all headings
    expect(screen.getByText("10 years")).toBeInTheDocument();
    expect(screen.getByText("75,000+")).toBeInTheDocument();
    expect(screen.getByText("100k+")).toBeInTheDocument();
    expect(screen.getByText("1.2m+")).toBeInTheDocument();
  });
});

describe("blog component", () => {
  it("renders the Blog component with description content", () => {
    expect.assertions(4);
    render(<Blog />);
    // Check for all descriptions
    expect(screen.getByText("In Business")).toBeInTheDocument();
    expect(screen.getByText("Customers")).toBeInTheDocument();
    expect(screen.getByText("Monthly Blog Readers")).toBeInTheDocument();
    expect(screen.getByText("Social Follower")).toBeInTheDocument();
  });
});
