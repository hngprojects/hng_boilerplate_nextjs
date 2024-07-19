import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { CommentBody } from "../CommentBody";

// Mock the ActionButtons component
vi.mock("./ActionButtons", () => ({
  default: () => <div data-testid="action-buttons">Action Buttons</div>,
}));

describe("commentBody", () => {
  const defaultProps = {
    type: "comment" as const,
    id: "1",
    avatar: "https://example.com/avatar.jpg",
    name: "John Doe",
    username: "johndoe",
    content: "This is a comment",
    timestamp: "2 hours ago",
    likes: 10,
    dislikes: 2,
    onLike: vi.fn(),
    onDislike: vi.fn(),
    onReply: vi.fn(),
  };

  it("renders the main structure correctly", () => {
    expect.assertions(3);
    render(<CommentBody {...defaultProps} />);

    expect(screen.getByTestId("comment-body")).toBeInTheDocument();
    expect(screen.getByTestId("avatar")).toBeInTheDocument();
    expect(screen.getByTestId("action-buttons")).toBeInTheDocument();
  });

  it("renders the avatar correctly", () => {
    render(<CommentBody {...defaultProps} />);
    const avatarImage = screen.queryByTestId("avatar-image");
    if (avatarImage) {
      expect(avatarImage).toHaveAttribute("src", defaultProps.avatar);
      expect(avatarImage).toHaveAttribute("alt", defaultProps.name);
    }
  });

  it("renders the avatar fallback correctly when the image fails to load", () => {
    render(<CommentBody {...defaultProps} />);
    const avatarImage = screen.queryByTestId("avatar-image");

    // Simulate image load error
    if (avatarImage) {
      fireEvent.error(avatarImage);
    }

    expect(screen.getByTestId("avatar-fallback")).toBeInTheDocument();
    expect(screen.queryByTestId("avatar-fallback")).toHaveTextContent(
      defaultProps.name.charAt(0),
    );
  });

  it("renders the user information correctly", () => {
    expect.assertions(4);
    render(<CommentBody {...defaultProps} />);

    expect(screen.getByTestId("comment-name")).toHaveTextContent(
      defaultProps.name,
    );
    expect(screen.getByTestId("comment-username")).toHaveTextContent(
      `@${defaultProps.username}`,
    );
    expect(screen.getByTestId("comment-text")).toHaveTextContent(
      defaultProps.content,
    );
    expect(screen.getByTestId("comment-timestamp")).toHaveTextContent(
      defaultProps.timestamp,
    );
  });

  it("renders avatar fallback when image fails to load", () => {
    expect.assertions(1);
    render(<CommentBody {...defaultProps} />);
    const avatarImage = screen.getByTestId("avatar");
    fireEvent.error(avatarImage);
    expect(screen.getByTestId("avatar-fallback")).toHaveTextContent(
      defaultProps.name[0],
    );
  });

  it("renders as a reply", () => {
    expect.assertions(1);
    const replyProperties = {
      ...defaultProps,
      type: "reply" as const,
      onReply: undefined,
    };
    render(<CommentBody {...replyProperties} />);
    expect(screen.getByTestId("comment-body")).toBeInTheDocument();
  });
});
