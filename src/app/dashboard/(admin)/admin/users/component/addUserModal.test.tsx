import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AddUserModal from "./userModal";

describe("addProductModal", () => {
  it("renders the modal with correct title and description", async () => {
    expect.hasAssertions();
    render(
      <AddUserModal>
        <button>Open Modal</button>
      </AddUserModal>,
    );

    // Check if the trigger button is rendered
    expect(screen.getByText("Open Modal")).toBeInTheDocument();

    // Open the modal
    fireEvent.click(screen.getByText("Open Modal"));

    // Check if the modal title and description are rendered
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
      <AddUserModal>
        <button>Open Modal</button>
      </AddUserModal>,
    );

    // Open the modal
    fireEvent.click(screen.getByText("Open Modal"));

    // Check if form fields are rendered
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
      <AddUserModal>
        <button>Open Modal</button>
      </AddUserModal>,
    );

    // Open the modal
    fireEvent.click(screen.getByText("Open Modal"));

    // Check if the submit button is rendered
    await expect(
      screen.findByRole("button", { name: "Add Product" }),
    ).resolves.toBeInTheDocument();
  });
});
