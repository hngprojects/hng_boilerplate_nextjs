import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
<<<<<<< HEAD
import ConfirmCancelModal from "../../components/modals/ConfirmCancelModal";

describe("ConfirmCancelModal", () => {
  it("renders correctly when open", () => {
    render(
      <ConfirmCancelModal isOpen={true} onClose={vi.fn()} onCancel={vi.fn()} />
=======

import ConfirmCancelModal from "../../components/modals/ConfirmCancelModal";

describe("confirmCancelModal", () => {
  it("renders correctly when open", () => {
    render(
      <ConfirmCancelModal isOpen={true} onClose={vi.fn()} onCancel={vi.fn()} />,
>>>>>>> fc43eb249c7b63ad4a06ddddd52b23d1c4b15c2e
    );

    expect(screen.getByText("We are sorry to see you go!")).toBeInTheDocument();
    expect(
      screen.getByText(
<<<<<<< HEAD
        "Are you sure you want to delete Jolly organization? All of your data will be permanently removed. This action cannot be undone."
      )
=======
        "Are you sure you want to delete Jolly organization? All of your data will be permanently removed. This action cannot be undone.",
      ),
>>>>>>> fc43eb249c7b63ad4a06ddddd52b23d1c4b15c2e
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
<<<<<<< HEAD
      />
    );

    fireEvent.click(screen.getByText("Keep Subscription"));
    expect(onCloseMock).toHaveBeenCalled();
=======
      />,
    );

    fireEvent.click(screen.getByText("Keep Subscription"));
    expect(onCloseMock).toHaveBeenCalledWith();
>>>>>>> fc43eb249c7b63ad4a06ddddd52b23d1c4b15c2e
  });

  it("calls onCancel when Cancel Subscription button is clicked", () => {
    const onCancelMock = vi.fn();
    render(
      <ConfirmCancelModal
        isOpen={true}
        onClose={vi.fn()}
        onCancel={onCancelMock}
<<<<<<< HEAD
      />
    );

    fireEvent.click(screen.getByText("Cancel Subscription"));
    expect(onCancelMock).toHaveBeenCalled();
=======
      />,
    );

    fireEvent.click(screen.getByText("Cancel Subscription"));
    expect(onCancelMock).toHaveBeenCalledWith();
>>>>>>> fc43eb249c7b63ad4a06ddddd52b23d1c4b15c2e
  });

  it("does not render when isOpen is false", () => {
    render(
<<<<<<< HEAD
      <ConfirmCancelModal isOpen={false} onClose={vi.fn()} onCancel={vi.fn()} />
    );

    expect(
      screen.queryByText("We are sorry to see you go!")
=======
      <ConfirmCancelModal
        isOpen={false}
        onClose={vi.fn()}
        onCancel={vi.fn()}
      />,
    );

    expect(
      screen.queryByText("We are sorry to see you go!"),
>>>>>>> fc43eb249c7b63ad4a06ddddd52b23d1c4b15c2e
    ).not.toBeInTheDocument();
  });
});
