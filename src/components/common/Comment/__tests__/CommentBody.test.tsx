import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { CommentBody } from "../CommentBody";

describe("commentBody Component", () => {
  // it("should render without crashing", () => {
  //   expect.assertions(5); // Expecting five assertions to be called
  //   render(
  //     <CommentBody
  //       type="comment"
  //       id="1"
  //       avatar="https://example.com/avatar.jpg"
  //       name="John Doe"
  //       username="johndoe"
  //       content="This is a comment."
  //       timestamp="2024-07-20T00:00:00Z"
  //       likes={10}
  //       dislikes={2}
  //       onLike={vi.fn()}
  //       onDislike={vi.fn()}
  //     />,
  //   );
  //   expect(screen.getByTestId("comment-body")).toBeInTheDocument();
  //   expect(screen.getByTestId("avatar")).toBeInTheDocument();
  //   expect(screen.getByTestId("avatar-image")).toHaveAttribute(
  //     "src",
  //     "https://example.com/avatar.jpg",
  //   );
  //   expect(screen.getByTestId("comment-name")).toHaveTextContent("John Doe");
  //   expect(screen.getByTestId("comment-username")).toHaveTextContent(
  //     "@johndoe",
  //   );
  // });

  it("should display content, timestamp, and action buttons correctly", () => {
    expect.assertions(3); // Expecting three assertions to be called
    render(
      <CommentBody
        type="reply"
        id="2"
        avatar="https://example.com/avatar2.jpg"
        name="Jane Doe"
        username="janedoe"
        content="This is a reply."
        timestamp="2024-07-20T01:00:00Z"
        likes={5}
        dislikes={1}
        onLike={vi.fn()}
        onDislike={vi.fn()}
        onReply={vi.fn()}
      />,
    );
    expect(screen.getByTestId("comment-text")).toHaveTextContent(
      "This is a reply.",
    );
    expect(screen.getByTestId("comment-timestamp")).toHaveTextContent(
      "2024-07-20T01:00:00Z",
    );
    expect(screen.getByTestId("action-buttons-container")).toBeInTheDocument();
  });

  it("should call onLike and onDislike functions when buttons are clicked", () => {
    expect.assertions(2); // Expecting two assertions to be called
    const mockOnLike = vi.fn();
    const mockOnDislike = vi.fn();
    render(
      <CommentBody
        type="comment"
        id="3"
        avatar="https://example.com/avatar3.jpg"
        name="Alex Smith"
        username="alexsmith"
        content="Another comment."
        timestamp="2024-07-20T02:00:00Z"
        likes={3}
        dislikes={0}
        onLike={mockOnLike}
        onDislike={mockOnDislike}
      />,
    );

    const likeButton = screen.getByTestId("like-button");
    const dislikeButton = screen.getByTestId("dislike-button");

    fireEvent.click(likeButton);
    fireEvent.click(dislikeButton);

    expect(mockOnLike).toHaveBeenCalledTimes(1);
    expect(mockOnDislike).toHaveBeenCalledTimes(1);
  });

  it("should not display reply button if onReply is not provided", () => {
    expect.assertions(1); // Expecting one assertion to be called
    render(
      <CommentBody
        type="comment"
        id="4"
        avatar="https://example.com/avatar4.jpg"
        name="Emily Davis"
        username="emilydavis"
        content="Comment without reply."
        timestamp="2024-07-20T03:00:00Z"
        likes={7}
        dislikes={3}
        onLike={vi.fn()}
        onDislike={vi.fn()}
      />,
    );

    expect(
      screen.queryByRole("button", { name: /reply/i }),
    ).not.toBeInTheDocument();
  });

  it("should display reply button if onReply is provided", () => {
    expect.assertions(1); // Expecting one assertion to be called
    render(
      <CommentBody
        type="comment"
        id="5"
        avatar="https://example.com/avatar5.jpg"
        name="Michael Johnson"
        username="michaeljohnson"
        content="Reply with reply button."
        timestamp="2024-07-20T04:00:00Z"
        likes={6}
        dislikes={4}
        onLike={vi.fn()}
        onDislike={vi.fn()}
        onReply={vi.fn()}
      />,
    );

    expect(screen.getByTestId("reply-button")).toBeInTheDocument();
  });
});
