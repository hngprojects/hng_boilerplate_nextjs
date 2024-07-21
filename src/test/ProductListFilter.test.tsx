import { fireEvent, render, screen } from "~/test/utils";

import "@testing-library/jest-dom";

import { vi } from "vitest";

import ProductListFilter, {
  FilterType,
} from "~/components/common/dashboard-product-filter/ProductListFilter";

describe("productListFilter Component", () => {
  const initialFilters: FilterType[] = [
    { label: "In Stock", queryParameter: "in-stock", isActive: true },
    { label: "Low on Stock", queryParameter: "low-on-stock", isActive: false },
    { label: "Out of Stock", queryParameter: "out-of-stock", isActive: false },
  ];

  it("renders filter button", () => {
    expect.assertions(1);
    const handleFilterActiveStateMock = vi.fn();

    render(
      <ProductListFilter
        filters={initialFilters}
        handleFilterActiveState={handleFilterActiveStateMock}
      />,
    );

    const filterButton = screen.getByRole("button", { name: /filter/i });
    expect(filterButton).toBeInTheDocument();
  });

  it("renders all filter options", () => {
    expect.assertions(3);
    const handleFilterActiveStateMock = vi.fn();

    render(
      <ProductListFilter
        filters={initialFilters}
        handleFilterActiveState={handleFilterActiveStateMock}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /filter/i }));

    for (const filter of initialFilters) {
      expect(screen.getByText(filter.label)).toBeInTheDocument();
    }
  });

  it("calls handleFilterActiveState when filter option is clicked", () => {
    expect.assertions(1);
    const handleFilterActiveStateMock = vi.fn();

    render(
      <ProductListFilter
        filters={initialFilters}
        handleFilterActiveState={handleFilterActiveStateMock}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /filter/i }));
    fireEvent.click(screen.getByText("Low on Stock"));

    expect(handleFilterActiveStateMock).toHaveBeenCalledWith("Low on Stock");
  });

  it("shows check icon for active filter", () => {
    expect.assertions(1);
    const handleFilterActiveStateMock = vi.fn();

    render(
      <ProductListFilter
        filters={initialFilters}
        handleFilterActiveState={handleFilterActiveStateMock}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /filter/i }));

    const activeFilter = initialFilters.find((filter) => filter.isActive);
    const activeFilterElement = screen.getByTestId(
      `filter-${activeFilter!.label}`,
    );
    const checkIcon = screen.getByTestId("check-icon");
    expect(activeFilterElement).toContainElement(checkIcon);
  });

  it("updates active filter correctly", () => {
    expect.assertions(2);
    const handleFilterActiveStateMock = vi.fn();

    const { rerender } = render(
      <ProductListFilter
        filters={initialFilters}
        handleFilterActiveState={handleFilterActiveStateMock}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /filter/i }));
    fireEvent.click(screen.getByText("Low on Stock"));

    const updatedFilters = initialFilters.map((filter) =>
      filter.label === "Low on Stock"
        ? { ...filter, isActive: true }
        : { ...filter, isActive: false },
    );

    rerender(
      <ProductListFilter
        filters={updatedFilters}
        handleFilterActiveState={handleFilterActiveStateMock}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /filter/i }));

    const lowOnStockFilterElement = screen.getByTestId("filter-Low on Stock");
    expect(lowOnStockFilterElement).toContainElement(
      screen.getByTestId("check-icon"),
    );

    const inStockFilterElement = screen.getByTestId("filter-In Stock");
    expect(inStockFilterElement).not.toContainElement(
      screen.queryByTestId("check-icon"),
    );
  });

  it("opens and navigates dropdown with keyboard", () => {
    expect.assertions(4);
    const handleFilterActiveStateMock = vi.fn();

    render(
      <ProductListFilter
        filters={initialFilters}
        handleFilterActiveState={handleFilterActiveStateMock}
      />,
    );

    const filterButton = screen.getByRole("button", { name: /filter/i });
    fireEvent.click(filterButton, { name: /filter/i });

    fireEvent.keyDown(filterButton, { key: "ArrowDown" });

    const firstMenuItem = screen.getByTestId("filter-In Stock");
    expect(firstMenuItem).toHaveFocus();

    fireEvent.keyDown(firstMenuItem, { key: "ArrowDown" });
    const secondMenuItem = screen.getByTestId("filter-Low on Stock");
    expect(secondMenuItem).toHaveFocus();

    fireEvent.keyDown(secondMenuItem, { key: "ArrowUp" });
    expect(firstMenuItem).toHaveFocus();

    fireEvent.keyDown(secondMenuItem, { key: "Enter" });
    expect(handleFilterActiveStateMock).toHaveBeenCalledWith("Low on Stock");
  });

  it("closes the dropdown and focuses the button when Escape is pressed", () => {
    expect.assertions(3);
    const handleFilterActiveStateMock = vi.fn();

    render(
      <ProductListFilter
        filters={initialFilters}
        handleFilterActiveState={handleFilterActiveStateMock}
      />,
    );

    const filterButton = screen.getByRole("button", { name: /filter/i });
    fireEvent.click(filterButton);

    expect(screen.queryByTestId("filter-dropdown")).toBeVisible();

    fireEvent.keyDown(filterButton, { key: "Escape" });

    expect(screen.queryByTestId("filter-dropdown")).toBeNull();

    expect(filterButton).toHaveFocus();
  });

  it("opens the dropdown when ArrowDown is pressed", () => {
    expect.assertions(2);
    const handleFilterActiveStateMock = vi.fn();

    render(
      <ProductListFilter
        filters={initialFilters}
        handleFilterActiveState={handleFilterActiveStateMock}
      />,
    );

    const filterButton = screen.getByRole("button", { name: /filter/i });

    expect(screen.queryByTestId("filter-dropdown")).toBeNull();

    fireEvent.keyDown(filterButton, { key: "ArrowDown" });

    expect(screen.getByTestId("filter-dropdown")).toBeVisible();
  });

  it("returns focus to button when ArrowUp is pressed on first item", () => {
    expect.assertions(3);
    const handleFilterActiveStateMock = vi.fn();

    render(
      <ProductListFilter
        filters={initialFilters}
        handleFilterActiveState={handleFilterActiveStateMock}
      />,
    );

    const filterButton = screen.getByRole("button", { name: /filter/i });
    fireEvent.click(filterButton);

    expect(screen.getByTestId("filter-dropdown")).toBeVisible();

    const firstMenuItem = screen.getByTestId("filter-In Stock");
    firstMenuItem.focus();
    expect(firstMenuItem).toHaveFocus();

    fireEvent.keyDown(firstMenuItem, { key: "ArrowUp" });

    expect(filterButton).toHaveFocus();
  });

  it("closes the dropdown and focuses the button when Escape is pressed", () => {
    expect.assertions(4);
    const handleFilterActiveStateMock = vi.fn();

    render(
      <ProductListFilter
        filters={initialFilters}
        handleFilterActiveState={handleFilterActiveStateMock}
      />,
    );

    const filterButton = screen.getByRole("button", { name: /filter/i });
    fireEvent.click(filterButton);

    expect(screen.getByTestId("filter-dropdown")).toBeVisible();

    const firstMenuItem = screen.getByTestId("filter-In Stock");
    firstMenuItem.focus();
    expect(firstMenuItem).toHaveFocus();

    fireEvent.keyDown(firstMenuItem, { key: "Escape" });

    expect(screen.queryByTestId("filter-dropdown")).not.toBeInTheDocument();

    expect(filterButton).toHaveFocus();
  });
});
