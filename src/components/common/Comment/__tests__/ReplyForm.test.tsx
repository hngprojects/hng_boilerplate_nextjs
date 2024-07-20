import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ReplyForm } from "../ReplyForm";

describe("replyForm Component", () => {
  it("should render without crashing", () => {
    expect.assertions(3); // Expecting three assertions to be called
    render(<ReplyForm onSubmit={vi.fn()} />);
    expect(screen.getByTestId("reply-avatar")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Write your reply..."),
    ).toBeInTheDocument();
    expect(screen.getByText("Reply")).toBeInTheDocument();
  });

  it("should call onSubmit with content when form is submitted", () => {
    expect.assertions(3); // Expecting three assertions to be called
    const mockOnSubmit = vi.fn();
    render(<ReplyForm onSubmit={mockOnSubmit} />);

    const textarea = screen.getByPlaceholderText("Write your reply...");
    const submitButton = screen.getByText("Reply");

    fireEvent.change(textarea, { target: { value: "Test reply" } });
    fireEvent.click(submitButton);

    expect(mockOnSubmit).toHaveBeenCalledWith("Test reply");
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(textarea).toHaveValue("");
  });

  it("should display error message when submitting empty reply", () => {
    expect.assertions(1); // Expecting one assertion to be called
    render(<ReplyForm onSubmit={vi.fn()} />);

    const submitButton = screen.getByText("Reply");
    fireEvent.click(submitButton);

    expect(
      screen.getByText("Please enter a reply before submitting."),
    ).toBeInTheDocument();
  });

  it("should clear error message when user starts typing after an error", () => {
    expect.assertions(2); // Expecting two assertions to be called
    render(<ReplyForm onSubmit={vi.fn()} />);

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
