// __tests__/TopProductLists.test.tsx
import { render, screen } from "@testing-library/react";

import TopProductLists from "../components/TopProductLists";

import "@testing-library/jest-dom";

vi.mock("next/image", () => ({
  __esModule: true,
  default: (properties: any) => <img {...properties} />, // Mock next/image as standard img
}));

describe("topProductLists", () => {
  it("renders TopProductLists component with header", () => {
    render(<TopProductLists />);
    expect(screen.getByTestId("top-products-title")).toHaveTextContent(
      "Top Products",
    );
    expect(screen.getByTestId("top-products-description")).toHaveTextContent(
      "Your top selling products appear here.",
    );
  });

  it("renders View All button", () => {
    render(<TopProductLists />);
    const button = screen.getByTestId("view-all-button");
    expect(button).toBeInTheDocument();
    expect(button.closest("button")).toHaveClass("bg-[#F97316]");
  });

  it("renders product list items", () => {
    render(<TopProductLists />);
    expect(screen.getByText("The Lemonade blender")).toBeInTheDocument();
    expect(screen.getByText("500 sales")).toBeInTheDocument();
    expect(screen.getByText("Bean Cake Powder")).toBeInTheDocument();
    expect(screen.getByText("250 sales")).toBeInTheDocument();
  });

  it("renders product images", () => {
    render(<TopProductLists />);
    const lemonadeImage = screen.getByTestId("product-image-1");
    const beanCakeImage = screen.getByTestId("product-image-2");
    expect(lemonadeImage).toHaveAttribute("alt", "The Lemonade blender");
    expect(beanCakeImage).toHaveAttribute("alt", "Bean Cake Powder");
  });
});
