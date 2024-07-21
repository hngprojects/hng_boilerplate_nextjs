import { fireEvent, render, screen } from "@testing-library/react";
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

    expect(screen.getByText("Test Product")).not.toBeNull();
    expect(screen.getByText("Product ID")).not.toBeNull();
    expect(screen.getByText("T123")).not.toBeNull();
  });

  it("renders product metadata correctly", () => {
    expect.hasAssertions();
    render(<ProductDetailsCard {...defaultProps} />);

    expect(screen.getByText("Category Test")).not.toBeNull();
    expect(screen.getByText("2024-01-01, 12:00:00")).not.toBeNull();
    expect(screen.getByText("20pcs")).not.toBeNull();
  });

  it("renders product price and description correctly", () => {
    expect.hasAssertions();
    render(<ProductDetailsCard {...defaultProps} />);

    expect(screen.getByText("$100.00")).not.toBeNull();
    expect(
      screen.getByText("This is a test product description."),
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
      screen.getByText(
        "Some product details are missing. Please provide complete product information.",
      ),
    ).not.toBeNull();
  });

  it("calls onClose when close button is clicked", () => {
    expect.hasAssertions();
    render(<ProductDetailsCard {...defaultProps} />);

    fireEvent.click(screen.getByRole("button", { name: "close" }));
    expect(defaultProps.onClose).toHaveBeenCalledWith();
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
    expect(image.getAttribute("src")).toContain("test-image.jpg");
  });
});
