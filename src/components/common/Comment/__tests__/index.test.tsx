import HBPCommentBox from "..";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { CommentBodyProperties } from "../CommentBody";
import { ReplyFormProperties } from "../ReplyForm";

// Mock CommentBody and ReplyForm components if needed
vi.mock("./CommentBody", () => ({
  CommentBody: ({ onLike, onDislike, onReply }: CommentBodyProperties) => (
    <div>
      <button data-testid="like-button" onClick={onLike}>
        Like
      </button>
      <button data-testid="dislike-button" onClick={onDislike}>
        Dislike
      </button>
      <button data-testid="reply-button" onClick={onReply}>
        Reply
      </button>
    </div>
  ),
}));

vi.mock("./ReplyForm", () => ({
  ReplyForm: ({ onSubmit }: ReplyFormProperties) => (
    <form
      onSubmit={(event_) => {
        event_.preventDefault();
        onSubmit("New reply content");
      }}
    >
      <button type="submit">Submit Reply</button>
    </form>
  ),
}));

describe("hBPCommentBox", () => {
  const defaultProps = {
    id: "1",
    avatar: "/path/to/avatar.png",
    name: "John Doe",
    username: "johndoe",
    content: "This is a comment.",
    timestamp: "2024-07-20T00:00:00Z",
    likes: 5,
    dislikes: 2,
    className: "custom-class",
  };

  it("renders the component with the given props", () => {
    expect.assertions(2); // Expecting 2 assertions
    render(<HBPCommentBox {...defaultProps} />);

    expect(screen.getByTestId("comment-box-container")).toBeInTheDocument();
    expect(screen.getByTestId("comment-card")).toBeInTheDocument();
  });

  it("toggles the reply form when the reply button is clicked", () => {
    expect.assertions(3); // Expecting 3 assertions
    render(<HBPCommentBox {...defaultProps} />);

    const replyButton = screen.getByTestId("reply-button");
    expect(screen.queryByTestId("reply-form-container")).toBeNull();

    fireEvent.click(replyButton);
    expect(screen.getByTestId("reply-form-container")).toBeInTheDocument();

    fireEvent.click(replyButton);
    expect(screen.queryByTestId("reply-form-container")).toBeNull();
  });

  it("adds a reply and displays it", () => {
    expect.assertions(2); // Expecting 2 assertions
    render(<HBPCommentBox {...defaultProps} />);

    fireEvent.click(screen.getByTestId("reply-button"));
    fireEvent.submit(screen.getByText("Submit Reply"));

    expect(screen.getByTestId("reply-1")).toBeInTheDocument();
    expect(screen.getByText("New reply content")).toBeInTheDocument();
  });

  it("handles likes and dislikes correctly", () => {
    expect.assertions(2); // Expecting 2 assertions
    render(<HBPCommentBox {...defaultProps} />);

    const likeButton = screen.getByTestId("like-button");
    const dislikeButton = screen.getByTestId("dislike-button");

    expect(screen.getByText("Like")).toBeInTheDocument();
    expect(screen.getByText("Dislike")).toBeInTheDocument();

    fireEvent.click(likeButton);
    fireEvent.click(dislikeButton);

    expect(screen.getByText("Like")).toBeInTheDocument();
    expect(screen.getByText("Dislike")).toBeInTheDocument();
  });
});
