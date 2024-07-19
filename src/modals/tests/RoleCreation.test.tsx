import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import RoleCreation from "~/modals/RoleCreation";

describe("roleCreation", () => {
  it("renders the create role button", () => {
    expect.hasAssertions();
    render(<RoleCreation />);
    const createButton = screen.getByText("Create");
    expect(createButton).toBeInTheDocument();
  });

  it("opens the role creation modal when the create role button is clicked", () => {
    expect.hasAssertions();
    render(<RoleCreation />);
    const createButton = screen.getByText("Create");
    fireEvent.click(createButton);
    const modalTitle = screen.getByText("Create Role");
    expect(modalTitle).toBeInTheDocument();
  });

  it("validates input fields", () => {
    expect.hasAssertions();
    render(<RoleCreation />);
    const createButton = screen.getByText("Create");
    fireEvent.click(createButton);
    const submitButton = screen.getByText("Create Role");
    fireEvent.click(submitButton);
    const roleNameError = screen.getByText("Role name is required");
    const descriptionError = screen.getByText("Description is required");
    expect(roleNameError).toBeInTheDocument();
    expect(descriptionError).toBeInTheDocument();
  });

  it("closes the role creation modal and opens the success modal on successful submission", () => {
    expect.hasAssertions();
    render(<RoleCreation />);
    const createButton = screen.getByText("Create");
    fireEvent.click(createButton);

    const roleNameInput = screen.getByPlaceholderText("e.g: IT Staff");
    const descriptionTextarea = screen.getByPlaceholderText("describe role");
    fireEvent.change(roleNameInput, { target: { value: "New Role" } });
    fireEvent.change(descriptionTextarea, {
      target: { value: "Role description" },
    });

    const submitButton = screen.getByText("Create Role");
    fireEvent.click(submitButton);

    const successMessage = screen.getByText("Role created successfully!");
    expect(successMessage).toBeInTheDocument();
  });
});
