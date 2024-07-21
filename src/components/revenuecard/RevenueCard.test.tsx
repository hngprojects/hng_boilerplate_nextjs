/* eslint-disable vitest/prefer-expect-assertions */
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import RevenueCard from "./RevenueCard";

describe("revenueCard", () => {
  it("displays the revenue correctly formatted with currency symbol", () => {
    render(
      <RevenueCard
        title="Total Revenue"
        // eslint-disable-next-line unicorn/numeric-separators-style
        revenue={45000}
        performanceIndex="+20% from last month"
        currency="USD"
      />,
    );
    const revenueText = screen.getAllByText(/\$45,000.00/);
    expect(revenueText).toBeInTheDocument();
  });
});
