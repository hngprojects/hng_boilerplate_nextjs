import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import HowItWorks from "~/components/layouts/homepage/HowItWorks";

describe("howItWorks Component", () => {
  it("renders the heading", () => {
    expect.assertions(2);

    render(<HowItWorks />);
    const heading = screen.getByRole("heading", {
      name: /how it works: experience the benefits of using our product with every step./i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the description paragraph", () => {
    expect.assertions(2);

    render(<HowItWorks />);
    const paragraph = screen.getByText(
      /we designed our product to simplify your life. it offers a comprehensive solution. here's how it works and how it benefits you at each stage./i,
    );
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the Pre-Built Sections component", () => {
    expect.assertions(2);

    render(<HowItWorks />);
    const preBuilt = screen.getByTestId("prebuilt");
    expect(preBuilt).toBeInTheDocument();
    const preBuiltDescription = screen.getByTestId("section");
    expect(preBuiltDescription).toBeInTheDocument();
  });

  it("renders the Scalable Foundation component", () => {
    expect.assertions(2);

    render(<HowItWorks />);
    const scalable = screen.getByTestId("scalable");
    expect(scalable).toBeInTheDocument();
    const scalableDescription = screen.getByTestId("boilerplate");
    expect(scalableDescription).toBeInTheDocument();
  });

  it("renders the Easy Customization component", () => {
    expect.assertions(2);

    render(<HowItWorks />);
    const easyCustomization = screen.getByTestId("easy");
    expect(easyCustomization).toBeInTheDocument();
    const easyCustomizationDescription = screen.getByTestId("tailor");
    expect(easyCustomizationDescription).toBeInTheDocument();
  });
});
