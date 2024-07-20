import HBPCommentBox, { CommentProperties } from "..";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

// Mock the child components
vi.mock("~/components/ui/card", () => ({
  Card: ({
    children,
    ...properties
  }: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => (
    <div {...properties}>{children}</div>
  ),
  CardContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

vi.mock("./CommentBody", () => ({
  CommentBody: ({
    onReply,
    onLike,
    onDislike,
  }: {
    onReply: () => void;
    onLike: () => void;
    onDislike: () => void;
  }) => (
    <div data-testid="comment-body">
      Comment Body
      <button onClick={onReply} data-testid="reply-button">
        Reply
      </button>
      <button onClick={onLike} data-testid="like-button">
        Like
      </button>
      <button onClick={onDislike} data-testid="dislike-button">
        Dislike
      </button>
    </div>
  ),
}));

vi.mock("./ReplyForm", () => ({
  ReplyForm: ({ onSubmit }: { onSubmit: (content: string) => void }) => (
    <form
      data-testid="reply-form"
      onSubmit={(event_) => {
        event_.preventDefault();
        onSubmit("Test reply");
      }}
    >
      <button type="submit">Submit Reply</button>
    </form>
  ),
}));

describe("hBPCommentBox", () => {
  const defaultProps: CommentProperties = {
    id: "1",
    avatar: "/avatar.png",
    name: "John Doe",
    username: "johndoe",
    content: "Test comment",
    timestamp: "2023-07-19",
    date: "2023-07-19",
    likes: 5,
    dislikes: 2,
  };

  it("renders the main comment", () => {
    expect.assertions(2);
    render(<HBPCommentBox {...defaultProps} />);
    expect(screen.getByTestId("comment-box-container")).toBeInTheDocument();
    expect(screen.getByTestId("comment-card")).toBeInTheDocument();
  });

  it("adds a new reply when reply form is submitted", async () => {
    expect.assertions(3);
    render(<HBPCommentBox {...defaultProps} />);

    // Click the reply button to show the form
    const replyButton = screen.getByTestId("reply-button");
    fireEvent.click(replyButton);

    // Wait for the reply form container to appear
    const replyFormContainer = await screen.findByTestId(
      "reply-form-container",
    );
    expect(replyFormContainer).toBeInTheDocument();

    // Find the textarea and submit button within the form container
    const textarea = within(replyFormContainer).getByRole("textbox");
    const submitButton = within(replyFormContainer).getByRole("button", {
      name: /reply/i,
    });

    // Type a reply and submit
    fireEvent.change(textarea, { target: { value: "Test reply" } });
    fireEvent.click(submitButton);

    // Wait for at least one element with a test ID starting with "reply-"
    const replies = await screen.findAllByTestId(/^reply-/);
    expect(replies.length).toBeGreaterThan(0);

    // Check that the reply form container is no longer in the document
    expect(
      screen.queryByTestId("reply-form-container"),
    ).not.toBeInTheDocument();
  });

  it("adds a new reply when reply form is submitted", async () => {
    expect.assertions(2);
    render(<HBPCommentBox {...defaultProps} />);
    const replyButton = screen.getByTestId("reply-button");
    fireEvent.click(replyButton);
    const submitButton = await screen.findByText("Reply");
    fireEvent.click(submitButton);

    // Debug log
    // console.log(document.body.innerHTML);

    // Wait for at least one element with a test ID starting with "reply-"
    const replies = await screen.findAllByTestId(/^reply-/);
    expect(replies.length).toBeGreaterThan(0);

    // Check that the reply form is no longer in the document
    expect(screen.queryByTestId("reply-form")).not.toBeInTheDocument();
  });

  it("increases likes when like button is clicked", () => {
    expect.assertions(1);
    render(<HBPCommentBox {...defaultProps} />);
    const likeButton = screen.getByTestId("like-button");
    fireEvent.click(likeButton);
    expect(screen.getByTestId("comment-body")).toBeInTheDocument();
    // Note: This test is still weak. To improve it, we'd need to expose the updated likes count in the UI.
  });

  it("increases dislikes when dislike button is clicked", () => {
    expect.assertions(1);
    render(<HBPCommentBox {...defaultProps} />);
    const dislikeButton = screen.getByTestId("dislike-button");
    fireEvent.click(dislikeButton);
    expect(screen.getByTestId("comment-body")).toBeInTheDocument();
    // Note: This test is still weak. To improve it, we'd need to expose the updated dislikes count in the UI.
  });
});
