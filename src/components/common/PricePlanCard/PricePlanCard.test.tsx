// components/PricePlanCard.test.tsx
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
  it("renders the PricePlanCard component with correct props", () => {
    expect.assertions(11); // We have 11 assertions in this test

    render(<PricePlanCard type="Pro" price="$50" isActive={true} />);

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
    expect(screen.getByText("2 Projects")).toBeInTheDocument();
    expect(screen.getByText("Up to 100 subscribers")).toBeInTheDocument();
    expect(screen.getByText("Basic analytics")).toBeInTheDocument();
    expect(
      screen.getByText("24-hour support response time"),
    ).toBeInTheDocument();
    expect(screen.getByText("Marketing advisor")).toBeInTheDocument();
    expect(screen.getByText("Custom integration")).toBeInTheDocument();

    // Check for the button
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });

  it("applies the correct border class based on isActive prop", () => {
    expect.assertions(2); // We have 2 assertions in this test

    const { container: activeContainer } = render(
      <PricePlanCard type="Pro" price="$50" isActive={true} />,
    );
    expect(activeContainer.firstChild).toHaveClass("border-primary");

    const { container: inactiveContainer } = render(
      <PricePlanCard type="Pro" price="$50" isActive={false} />,
    );
    expect(inactiveContainer.firstChild).toHaveClass("border-border");
  });
});
