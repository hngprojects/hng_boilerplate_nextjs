import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import PricingPage from "./page";

describe("pricingpage", () => {
  it("should render the current plan section", () => {
    expect.hasAssertions();
    render(<PricingPage />);
    const currentPlanHeading = screen.getByText(/current plan/i);
    expect(currentPlanHeading).toBeInTheDocument();

    const freePlanTitle = screen.getByText("Free");
    expect(freePlanTitle).toBeInTheDocument();

    const freePlanDescription = screen.getByText(
      /your account is on a free 90-day trial/i,
    );
    expect(freePlanDescription).toBeInTheDocument();

    const freePlanPrice = screen.getByText("$0/month");
    expect(freePlanPrice).toBeInTheDocument();
  });

  it("should render all subscription plans", () => {
    expect.hasAssertions();
    render(<PricingPage />);
    const plans = ["Free", "Basic", "Advanced", "Premium"];

    for (const plan of plans) {
      const planTitle = screen.getByText(plan);
      expect(planTitle).toBeInTheDocument();
    }
  });

  it("should render the highlights section", () => {
    expect.hasAssertions();
    render(<PricingPage />);
    const highlightsHeading = screen.getByText("Highlights");
    expect(highlightsHeading).toBeInTheDocument();

    const highlightsItems = [
      "10 Projects",
      "Up to 10 subscribers",
      "Advanced analytics",
      "100 projects",
      "Up to 50 subscribers",
      "24-hour support",
      "200 projects",
      "Up to 100 subscribers",
      "Marketing advisor",
      "300 Projects",
      "Up to 500 subscribers",
    ];

    for (const item of highlightsItems) {
      const highlightItem = screen.getByText(item);
      expect(highlightItem).toBeInTheDocument();
    }
  });

  it("should render the compare all features section", () => {
    expect.hasAssertions();
    render(<PricingPage />);
    const compareFeaturesText = screen.getByText(/compare all features/i);
    expect(compareFeaturesText).toBeInTheDocument();
  });
});
