import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import "@testing-library/jest-dom";

import Hero from "~/app/AboutUs/Hero";

describe("hero component", () => {
  it("renders the heading", () => {
    expect.assertions(1);
    render(<Hero />);
    const heading = screen.getByText(/about us/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the subheading", () => {
    expect.assertions(1);
    render(<Hero />);
    const subheading = screen.getByText(/more than just a boilerplate/i);
    expect(subheading).toBeInTheDocument();
  });

  it("renders the description", () => {
    expect.assertions(1);
    render(<Hero />);
    const description = screen.getByText(/welcome to hng boilerplate/i);
    expect(description).toBeInTheDocument();
  });

  it("renders the hero image", () => {
    expect.assertions(1);
    render(<Hero />);
    const heroImage = screen.getByAltText(/hero_image/i);
    expect(heroImage).toBeInTheDocument();
  });

  it("renders the dot images", () => {
    expect.assertions(1);
    render(<Hero />);
    const dotImages = screen.getAllByAltText(/dot/i);
    expect(dotImages).toHaveLength(4);
  });
});
