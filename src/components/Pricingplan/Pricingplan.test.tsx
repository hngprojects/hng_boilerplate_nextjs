import { render, screen } from "@testing-library/react";

import Pricingplan from "./Pricingplan";

const checkPricingPlan = (
  period: string,
  plan: string,
  expectedPlanText: string,
  expectedPriceText: string,
) => {
  render(<Pricingplan period={period} plan={plan} />);

  expect(screen.getByText(expectedPlanText)).toBeInTheDocument();
  expect(screen.getByText(expectedPriceText)).toBeInTheDocument();
  expect(screen.getByRole("list")).toBeInTheDocument();
};

describe("rendering correct component", () => {
  it("renders monthly basic plan correctly", () => {
    expect.hasAssertions();
    checkPricingPlan("monthly", "Basic", "Basic", "$800");
  });

  it("renders monthly premium plan correctly", () => {
    expect.hasAssertions();
    checkPricingPlan("monthly", "Premium", "Premium", "$3,000");
  });

  it("renders annually basic plan correctly", () => {
    expect.hasAssertions();
    checkPricingPlan("annually", "Basic", "Basic", "$500");
  });

  it("renders annually premium plan correctly", () => {
    expect.hasAssertions();
    checkPricingPlan("annually", "Premium", "Premium", "$2,000");
  });
});
