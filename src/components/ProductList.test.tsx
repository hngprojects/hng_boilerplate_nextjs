import ProductList, { ProductListProperties } from "../components/ProductList";
import { render, screen } from "../test/utils";

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
  ),
}));

describe("productList", () => {
  const productProperties: ProductListProperties = {
    id: 1,
    name: "Test Product",
    image: "/test-image.png",
    total: 100,
  };

  it("renders ProductList component with props", () => {
    expect.hasAssertions();
    render(<ProductList {...productProperties} />);
    expect(screen.getByTestId("product-name")).toHaveTextContent(
      "Test Product",
    );
    expect(screen.getByTestId("product-total")).toHaveTextContent("100 sales");
  });

  it("renders product image with correct alt text", () => {
    expect.hasAssertions();
    render(<ProductList {...productProperties} />);
    const image = screen.getByTestId("product-image-1");
    expect(image).toHaveAttribute("alt", "Test Product");
  });
});
