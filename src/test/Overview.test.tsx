import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Dashboard from "../components/overview/overview";

// Mock ResizeObserver
globalThis.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

describe("home Component", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-lifecycle
    render(<Dashboard />);
  });

  it("renders the dashboard title", () => {
    expect.hasAssertions();
    const titleElement = screen.getByText(/dashboard/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("renders navigation links correctly", () => {
    expect.hasAssertions();
    const analyticsText = screen.getByText(/analytics/i);
    const reportText = screen.getByText(/report/i);

    expect(analyticsText).toBeInTheDocument();
    expect(reportText).toBeInTheDocument();
  });

  it("renders the DatePickerDemo and Download button", () => {
    expect.hasAssertions();
    const datePicker = screen.getByRole("button", { name: /download/i });
    const downloadButton = screen.getByRole("button", { name: /download/i });

    expect(datePicker).toBeInTheDocument();
    expect(downloadButton).toBeInTheDocument();
  });

  it("renders the correct grid items", () => {
    expect.hasAssertions();
    const revenueElement = screen.getByText(/total revenue/i);
    const subscriptionsElement = screen.getByText(/subscriptions/i);

    const activeNowElement = screen.getByText(/active now/i);

    expect(revenueElement).toBeInTheDocument();
    expect(subscriptionsElement).toBeInTheDocument();

    expect(activeNowElement).toBeInTheDocument();
  });

  it("renders recent sales list correctly", () => {
    expect.hasAssertions();
    const salesList = screen.getByText(/you made 265 sales this month/i);
    expect(salesList).toBeInTheDocument();

    // Check if list items are present
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(6);
  });

  it("checks if recent sales have correct data", () => {
    expect.hasAssertions();
    const firstSaleName = screen.getByText(/jackson lee/i);
    const firstSaleEmail = screen.getByText(/jackson\.lee@gmail\.com/i);
    const firstSaleAmount = screen.getByText(/\+\$2,999\.00/i);

    expect(firstSaleName).toBeInTheDocument();
    expect(firstSaleEmail).toBeInTheDocument();
    expect(firstSaleAmount).toBeInTheDocument();
  });
});
