import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import PriceCard from "./Payment";

describe("priceCard Component", () => {
  it("should render PriceCard correctly", () => {
    render(<PriceCard />);
    // Check for text content, elements, etc.
    expect(screen.getByText("Current Plan")).toBeInTheDocument();
  });

  it("should handle button click correctly", async () => {
    const mockUpgradePlan = vi.fn();
    render(<PriceCard />);

    // Find and click the button
    const upgradeButton = screen.getByText("Upgrade");
    fireEvent.click(upgradeButton);

    // Check if the function was called
    expect(mockUpgradePlan).toHaveBeenCalledWith();
  });

  // Additional tests
});
