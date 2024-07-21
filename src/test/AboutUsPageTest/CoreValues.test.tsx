import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import "@testing-library/jest-dom";

import CoreValues from "~/app/AboutUs/CoreValues";

// Core Values
describe("coreValues component", () => {
  it("renders the main heading", () => {
    expect.assertions(1);
    render(<CoreValues />);
    const mainHeading = screen.getByRole("heading", {
      name: /our core values/i,
    });
    expect(mainHeading).toBeInTheDocument();
  });

  it("renders the main description", () => {
    expect.assertions(1);
    render(<CoreValues />);
    const description = screen.getByText(
      /our value shapes the core of our organization, and defines the character of our industry/i,
    );
    expect(description).toBeInTheDocument();
  });

  describe("renders the Integrity section", () => {
    it("renders the heading", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const heading = screen.getByRole("heading", { name: /integrity/i });
      expect(heading).toBeInTheDocument();
    });

    it("renders the description", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const description = screen.getByText(
        /we uphold the highest ethical standards in everything we do/i,
      );
      expect(description).toBeInTheDocument();
    });
  });

  describe("renders the Customer Centricity section", () => {
    it("renders the heading", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const heading = screen.getByRole("heading", {
        name: /customer centricity/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it("renders the description", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const description = screen.getByText(
        /our customers are at the heart of our business/i,
      );
      expect(description).toBeInTheDocument();
    });
  });

  describe("renders the Innovation section", () => {
    it("renders the heading", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const heading = screen.getByRole("heading", { name: /innovation/i });
      expect(heading).toBeInTheDocument();
    });

    it("renders the description", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const description = screen.getByText(
        /we embrace a culture of continuous improvement and creativity/i,
      );
      expect(description).toBeInTheDocument();
    });
  });

  describe("renders the Excellence section", () => {
    it("renders the heading", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const heading = screen.getByRole("heading", { name: /excellence/i });
      expect(heading).toBeInTheDocument();
    });

    it("renders the description", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const description = screen.getByText(
        /we are committed to delivering exceptional quality in everything we do/i,
      );
      expect(description).toBeInTheDocument();
    });
  });
});
