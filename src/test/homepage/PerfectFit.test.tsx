import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import PerfectFit from "~/components/layouts/homepage/PerfectFit";

describe("perfectFit Component", () => {
  it("renders the heading", () => {
    expect.assertions(1);

    render(<PerfectFit />);
    const heading = screen.getByRole("heading", {
      name: /find the perfect fit/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the paragraph", () => {
    expect.assertions(1);

    render(<PerfectFit />);
    const paragraph = screen.getByText(
      /choose the boilerplate plan that best suits your project needs and budget. all plans include access to our comprehensive library of pre-built sections, drag-and-drop customization./i,
    );
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the See Our Pricing Plan button", () => {
    expect.assertions(1);

    render(<PerfectFit />);
    const button = screen.getByRole("button", {
      name: /see our pricing plan/i,
    });
    expect(button).toBeInTheDocument();
  });

  it("applies the correct text color to the paragraph", () => {
    expect.assertions(1);

    render(<PerfectFit />);
    const paragraph = screen.getByText(
      /choose the boilerplate plan that best suits your project needs and budget. all plans include access to our comprehensive library of pre-built sections, drag-and-drop customization./i,
    );
    expect(paragraph).toHaveClass("text-[#525252]");
  });
});
