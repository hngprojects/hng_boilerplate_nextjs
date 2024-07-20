import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ReplyForm } from "../ReplyForm";

describe("replyForm", () => {
  it("renders the reply form", () => {
    expect.assertions(3);
    render(<ReplyForm onSubmit={() => {}} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /reply/i })).toBeInTheDocument();
    expect(screen.getByTestId("reply-avatar")).toBeInTheDocument();
  });

  it("updates textarea value on input", () => {
    expect.assertions(1);
    render(<ReplyForm onSubmit={() => {}} />);
    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "Test reply" } });
    expect(textarea).toHaveValue("Test reply");
  });

  it("calls onSubmit with textarea value when submit button is clicked", () => {
    expect.assertions(1);
    const mockSubmit = vi.fn();
    render(<ReplyForm onSubmit={mockSubmit} />);
    const textarea = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button", { name: /reply/i });
    fireEvent.change(textarea, { target: { value: "Test reply" } });
    fireEvent.click(submitButton);
    expect(mockSubmit).toHaveBeenCalledWith("Test reply");
  });

  it("shows error message when trying to submit empty reply", () => {
    expect.assertions(1);
    render(<ReplyForm onSubmit={() => {}} />);
    const submitButton = screen.getByRole("button", { name: /reply/i });
    fireEvent.click(submitButton);
    expect(
      screen.getByText(/please enter a reply before submitting/i),
    ).toBeInTheDocument();
  });
});
