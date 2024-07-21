import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import NotificationSavedModal from "~/components/modals/NotificationSettingSavedModal";

describe("notificationSavedModal Component", () => {
  it("renders modal when show is true", () => {
    expect.assertions(2);
    render(<NotificationSavedModal show={true} onClose={() => {}} />);
    expect(screen.getByText(/notification updated!/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /notification preferences updated successfully. remember, you can always adjust these settings later./i,
      ),
    ).toBeInTheDocument();
  });

  it("does not render modal when show is false", () => {
    expect.assertions(2);
    render(<NotificationSavedModal show={false} onClose={() => {}} />);
    expect(
      screen.queryByText(/notification updated!/i),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(
        /notification preferences updated successfully. remember, you can always adjust these settings later./i,
      ),
    ).not.toBeInTheDocument();
  });

  it("calls onClose when Done button is clicked", () => {
    expect.assertions(1);
    const onClose = vi.fn();
    render(<NotificationSavedModal show={true} onClose={onClose} />);
    fireEvent.click(screen.getByText(/done/i));
    expect(onClose).toHaveBeenCalledOnce();
  });
});
