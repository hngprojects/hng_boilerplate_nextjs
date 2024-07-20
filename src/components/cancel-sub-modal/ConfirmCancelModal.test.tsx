import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ConfirmCancelModal from "./ConfirmCancelModal";

describe("ConfirmCancelModal", () => {
  it("renders correctly when open", () => {
    render(
      <ConfirmCancelModal isOpen={true} onClose={vi.fn()} onCancel={vi.fn()} />,
    );

    expect(screen.getByText("We are sorry to see you go!")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Are you sure you want to delete Jolly organization? All of your data will be permanently removed. This action cannot be undone.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Keep Subscription")).toBeInTheDocument();
    expect(screen.getByText("Cancel Subscription")).toBeInTheDocument();
  });

  it("calls onClose when Keep Subscription button is clicked", () => {
    const onCloseMock = vi.fn();
    render(
      <ConfirmCancelModal
        isOpen={true}
        onClose={onCloseMock}
        onCancel={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByText("Keep Subscription"));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it("calls onCancel when Cancel Subscription button is clicked", () => {
    const onCancelMock = vi.fn();
    render(
      <ConfirmCancelModal
        isOpen={true}
        onClose={vi.fn()}
        onCancel={onCancelMock}
      />,
    );

    fireEvent.click(screen.getByText("Cancel Subscription"));
    expect(onCancelMock).toHaveBeenCalled();
  });

  it("does not render when isOpen is false", () => {
    render(
      <ConfirmCancelModal
        isOpen={false}
        onClose={vi.fn()}
        onCancel={vi.fn()}
      />,
    );

    expect(
      screen.queryByText("We are sorry to see you go!"),
    ).not.toBeInTheDocument();
  });
});
