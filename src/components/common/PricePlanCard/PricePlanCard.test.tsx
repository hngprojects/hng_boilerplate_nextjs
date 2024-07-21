import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { vi } from "vitest";

import PricePlanCard from "./PricePlanCard";

// Mock the child components
vi.mock("~/components/common/Button/button", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <button>{children}</button>
  ),
}));

vi.mock("./PricePlanBenefit", () => ({
  __esModule: true,
  default: ({
    list,
  }: {
    list: { benefitTitle: string; isAddedBenefit: boolean };
  }) => <div>{list.benefitTitle}</div>,
}));

describe("pricePlanCard", () => {
  const defaultBenefits = [
    { benefitTitle: "2 Projects", isAddedBenefit: true },
    { benefitTitle: "Up to 100 subscribers", isAddedBenefit: true },
    { benefitTitle: "Basic analytics", isAddedBenefit: true },
    { benefitTitle: "24-hour support response time", isAddedBenefit: true },
    { benefitTitle: "Marketing advisor", isAddedBenefit: false },
    { benefitTitle: "Custom integration", isAddedBenefit: false },
  ];

  it("renders the PricePlanCard component with default props", () => {
    expect.assertions(11); // We have 11 assertions in this test

    render(
      <PricePlanCard
        type="Pro"
        price="$50"
        isActive={true}
        lists={defaultBenefits}
      />,
    );

    // Check for the type
    expect(screen.getByText("Pro")).toBeInTheDocument();

    // Check for the price
    expect(screen.getByText("$50")).toBeInTheDocument();
    expect(screen.getByText("/month")).toBeInTheDocument();

    // Check for the description
    expect(
      screen.getByText(
        "The essensitals to provide your best work for clients.",
      ),
    ).toBeInTheDocument();

    // Check for the benefits
    for (const benefit of defaultBenefits) {
      expect(screen.getByText(benefit.benefitTitle)).toBeInTheDocument();
    }

    // Check for the button
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });

  it("renders the PricePlanCard component with different props", () => {
    expect.assertions(11); // We have 11 assertions in this test

    const newBenefits = [
      { benefitTitle: "10 Projects", isAddedBenefit: true },
      { benefitTitle: "Up to 1000 subscribers", isAddedBenefit: true },
      { benefitTitle: "Advanced analytics", isAddedBenefit: true },
      { benefitTitle: "12-hour support response time", isAddedBenefit: true },
      { benefitTitle: "Personalized marketing advisor", isAddedBenefit: true },
      { benefitTitle: "Custom API integration", isAddedBenefit: true },
    ];

    render(
      <PricePlanCard
        type="Enterprise"
        price="$200"
        isActive={false}
        lists={newBenefits}
      />,
    );

    // Check for the type
    expect(screen.getByText("Enterprise")).toBeInTheDocument();

    // Check for the price
    expect(screen.getByText("$200")).toBeInTheDocument();
    expect(screen.getByText("/month")).toBeInTheDocument();

    // Check for the description
    expect(
      screen.getByText(
        "The essensitals to provide your best work for clients.",
      ),
    ).toBeInTheDocument();

    // Check for the benefits
    for (const benefit of newBenefits) {
      expect(screen.getByText(benefit.benefitTitle)).toBeInTheDocument();
    }

    // Check for the button
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });

  it("applies the correct border class based on isActive prop", () => {
    expect.assertions(2); // We have 2 assertions in this test

    const { container: activeContainer } = render(
      <PricePlanCard
        type="Pro"
        price="$50"
        isActive={true}
        lists={defaultBenefits}
      />,
    );
    expect(activeContainer.firstChild).toHaveClass("border-primary");

    const { container: inactiveContainer } = render(
      <PricePlanCard
        type="Pro"
        price="$50"
        isActive={false}
        lists={defaultBenefits}
      />,
    );
    expect(inactiveContainer.firstChild).toHaveClass("border-border");
  });
});
