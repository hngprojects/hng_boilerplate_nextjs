import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import PriceCard from "./Payment";

describe("priceCard Component", () => {
  it("should render PriceCard correctly", () => {
    render(<PriceCard />);
    expect(screen.getByText("Current Plan")).toBeInTheDocument();
  });

  it("should handle button click correctly", async () => {
    const mockUpgradePlan = vi.fn();
    render(<PriceCard />);

    const upgradeButton = screen.getByText("Upgrade");
    fireEvent.click(upgradeButton);

    expect(mockUpgradePlan).toHaveBeenCalledWith();
  });
});
