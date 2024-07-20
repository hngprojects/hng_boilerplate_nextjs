import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import DeleteModal from "../components/modals/DeleteModal";

describe("deleteModal", () => {
  it("should display the modal correctly when visible", () => {
    expect.assertions(2);

    render(<DeleteModal />);

    const modalContainer = screen.getByTestId("modal-container");
    const modalContent = screen.getByTestId("modal-content");

    expect(modalContainer).toBeVisible();
    expect(modalContent).toBeVisible();
  });

  it("should be responsive across all screens", () => {
    expect.assertions(5);

    render(<DeleteModal />);

    const modalContent = screen.getByTestId("modal-content");

    expect(modalContent).toHaveClass("max-w-[1440px]");
    expect(modalContent).toHaveClass("lg:left-[40%]");
    expect(modalContent).toHaveClass("top-[300px]");
    expect(modalContent).toHaveClass("w-[95%]");
    expect(modalContent).toHaveClass("left-[50%]");
  });

  it("should close the modal when clicking outside of the modal content", () => {
    expect.assertions(1);

    render(<DeleteModal />);

    const modalContainer = screen.getByTestId("modal-container");
    fireEvent.click(modalContainer);

    const modalContent = screen.queryByTestId("modal-content");
    expect(modalContent).not.toBeInTheDocument();
  });

  it("should properly align heading, message, and buttons", () => {
    expect.assertions(3);

    render(<DeleteModal />);

    const modalHeading = screen.getByTestId("modal-heading");
    const modalMessage = screen.getByTestId("modal-message");
    const modalButtons = screen.getByTestId("modal-buttons");

    expect(modalHeading).toBeInTheDocument();
    expect(modalMessage).toBeInTheDocument();
    expect(modalButtons).toBeInTheDocument();
  });

  it("should close the modal when clicking the Cancel button", () => {
    expect.assertions(1);

    render(<DeleteModal />);

    const cancelButton = screen.getByTestId("cancel-button");
    fireEvent.click(cancelButton);

    const modalContent = screen.queryByTestId("modal-content");
    expect(modalContent).not.toBeInTheDocument();
  });

  it("should close the modal when clicking the Delete button", () => {
    expect.assertions(1);

    render(<DeleteModal />);

    const deleteButton = screen.getByTestId("delete-button");
    fireEvent.click(deleteButton);

    const modalContent = screen.queryByTestId("modal-content");
    expect(modalContent).not.toBeInTheDocument();
  });

  it("should correctly apply overlay opacity", () => {
    expect.assertions(1);

    render(<DeleteModal />);

    const modalContainer = screen.getByTestId("modal-container");

    expect(modalContainer).toHaveClass("bg-opacity-[25%]");
  });
});
