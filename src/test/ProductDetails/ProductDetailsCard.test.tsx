import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";

import ProductDetailsCard from "../../components/common/ProductDetailsCard/ProductDetailsCard";

describe("productDetailsCard", () => {
  const defaultProps = {
    productName: "Test Product",
    productImageSrc: "/test-image.jpg",
    productID: "T123",
    category: "Category Test",
    dateAdded: "2024-01-01, 12:00:00",
    stock: "20pcs",
    price: "$100.00",
    description: "This is a test product description.",
    onClose: vi.fn(),
    onEdit: vi.fn(),
    onDelete: vi.fn(),
  };

  it("renders product details correctly", () => {
    expect.hasAssertions();
    render(<ProductDetailsCard {...defaultProps} />);

    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByText("Test Product")).not.toBeNull();
    const productImage = screen.queryByAltText("Product Test Product Image");
    expect(productImage).not.toBeNull();
    // eslint-disable-next-line vitest/no-conditional-in-test
    if (productImage) {
      // eslint-disable-next-line vitest/no-conditional-expect
      expect(productImage.getAttribute("src")).toContain("test-image.jpg");
    }
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByText("Product ID")).not.toBeNull();
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByText("T123")).not.toBeNull();
    // eslint-disable-next-line vitest/max-expects, testing-library/prefer-presence-queries
    expect(screen.queryByText("Category Test")).not.toBeNull();
    // eslint-disable-next-line vitest/max-expects, testing-library/prefer-presence-queries
    expect(screen.queryByText("2024-01-01, 12:00:00")).not.toBeNull();
    // eslint-disable-next-line vitest/max-expects, testing-library/prefer-presence-queries
    expect(screen.queryByText("20pcs")).not.toBeNull();
    // eslint-disable-next-line vitest/max-expects, testing-library/prefer-presence-queries
    expect(screen.queryByText("$100.00")).not.toBeNull();
    // eslint-disable-next-line vitest/max-expects
    expect(
      // eslint-disable-next-line testing-library/prefer-presence-queries
      screen.queryByText("This is a test product description."),
    ).not.toBeNull();
  });

  it("displays an error message when product details are missing", () => {
    expect.hasAssertions();
    render(
      <ProductDetailsCard
        productName=""
        productImageSrc=""
        productID=""
        category=""
        dateAdded=""
        stock=""
        price=""
        description=""
        onClose={vi.fn()}
        onEdit={vi.fn()}
        onDelete={vi.fn()}
      />,
    );

    expect(
      screen.queryByText(
        "Some product details are missing. Please provide complete product information.",
      ),
    ).not.toBeNull();
  });

  it("calls onClose when close button is clicked", () => {
    expect.hasAssertions();
    render(<ProductDetailsCard {...defaultProps} />);

    fireEvent.click(screen.getByAltText("Close Icon"));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("calls onEdit with productID when Edit button is clicked", () => {
    expect.hasAssertions();
    render(<ProductDetailsCard {...defaultProps} />);

    fireEvent.click(screen.getByText("Edit"));
    expect(defaultProps.onEdit).toHaveBeenCalledWith("T123");
  });

  it("calls onDelete with productID when Delete button is clicked", () => {
    expect.hasAssertions();
    render(<ProductDetailsCard {...defaultProps} />);

    fireEvent.click(screen.getByText("Delete"));
    expect(defaultProps.onDelete).toHaveBeenCalledWith("T123");
  });

  it("loads and displays the product image with correct alt text", () => {
    expect.hasAssertions();
    render(<ProductDetailsCard {...defaultProps} />);

    const image = screen.getByAltText("Product Test Product Image");
    expect(image).not.toBeNull();
    // eslint-disable-next-line vitest/no-conditional-in-test
    if (image) {
      // eslint-disable-next-line vitest/no-conditional-expect
      expect(image.getAttribute("src")).toContain("test-image.jpg");
    }
  });
});
