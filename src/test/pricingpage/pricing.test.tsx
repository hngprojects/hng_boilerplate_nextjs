import { screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Pricing from "~/app/(landing-routes)/(home)/pricing/page";
import { renderWithIntl } from "../utils";

//

describe("pricing Component", () => {
  it("renders the pricing header", () => {
    expect.assertions(1);
    renderWithIntl(<Pricing />);
    const pricingHeader = screen.getByTestId("pricing-header");
    expect(pricingHeader).toBeInTheDocument();
  });

  it("renders FAQ section", () => {
    expect.assertions(1);
    renderWithIntl(<Pricing />);
    const faqSection = screen.getByTestId("faq-section");
    expect(faqSection).toBeInTheDocument();
  });
});
