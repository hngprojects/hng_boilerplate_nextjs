import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import ConfirmCancelModal from "~/components/modals/ConfirmCancelModal";

describe("confirmCancelModal", () => {
  it("renders correctly when open", () => {
    expect.hasAssertions();
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
    expect.hasAssertions();

    const onCloseMock = vi.fn();
    render(
      <ConfirmCancelModal
        isOpen={true}
        onClose={onCloseMock}
        onCancel={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByText("Keep Subscription"));
    expect(onCloseMock).toHaveBeenCalledWith(expect.anything());
  });

  it("calls onCancel when Cancel Subscription button is clicked", () => {
    expect.hasAssertions();

    const onCancelMock = vi.fn();
    render(
      <ConfirmCancelModal
        isOpen={true}
        onClose={vi.fn()}
        onCancel={onCancelMock}
      />,
    );

    fireEvent.click(screen.getByText("Cancel Subscription"));
    expect(onCancelMock).toHaveBeenCalledWith(expect.anything());
  });

  it("does not render when isOpen is false", () => {
    expect.hasAssertions();

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
