import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import TermsConditions from "~/app/(landing-routes)/terms-and-conditions/page";

//

describe("termsConditions Component", () => {
  it("renders the SubPageHero with correct heading and description", () => {
    expect.assertions(3);
    render(<TermsConditions />);
    const subpageHero = screen.getByTestId("subpage-hero");
    expect(subpageHero).toBeInTheDocument();
    expect(subpageHero).toHaveTextContent("Terms and Conditions");
    expect(subpageHero).toHaveTextContent("Achieve your dreams with us today");
  });

  it("renders the Main component", () => {
    expect.assertions(1);
    render(<TermsConditions />);
    const mainContent = screen.getByTestId("main-content");
    expect(mainContent).toBeInTheDocument();
  });
});
