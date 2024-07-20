import { act, fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { CustomToast } from "~/components/common/customToast/toast";
import * as useToastModule from "~/components/ui/use-toast";

vi.mock("~/components/ui/use-toast", () => ({
  useToast: vi.fn(),
}));

describe("customToast", () => {
  const mockToast = vi.fn();
  const mockDispatch = vi.fn();

  interface Toast {
    id: string;
    description: string;
    role: string;
    className: string;
    action: React.ReactNode;
  }

  let mockToasts: Toast[] = [];

  vi.useFakeTimers();

  const setup = () => {
    vi.clearAllMocks();
    mockToasts = [];
    (useToastModule.useToast as ReturnType<typeof vi.fn>).mockReturnValue({
      toast: mockToast,
    });

    (global as unknown as { dispatch: typeof mockDispatch }).dispatch =
      mockDispatch;
  };

  it("shows toast when button is clicked", () => {
    expect.assertions(1);
    setup();

    render(<CustomToast description="1 Invite successfully sent" />);

    const button = screen.getByTestId("invite-members-btn");

    fireEvent.click(button);

    expect(mockToast).toHaveBeenCalledWith({
      description: "1 Invite successfully sent",
      role: "alert",
      className: expect.stringContaining("custom-toast-invite"),
      action: expect.any(Object),
    });
  });

  it("closes toast when close button is clicked", () => {
    expect.assertions(2);
    setup();

    const mockDismiss = vi.fn();
    (useToastModule.useToast as ReturnType<typeof vi.fn>).mockReturnValue({
      toast: mockToast,
      dismiss: mockDismiss,
    });

    render(<CustomToast description="Test description" />);
    const showToastButton = screen.getByTestId("invite-members-btn");
    fireEvent.click(showToastButton);

    expect(mockToast).toHaveBeenCalledWith({
      description: "Test description",
      role: "alert",
      className: expect.stringContaining("custom-toast-invite"),
      action: expect.any(Object),
    });

    const toastCallArgument = mockToast.mock.calls[0][0];
    const CloseButton = toastCallArgument.action;

    render(<>{CloseButton}</>);

    const closeButton = screen.getByTestId("close-alert-btn");
    fireEvent.click(closeButton);

    expect(mockDismiss).toHaveBeenCalledWith();
  });

  it("automatically dismisses toast after 10 seconds", () => {
    expect.assertions(3);
    setup();

    const TOAST_REMOVE_DELAY = 5000;

    render(<CustomToast description="Test description" />);
    const showToastButton = screen.getByTestId("invite-members-btn");

    fireEvent.click(showToastButton);

    expect(mockToast).toHaveBeenCalledWith({
      description: "Test description",
      role: "alert",
      className: expect.stringContaining("custom-toast-invite"),
      action: expect.any(Object),
    });

    const toastCall = mockToast.mock.calls[0][0];
    const toastId = "mock-toast-id";

    mockToasts.push({ id: toastId, ...toastCall });

    setTimeout(() => {
      mockDispatch({
        type: "REMOVE_TOAST",
        toastId: toastId,
      });
    }, TOAST_REMOVE_DELAY);

    act(() => {
      vi.advanceTimersByTime(TOAST_REMOVE_DELAY - 1);
    });

    expect(mockDispatch).not.toHaveBeenCalled();

    act(() => {
      vi.advanceTimersByTime(1);
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "REMOVE_TOAST",
      toastId: toastId,
    });
  });
});

vi.useRealTimers();
