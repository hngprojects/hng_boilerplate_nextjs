import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AddProductModal from "./add-product-modal";

describe("addProductModal", () => {
  it("renders the modal with correct title and description", async () => {
    expect.hasAssertions();
    render(
      <AddProductModal>
        <button>Open Modal</button>
      </AddProductModal>,
    );

    expect(screen.getByText("Open Modal")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Open Modal"));

    await expect(
      screen.findByText("Add new product"),
    ).resolves.toBeInTheDocument();
    await expect(
      screen.findByText("Create a new product"),
    ).resolves.toBeInTheDocument();
  });

  it("renders form fields", async () => {
    expect.hasAssertions();
    render(
      <AddProductModal>
        <button>Open Modal</button>
      </AddProductModal>,
    );

    fireEvent.click(screen.getByText("Open Modal"));

    await expect(
      screen.findByLabelText("Product name"),
    ).resolves.toBeInTheDocument();
    await expect(
      screen.findByLabelText("Product Description"),
    ).resolves.toBeInTheDocument();
    await expect(screen.findByLabelText("Price")).resolves.toBeInTheDocument();
    await expect(
      screen.findByLabelText("Quantity"),
    ).resolves.toBeInTheDocument();
    await expect(
      screen.findByText("Upload Images"),
    ).resolves.toBeInTheDocument();
  });

  it("renders submit button", async () => {
    expect.hasAssertions();
    render(
      <AddProductModal>
        <button>Open Modal</button>
      </AddProductModal>,
    );

    fireEvent.click(screen.getByText("Open Modal"));

    await expect(
      screen.findByRole("button", { name: "Add Product" }),
    ).resolves.toBeInTheDocument();
  });
});
