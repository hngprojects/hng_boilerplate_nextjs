import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ActionButtons from "../ActionButtons"; // Adjust the import path accordingly

describe("actionButtons Component", () => {
  it('should render all buttons correctly when type is "comment"', () => {
    expect.assertions(5); // Expecting five assertions
    render(
      <ActionButtons
        type="comment"
        likes={10}
        dislikes={2}
        onLike={vi.fn()}
        onDislike={vi.fn()}
        onReply={vi.fn()}
      />,
    );

    // Check for the presence of each button using aria-label
    expect(screen.getByLabelText("Like Button")).toBeInTheDocument();
    expect(screen.getByLabelText("Dislike Button")).toBeInTheDocument();
    expect(screen.getByLabelText("Share Button")).toBeInTheDocument();
    expect(screen.getByLabelText("Forward Button")).toBeInTheDocument();
    expect(screen.getByLabelText("Reply Button")).toBeInTheDocument();
  });

  it("should call onLike when the like button is clicked", () => {
    expect.assertions(1); // Expecting one assertion
    const mockOnLike = vi.fn();
    render(
      <ActionButtons
        type="comment"
        likes={10}
        dislikes={2}
        onLike={mockOnLike}
        onDislike={vi.fn()}
        onReply={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByLabelText("Like Button"));
    expect(mockOnLike).toHaveBeenCalledTimes(1);
  });

  it("should call onDislike when the dislike button is clicked", () => {
    expect.assertions(1); // Expecting one assertion
    const mockOnDislike = vi.fn();
    render(
      <ActionButtons
        type="comment"
        likes={10}
        dislikes={2}
        onLike={vi.fn()}
        onDislike={mockOnDislike}
        onReply={vi.fn()}
      />,
    );

    fireEvent.click(screen.getByLabelText("Dislike Button"));
    expect(mockOnDislike).toHaveBeenCalledTimes(1);
  });

  it('should call onReply when the reply button is clicked and type is "comment"', () => {
    expect.assertions(1); // Expecting one assertion
    const mockOnReply = vi.fn();
    render(
      <ActionButtons
        type="comment"
        likes={10}
        dislikes={2}
        onLike={vi.fn()}
        onDislike={vi.fn()}
        onReply={mockOnReply}
      />,
    );

    fireEvent.click(screen.getByLabelText("Reply Button"));
    expect(mockOnReply).toHaveBeenCalledTimes(1);
  });

  it('should not render the reply button if type is "reply"', () => {
    expect.assertions(1); // Expecting one assertion
    render(
      <ActionButtons
        type="reply"
        likes={10}
        dislikes={2}
        onLike={vi.fn()}
        onDislike={vi.fn()}
      />,
    );

    expect(screen.queryByLabelText("Reply Button")).not.toBeInTheDocument();
  });

  it("should toggle isActive state when the reply button is clicked", () => {
    expect.assertions(2); // Expecting two assertions
    const mockOnReply = vi.fn();
    const { rerender } = render(
      <ActionButtons
        type="comment"
        likes={10}
        dislikes={2}
        onLike={vi.fn()}
        onDislike={vi.fn()}
        onReply={mockOnReply}
      />,
    );

    const replyButton = screen.getByLabelText("Reply Button");
    fireEvent.click(replyButton);

    // Check if the reply button is active
    expect(replyButton).toHaveClass("active:bg-primary"); // Check for active class or state

    // Re-render to simulate state change
    rerender(
      <ActionButtons
        type="comment"
        likes={10}
        dislikes={2}
        onLike={vi.fn()}
        onDislike={vi.fn()}
        onReply={mockOnReply}
      />,
    );
    expect(replyButton).not.toHaveClass("active:bg-primary"); // Check for non-active class or state
  });
});
