// __tests__/ProductList.test.tsx
import { render, screen } from "@testing-library/react";

import ProductList from "../components/ProductList";

import "@testing-library/jest-dom";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (properties: any) => <img {...properties} />, // Mock next/image as standard img
}));

describe("productList", () => {
  const productProperties = {
    id: 1,
    name: "Test Product",
    image: "/test-image.png",
    total: 100,
  };

  it("renders ProductList component with props", () => {
    render(<ProductList {...productProperties} />);
    expect(screen.getByTestId("product-name")).toHaveTextContent(
      "Test Product",
    );
    expect(screen.getByTestId("product-total")).toHaveTextContent("100 sales");
  });

  it("renders product image with correct alt text", () => {
    render(<ProductList {...productProperties} />);
    const image = screen.getByTestId("product-image-1");
    expect(image).toHaveAttribute("alt", "Test Product");
  });
});
