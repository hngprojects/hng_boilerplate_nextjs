import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import DeleteDialog from "./delete-dialog";

describe("deleteDialog", () => {
  it("renders the dialog with correct content", () => {
    expect.hasAssertions();
    const onClose = vi.fn();
    const onDelete = vi.fn();
    render(
      <DeleteDialog onDelete={onDelete} isDeleting={true} onClose={onClose} />,
    );

    expect(screen.getByText("Are you absolutely sure?")).toBeInTheDocument();
    expect(
      screen.getByText(
        "This action cannot be undone. This will permanently delete this product from the database.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /delete/i })).toBeInTheDocument();
  });

  it("calls onClose when Cancel button is clicked", () => {
    expect.hasAssertions();
    const onClose = vi.fn();
    const onDelete = vi.fn();
    render(
      <DeleteDialog onDelete={onDelete} isDeleting={true} onClose={onClose} />,
    );

    fireEvent.click(screen.getByRole("button", { name: /cancel/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onDelete when Delete button is clicked", () => {
    expect.hasAssertions();
    const onClose = vi.fn();
    const onDelete = vi.fn();
    render(
      <DeleteDialog onDelete={onDelete} isDeleting={true} onClose={onClose} />,
    );

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
