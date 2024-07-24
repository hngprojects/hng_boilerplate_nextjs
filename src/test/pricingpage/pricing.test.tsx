import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Pricing from "~/app/(landing-routes)/pricing/page";

//

describe("pricing Component", () => {
  it("renders the pricing header", () => {
    expect.assertions(1);
    render(<Pricing />);
    const pricingHeader = screen.getByTestId("pricing-header");
    expect(pricingHeader).toBeInTheDocument();
  });

  it("toggles between monthly and annual plans", () => {
    expect.assertions(2);
    render(<Pricing />);
    const monthlyToggle = screen.getByTestId("monthly-toggle");
    const annualToggle = screen.getByTestId("annual-toggle");

    fireEvent.click(annualToggle);
    const annualCard = screen.getByTestId("basic-card-annual");
    expect(annualCard).toBeInTheDocument();

    fireEvent.click(monthlyToggle);
    const monthlyCard = screen.getByTestId("basic-card-monthly");
    expect(monthlyCard).toBeInTheDocument();
  });

  it("renders FAQ section", () => {
    expect.assertions(1);
    render(<Pricing />);
    const faqSection = screen.getByTestId("faq-section");
    expect(faqSection).toBeInTheDocument();
  });
});
