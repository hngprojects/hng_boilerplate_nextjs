import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import SubPageHero from "./SubPageHero";

describe("<SubPageHero />", () => {
  it("renders default heading and description", () => {
    expect.hasAssertions();
    render(<SubPageHero />);
    const heading = screen.getByText("Build Your Product Faster");
    const description = screen.getByText("Get Your Free Boilerplate Samples!");

    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("renders custom heading and description", () => {
    expect.hasAssertions();
    const customHeading = "Custom Heading";
    const customDescription = "Custom Description";
    render(
      <SubPageHero heading={customHeading} description={customDescription} />,
    );
    const heading = screen.getByText(customHeading);
    const description = screen.getByText(customDescription);

    expect(heading).toHaveTextContent(customHeading);
    expect(description).toBeInTheDocument();
  });
});
