import { fireEvent, render, screen } from "@testing-library/react";
import moment from "moment";
import { Session } from "next-auth";

import { CommentBody } from "~/components/common/comment-component/comment-body";

describe("comment body component", () => {
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
    expires: "1",
  };
  it("should display content, timestamp, and action buttons correctly", async () => {
    expect.assertions(3);
    render(
      <CommentBody
        session={mockSession}
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
      moment("2024-07-20T01:00:00Z").format("DD MMM, YYYY"),
    );
    expect(screen.getByTestId("action-buttons-container")).toBeInTheDocument();
  });

  it("should call onLike and onDislike functions when buttons are clicked", () => {
    expect.assertions(2);
    const mockOnLike = vi.fn();
    const mockOnDislike = vi.fn();
    render(
      <CommentBody
        session={mockSession}
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
    expect.assertions(1);
    render(
      <CommentBody
        session={mockSession}
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
    expect.assertions(1);
    render(
      <CommentBody
        session={mockSession}
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

  it("should not display comment actions if session is not provided i.e user is not logged in", () => {
    expect.assertions(1);
    render(
      <CommentBody
        // eslint-disable-next-line unicorn/no-null
        session={null}
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
    expect(
      screen.queryByTestId("action-buttons-container"),
    ).not.toBeInTheDocument();
  });
});
