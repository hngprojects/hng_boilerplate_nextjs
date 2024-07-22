import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";

import ProductFilter from "~/components/common/ProductFilter";

describe("productFilter component", () => {
  it("renders the component with correct elements", () => {
    expect.assertions(6);

    render(<ProductFilter />);

    const title = screen.getByRole("heading", { level: 2 });
    const description = screen.getByText(
      "Manage your products and view their sales performance.",
    );
    const filterButton = screen.getByRole("button", { name: "Filter" });
    const addProductButton = screen.getByRole("button", {
      name: "Add Product",
    });

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(filterButton).toBeInTheDocument();
    expect(addProductButton).toBeInTheDocument();
    expect(screen.getByAltText("filter icon")).toBeInTheDocument();
    expect(screen.getByAltText("add icon")).toBeInTheDocument();
  });
});
