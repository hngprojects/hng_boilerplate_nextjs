import { fireEvent, render, screen } from "@testing-library/react";

import CommentActions from "~/components/common/comment-component/comment-actions";

describe("comment actions component", () => {
  const mockOnLike = vi.fn();
  const mockOnDislike = vi.fn();
  const mockOnReply = vi.fn();

  it('should render all buttons correctly when type is "comment"', () => {
    expect.assertions(4);
    render(
      <CommentActions
        type="comment"
        likes={10}
        dislikes={2}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        onReply={mockOnReply}
        isReplyActive={false}
      />,
    );

    expect(screen.getByTestId("like-button")).toBeInTheDocument();
    expect(screen.getByTestId("dislike-button")).toBeInTheDocument();
    expect(screen.getByTestId("share-button")).toBeInTheDocument();
    expect(screen.getByTestId("reply-button")).toBeInTheDocument();
  });

  it('should render all buttons correctly when type is "reply"', () => {
    expect.assertions(4);
    render(
      <CommentActions
        type="reply"
        likes={10}
        dislikes={2}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        isReplyActive={false}
      />,
    );

    expect(screen.getByTestId("like-button")).toBeInTheDocument();
    expect(screen.getByTestId("dislike-button")).toBeInTheDocument();
    expect(screen.getByTestId("share-button")).toBeInTheDocument();
    expect(screen.queryByTestId("reply-button")).not.toBeInTheDocument();
  });

  it("should call onLike when the like button is clicked", () => {
    expect.assertions(1);
    render(
      <CommentActions
        type="comment"
        likes={10}
        dislikes={2}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        onReply={mockOnReply}
        isReplyActive={false}
      />,
    );

    const likeButton = screen.getByTestId("like-button");
    fireEvent.click(likeButton);
    expect(mockOnLike).toHaveBeenCalledTimes(1);
  });

  it("should call onDislike when the dislike button is clicked", () => {
    expect.assertions(1);
    render(
      <CommentActions
        type="comment"
        likes={10}
        dislikes={2}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
        onReply={mockOnReply}
        isReplyActive={false}
      />,
    );

    const dislikeButton = screen.getByTestId("dislike-button");
    fireEvent.click(dislikeButton);
    expect(mockOnDislike).toHaveBeenCalledTimes(1);
  });
});
