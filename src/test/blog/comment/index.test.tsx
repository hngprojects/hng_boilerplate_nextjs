import { fireEvent, render, screen } from "@testing-library/react";
import { Session } from "next-auth";
import { describe, expect, it } from "vitest";

import Comment, {
  CommentProperties,
} from "~/components/common/comment-component";

describe("comment box component", () => {
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
    expires: "2100-01-01T00:00:00.000Z",
  };
  const defaultProps: CommentProperties = {
    id: "1",
    avatar: "/path/to/avatar.png",
    name: "John Doe",
    username: "johndoe",
    content: "This is a comment.",
    timestamp: "2024-07-20",
    likes: 10,
    dislikes: 2,
    className: "",
    session: mockSession,
  };

  it("should render the comment box correctly", () => {
    expect.assertions(5);

    render(<Comment {...defaultProps} />);

    expect(screen.getByTestId("comment-box-container")).toBeInTheDocument();
    expect(screen.getByTestId("comment-card")).toBeInTheDocument();
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByText(`@${defaultProps.username}`)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.content)).toBeInTheDocument();
  });

  it("should handle like button click correctly for the comment", () => {
    expect.assertions(2);

    render(<Comment {...defaultProps} />);

    const likeButton = screen.getByTestId("like-button");
    fireEvent.click(likeButton);

    expect(likeButton).toBeInTheDocument();
    expect(screen.getByText("11")).toBeInTheDocument();
  });

  it("should handle dislike button click correctly for the comment", () => {
    expect.assertions(2);

    render(<Comment {...defaultProps} />);

    const dislikeButton = screen.getByTestId("dislike-button");
    fireEvent.click(dislikeButton);

    expect(dislikeButton).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("should show reply form when reply button is clicked", () => {
    expect.assertions(2);

    render(<Comment {...defaultProps} />);

    const replyButton = screen.getByTestId("reply-button");
    fireEvent.click(replyButton);

    expect(replyButton).toBeInTheDocument();
    expect(screen.getByTestId("reply-form-container")).toBeInTheDocument();
  });

  it("should add a reply when the reply form is submitted", () => {
    expect.assertions(1);

    render(<Comment {...defaultProps} />);

    const replyButton = screen.getByTestId("reply-button");
    fireEvent.click(replyButton);

    const replyInput = screen.getByTestId("reply-input");
    fireEvent.change(replyInput, { target: { value: "This is a reply." } });

    expect(screen.getByText("This is a reply.")).toBeInTheDocument();
  });
});
