import { fireEvent, render, screen } from "@testing-library/react";
import { Session } from "next-auth";

import { ReplyForm } from "~/components/common/comment-component/comment-reply";

describe("comment reply component", () => {
  const mockSession: Session = {
    user: {
      id: "12345",
      name: "Current User",
      first_name: "Current",
      last_name: "User",
      email: "user@example.com",
      image: "path/to/image",
      role: "user",
    },
    access_token: "some-token",
    expires: "1",
  };
  it("should render without crashing", () => {
    expect.assertions(3);
    render(<ReplyForm session={mockSession} onSubmit={vi.fn()} />);
    /* eslint-disable testing-library/prefer-presence-queries */
    expect(
      screen.queryByTestId("reply-avatar") ||
        screen.queryByTestId("avatar-fallback"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Write your reply..."),
    ).toBeInTheDocument();
    expect(screen.getByText("Reply")).toBeInTheDocument();
  });

  it("should call onSubmit with content when form is submitted", () => {
    expect.assertions(3);
    const mockOnSubmit = vi.fn();
    render(<ReplyForm session={mockSession} onSubmit={mockOnSubmit} />);

    const textarea = screen.getByPlaceholderText("Write your reply...");
    const submitButton = screen.getByText("Reply");

    fireEvent.change(textarea, { target: { value: "Test reply" } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith("Test reply");
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(textarea).toHaveValue("");
  });

  it("should display error message when submitting empty reply", () => {
    expect.assertions(1);
    render(<ReplyForm session={mockSession} onSubmit={vi.fn()} />);

    const submitButton = screen.getByText("Reply");
    fireEvent.click(submitButton);

    expect(
      screen.getByText("Please enter a reply before submitting."),
    ).toBeInTheDocument();
  });

  it("should clear error message when user starts typing after an error", () => {
    expect.assertions(2);
    render(<ReplyForm session={mockSession} onSubmit={vi.fn()} />);

    const textarea = screen.getByPlaceholderText("Write your reply...");
    const submitButton = screen.getByText("Reply");

    fireEvent.click(submitButton);
    expect(
      screen.getByText("Please enter a reply before submitting."),
    ).toBeInTheDocument();

    fireEvent.change(textarea, { target: { value: "Test reply" } });
    expect(
      screen.queryByText("Please enter a reply before submitting."),
    ).not.toBeInTheDocument();
  });
});
