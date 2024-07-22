import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import { data, gradients } from "../../components/adminDashboard/productData";
import TopProductsComponent from "../../components/adminDashboard/TopProductsComponent";

describe("topProductsComponent", () => {
  it("renders the list of products with correct data", () => {
    expect.hasAssertions();
    render(<TopProductsComponent data={data} gradients={gradients} />);
    const nameElements = screen.getAllByTestId(/^product-name-/);
    expect(nameElements).toHaveLength(data.length);
    const amountElements = screen.getAllByTestId(/^product-amount-/);
    expect(amountElements).toHaveLength(data.length);

    for (const [index, { name, amount }] of data.entries()) {
      expect(nameElements[index]).toHaveTextContent(name);
      expect(amountElements[index]).toHaveTextContent(amount);
    }
  });

  it("renders the component with title and description", () => {
    expect.hasAssertions();
    render(<TopProductsComponent data={data} gradients={gradients} />);
    expect(screen.getByText("Top Products")).toBeInTheDocument();
    expect(
      screen.getByText("Your top selling products appear here."),
    ).toBeInTheDocument();
  });

  it("applies the correct gradient background to each product item", () => {
    expect.hasAssertions();
    render(<TopProductsComponent data={data} gradients={gradients} />);

    const productItems = screen.getAllByRole("listitem");

    for (const [index] of data.entries()) {
      const productItem = productItems[index];
      const expectedGradient = gradients[index % gradients.length];

      expect(productItem).toHaveStyle(`background: ${expectedGradient}`);
    }
  });

  it('renders the "View All" button', () => {
    expect.hasAssertions();
    render(<TopProductsComponent data={data} gradients={gradients} />);
    expect(screen.getByText("View All")).toBeInTheDocument();
  });
});
