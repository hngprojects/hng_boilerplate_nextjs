import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import BlogCommentSection from "~/components/common/blogcommentsection";

const formatTimeAgo = (timestamp: Date) => {
  const now = new Date();
  const difference = now.getTime() - timestamp.getTime();
  const minutes = Math.floor(difference / (1000 * 60));

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (minutes < 1440) return `${Math.floor(minutes / 60)}h ago`;
  return `${Math.floor(minutes / 1440)}d ago`;
};

describe("blogCommentSection Component", () => {
  it("renders initial comments correctly", () => {
    expect.hasAssertions();

    render(<BlogCommentSection />);

    const initialComments = [
      "Wow, I had no idea the history of computers was so long and complex! This is fascinating.",
      "It's amazing to see how much progress has been made in such a short time. Thanks for sharing this!",
    ];

    for (const message of initialComments) {
      expect(screen.getByText(message)).toBeInTheDocument();
    }

    expect(screen.getByText("3m ago")).toBeInTheDocument();
    expect(screen.getByText("10m ago")).toBeInTheDocument();
  });

  it("adds a new comment when Send button is clicked", async () => {
    expect.hasAssertions();

    render(<BlogCommentSection />);

    const textarea = screen.getByPlaceholderText("Type your comment here");
    const sendButton = screen.getByText("Send");

    fireEvent.change(textarea, { target: { value: "This is a new comment!" } });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText("This is a new comment!")).toBeInTheDocument();
    });

    const now = new Date();
    const timeAgo = formatTimeAgo(now);
    expect(screen.getByText(timeAgo)).toBeInTheDocument();
  });

  it("formats the time ago correctly for new comments", async () => {
    expect.hasAssertions();

    render(<BlogCommentSection />);

    const now = new Date();
    const timeAgoText = formatTimeAgo(now);

    const textarea = screen.getByPlaceholderText("Type your comment here");
    const sendButton = screen.getByText("Send");

    fireEvent.change(textarea, {
      target: { value: "Comment for time formatting test" },
    });
    fireEvent.click(sendButton);

    await waitFor(() => {
      expect(screen.getByText(timeAgoText)).toBeInTheDocument();
    });
  });
});
