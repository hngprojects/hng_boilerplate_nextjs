import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ProductFilter from "~/components/common/ProductFilter";

describe("productFilter component", () => {
  it("renders the heading and description correctly", () => {
    expect.assertions(2);

    render(<ProductFilter />);

    expect(
      screen.getByRole("heading", { name: /products/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /manage your products and view their sales performance\./i,
      ),
    ).toBeInTheDocument();
  });

  it("renders the Filter button with correct content", () => {
    expect.assertions(3);

    render(<ProductFilter />);

    const filterButton = screen.getByRole("button", { name: /filter/i });
    expect(filterButton).toBeInTheDocument();

    // Find the filter image
    const filterIcon = screen.getAllByRole("img").find((img) => {
      const imageElement = img as HTMLImageElement;
      return imageElement.src.includes("/images/filter.svg");
    });
    expect(filterIcon).toBeInTheDocument();

    expect(filterButton).toHaveTextContent("Filter");
  });

  it("renders the Add Product button with correct content", () => {
    expect.assertions(3);

    render(<ProductFilter />);

    const addButton = screen.getByRole("button", { name: /add product/i });
    expect(addButton).toBeInTheDocument();

    // Find the add image
    const addIcon = screen.getAllByRole("img").find((img) => {
      const imageElement = img as HTMLImageElement;
      return imageElement.src.includes("/images/add.svg");
    });
    expect(addIcon).toBeInTheDocument();

    expect(addButton).toHaveTextContent("Add Product");
  });
});
