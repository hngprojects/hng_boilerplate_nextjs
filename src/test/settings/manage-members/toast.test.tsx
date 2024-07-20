import { act, fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { CustomToast } from "~/components/common/customToast/toast";
import * as useToastModule from "~/components/ui/use-toast";

vi.mock("~/components/ui/use-toast", () => ({
  useToast: vi.fn(),
}));

describe("CustomToast", () => {
  const mockToast = vi.fn();
  const mockDispatch = vi.fn();

  let mockToasts: any[] = [];

  console.log(mockDispatch);

  vi.useFakeTimers();
  beforeEach(() => {
    vi.clearAllMocks();
    mockToasts = [];
    (useToastModule.useToast as ReturnType<typeof vi.fn>).mockReturnValue({
      toast: mockToast,
    });

    (global as any).dispatch = mockDispatch;
  });

  it("shows toast when button is clicked", () => {
    console.log(mockToast);

    render(<CustomToast description="Test description" />);

    const button = screen.getByTestId("invite-members-btn");

    fireEvent.click(button);

    expect(mockToast).toHaveBeenCalledWith({
      description: "Test description",
      role: "alert",
      className: expect.stringContaining("custom-toast-invite"),
      action: expect.any(Object),
    });
  });

  it("closes toast when close button is clicked", () => {
    const mockDismiss = vi.fn();
    (useToastModule.useToast as ReturnType<typeof vi.fn>).mockReturnValue({
      toast: mockToast,
      dismiss: mockDismiss,
    });

    render(<CustomToast description="Test description" />);
    const showToastButton = screen.getByTestId("invite-members-btn");
    fireEvent.click(showToastButton);

    expect(mockToast).toHaveBeenCalled();

    const toastCallArg = mockToast.mock.calls[0][0];
    const CloseButton = toastCallArg.action;

    render(<>{CloseButton}</>);

    const closeButton = screen.getByTestId("close-alert-btn");
    fireEvent.click(closeButton);

    expect(mockDismiss).toHaveBeenCalled();
  });

  it("automatically dismisses toast after 10 seconds", async () => {
    const TOAST_REMOVE_DELAY = 1500;
    render(<CustomToast description="Test description" />);
    const showToastButton = screen.getByTestId("invite-members-btn");
    act(() => {
      fireEvent.click(showToastButton);
    });

    expect(mockToast).toHaveBeenCalled();

    const toastCall = mockToast.mock.calls[0][0];
    const toastId = "mock-toast-id";

    mockToasts.push({ id: toastId, ...toastCall });

    act(() => {
      const timeout = setTimeout(() => {
        mockDispatch({
          type: "REMOVE_TOAST",
          toastId: toastId,
        });
      }, TOAST_REMOVE_DELAY);
    });

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

  afterAll(() => {
    vi.useRealTimers();
  });
});
