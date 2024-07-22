import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import ProductFilter from "~/components/common/ProductFilter";

describe("productFilter Component", () => {
  it("renders correctly", () => {
    expect.assertions(5);

    render(<ProductFilter />);

    const heading = screen.getByRole("heading", { name: /products/i });
    const subheading = screen.getByText(
      /manage your products and view their sales performance\./i,
    );

    expect(heading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();

    const filterButton = screen.getByRole("button", { name: /filter/i });
    const addProductButton = screen.getByRole("button", {
      name: /add product/i,
    });

    expect(filterButton).toBeInTheDocument();
    expect(addProductButton).toBeInTheDocument();

    // Check if the images are rendered
    const filterImage = screen.getByAltText("Filter icon");
    const addImage = screen.getByAltText("Add icon");

    expect(filterImage).toBeInTheDocument();
    expect(addImage).toBeInTheDocument();
  });

  it("renders the Filter button correctly", () => {
    expect.hasAssertions();

    render(<ProductFilter />);
    const filterButton = screen.getByRole("button", { name: /filter/i });
    expect(filterButton).toBeInTheDocument();
    expect(filterButton).toHaveClass("bg-[#FFF]");
  });

  it("renders the Add Product button correctly", () => {
    expect.hasAssertions();

    render(<ProductFilter />);
    const addProductButton = screen.getByRole("button", {
      name: /add product/i,
    });
    expect(addProductButton).toBeInTheDocument();
    expect(addProductButton).toHaveClass("bg-[#F97316]");
  });
});
