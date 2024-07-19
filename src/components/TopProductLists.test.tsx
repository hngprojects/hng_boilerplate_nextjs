// __tests__/TopProductLists.test.tsx
import { render, screen } from "@testing-library/react";

import TopProductLists from "../components/TopProductLists";

import "@testing-library/jest-dom";

vi.mock("next/image", () => ({
  __esModule: true,
  default: ({
    src,
    alt,
    width,
    height,
    "data-testid": testId,
  }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    "data-testid": string;
  }) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      data-testid={testId}
    />
  ), // Mock next/image as standard img
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
    expect(button).toHaveTextContent("View All");
  });

  it("renders product list items", () => {
    render(<TopProductLists />);
    expect(screen.getByText("The Lemonade blender")).toBeInTheDocument();
    expect(screen.getByText("500 sales")).toBeInTheDocument();
    expect(screen.getByText("Bean Cake Powder")).toBeInTheDocument();
    expect(screen.getByText("250 sales")).toBeInTheDocument();
  });

  it("renders product images with correct alt text", () => {
    render(<TopProductLists />);
    const lemonadeImage = screen.getByTestId("product-image-1");
    const beanCakeImage = screen.getByTestId("product-image-2");
    expect(lemonadeImage).toHaveAttribute("alt", "The Lemonade blender");
    expect(beanCakeImage).toHaveAttribute("alt", "Bean Cake Powder");
  });
});
