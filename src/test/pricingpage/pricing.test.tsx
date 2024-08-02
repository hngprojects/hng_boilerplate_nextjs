import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Pricing from "~/app/(landing-routes)/(home)/pricing/page";

//

describe("pricing Component", () => {
  it("renders the pricing header", () => {
    expect.assertions(1);
    render(<Pricing />);
    const pricingHeader = screen.getByTestId("pricing-header");
    expect(pricingHeader).toBeInTheDocument();
  });

  it("renders FAQ section", () => {
    expect.assertions(1);
    render(<Pricing />);
    const faqSection = screen.getByTestId("faq-section");
    expect(faqSection).toBeInTheDocument();
  });
});
