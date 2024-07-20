import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import HowItWorks from "~/components/layouts/homepage/HowItWorks";

describe("howItWorks Component", () => {
  it("renders the heading", () => {
    expect.assertions(1);

    render(<HowItWorks />);
    const heading = screen.getByRole("heading", {
      name: /how it works: experience the benefits of using our product with every step./i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the description paragraph", () => {
    expect.assertions(1);

    render(<HowItWorks />);
    const paragraph = screen.getByText(
      /we designed our product to simplify your life. it offers a comprehensive solution. here's how it works and how it benefits you at each stage./i,
    );
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the Pre-Built component", () => {
    expect.assertions(1);

    render(<HowItWorks />);
    const preBuilt = screen.getByTestId("prebuilt");
    expect(preBuilt).toBeInTheDocument();
  });

  it("renders the Sections component", () => {
    expect.assertions(1);

    render(<HowItWorks />);
    const preBuiltDescription = screen.getByTestId("section");
    expect(preBuiltDescription).toBeInTheDocument();
  });

  it("renders the Scalable component", () => {
    expect.assertions(1);

    render(<HowItWorks />);
    const scalable = screen.getByTestId("scalable");
    expect(scalable).toBeInTheDocument();
  });

  it("renders the Foundation component", () => {
    expect.assertions(1);

    render(<HowItWorks />);
    const scalableDescription = screen.getByTestId("boilerplate");
    expect(scalableDescription).toBeInTheDocument();
  });

  it("renders the Easy component", () => {
    expect.assertions(1);

    render(<HowItWorks />);
    const easyCustomization = screen.getByTestId("easy");
    expect(easyCustomization).toBeInTheDocument();
  });

  it("renders the Customization component", () => {
    expect.assertions(1);

    render(<HowItWorks />);
    const easyCustomizationDescription = screen.getByTestId("tailor");
    expect(easyCustomizationDescription).toBeInTheDocument();
  });
});
