import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import ActionButtons from "../ActionButtons"; // Adjust import path as necessary

describe("actionButtons Component", () => {
  const mockOnLike = vi.fn();
  const mockOnDislike = vi.fn();
  const mockOnReply = vi.fn();

  it('should render all buttons correctly when type is "comment"', () => {
    expect.assertions(5);
    render(
      <ActionButtons
        type="comment"
        likes={10}
        dislikes={2}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        onReply={mockOnReply}
      />,
    );

    expect(screen.getByTestId("like-button")).toBeInTheDocument();
    expect(screen.getByTestId("dislike-button")).toBeInTheDocument();
    expect(screen.getByTestId("share-button")).toBeInTheDocument();
    expect(screen.getByTestId("forward-button")).toBeInTheDocument();
    expect(screen.getByTestId("reply-button")).toBeInTheDocument();
  });

  it('should render all buttons correctly when type is "reply"', () => {
    expect.assertions(5);
    render(
      <ActionButtons
        type="reply"
        likes={10}
        dislikes={2}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
      />,
    );

    expect(screen.getByTestId("like-button")).toBeInTheDocument();
    expect(screen.getByTestId("dislike-button")).toBeInTheDocument();
    expect(screen.getByTestId("share-button")).toBeInTheDocument();
    expect(screen.getByTestId("forward-button")).toBeInTheDocument();
    expect(screen.queryByTestId("reply-button")).not.toBeInTheDocument();
  });

  it("should call onLike when the like button is clicked", () => {
    expect.assertions(1);
    render(
      <ActionButtons
        type="comment"
        likes={10}
        dislikes={2}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        onReply={mockOnReply}
      />,
    );

    const likeButton = screen.getByTestId("like-button");
    fireEvent.click(likeButton);
    expect(mockOnLike).toHaveBeenCalledTimes(1);
  });

  it("should call onDislike when the dislike button is clicked", () => {
    expect.assertions(1);
    render(
      <ActionButtons
        type="comment"
        likes={10}
        dislikes={2}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        onReply={mockOnReply}
      />,
    );

    const dislikeButton = screen.getByTestId("dislike-button");
    fireEvent.click(dislikeButton);
    expect(mockOnDislike).toHaveBeenCalledTimes(1);
  });

  it('should call onReply when the reply button is clicked and type is "comment"', () => {
    expect.assertions(1);
    render(
      <ActionButtons
        type="comment"
        likes={10}
        dislikes={2}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        onReply={mockOnReply}
      />,
    );

    fireEvent.click(screen.getByTestId("reply-button"));
    expect(mockOnReply).toHaveBeenCalledWith();
  });
});
