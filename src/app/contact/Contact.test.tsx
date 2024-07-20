import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Contact from "./page";

// Mocking window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: undefined,
    addListener: vi.fn(), // Deprecated
    removeListener: vi.fn(), // Deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe("contact", () => {
  it("renders correctly", () => {
    expect.assertions(3); // Declare the number of assertions expected
    render(<Contact />);
    expect(screen.getByText(/contact our team/i)).toBeInTheDocument();
    expect(
      screen.getByText(/let's build your product together/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/achieve your dreams with us today/i),
    ).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    expect.assertions(1); // Declare the number of assertions expected
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});
