import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { products } from "../../data/mock.products";
import ProductTable from "./product-table";

describe("productTable", () => {
  it("renders the table with product data and interacts correctly", () => {
    expect.hasAssertions();
    render(<ProductTable />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Total Sold")).toBeInTheDocument();
    expect(screen.getByText("Created at")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();

    for (const product of products) {
      expect(screen.getByText(product.name)).toBeInTheDocument();
      expect(screen.getByText(product.price)).toBeInTheDocument();
      expect(screen.getByText(product.totalSold)).toBeInTheDocument();
      expect(screen.getByText(product.createdAt)).toBeInTheDocument();
    }

    const actionButtons = screen.getAllByRole("button", { name: "" });
    fireEvent.click(actionButtons[0]);

    fireEvent.click(document.body);

    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();

    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);
  });
});
