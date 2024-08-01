import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import AddUserModal from "./userModal";

describe("addUserModal", () => {
  // it("renders the modal with correct title and description", async () => {
  //   expect.hasAssertions();
  //   render(
  //     <AddUserModal>
  //       <button>Open Modal</button>
  //     </AddUserModal>,
  //   );

  //   // Check if the trigger button is rendered
  //   expect(screen.getByText("Open Modal")).toBeInTheDocument();

  //   // Open the modal
  //   fireEvent.click(screen.getByText("Open Modal"));

  //   // Check if the modal title and description are rendered
  //   await expect(
  //     screen.findByText("Add new user"),
  //   ).resolves.toBeInTheDocument();
  //   await expect(
  //     screen.findByText("Create a new user"),
  //   ).resolves.toBeInTheDocument();
  // });

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
    await expect(screen.findByLabelText("Name")).resolves.toBeInTheDocument();
    await expect(screen.findByLabelText("Email")).resolves.toBeInTheDocument();
    await expect(
      screen.findByLabelText("Phone number"),
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
      screen.findByRole("button", { name: "Add new user" }),
    ).resolves.toBeInTheDocument();
  });
});
