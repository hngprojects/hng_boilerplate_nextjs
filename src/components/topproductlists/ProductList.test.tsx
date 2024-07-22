import { render, screen } from "../../test/utils";
import ProductList, { ProductListProperties } from "./ProductList";

describe("productList", () => {
  const productProperties: ProductListProperties = {
    id: 1,
    name: "Test Product",
    image: "/test-image.png",
    total: 100,
  };

  it("renders ProductList component with props", () => {
    expect.assertions(2);
    render(<ProductList {...productProperties} />);
    expect(screen.getByTestId("product-name")).toHaveTextContent(
      "Test Product",
    );
    expect(screen.getByTestId("product-total")).toHaveTextContent("100 sales");
  });

  it("renders product image with correct alt text", () => {
    expect.assertions(1);
    render(<ProductList {...productProperties} />);
    const image = screen.getByTestId("product-image-1");
    expect(image).toHaveAttribute("alt", "Test Product");
  });
});
