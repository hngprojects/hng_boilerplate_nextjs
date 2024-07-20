import { fireEvent, render, screen } from "@testing-library/react";

import ActionButtons from "../ActionButtons";

// import ActionButtons from "../ActionButtons";

describe("actionButtons", () => {
  const defaultProps = {
    type: "comment" as const,
    likes: 10,
    dislikes: 5,
    onLike: vi.fn(),
    onDislike: vi.fn(),
    onReply: vi.fn(),
  };

  it("should render correctly", () => {
    expect.assertions(1);
    render(<ActionButtons {...defaultProps} />);
    expect(screen.getByTestId("action-buttons")).toBeTruthy();
  });

  it("should display correct like and dislike counts", () => {
    expect.assertions(2);
    render(<ActionButtons {...defaultProps} />);
    expect(screen.getByTestId("likes-count").textContent).toBe("10");
    expect(screen.getByTestId("dislikes-count").textContent).toBe("5");
  });

  it("should call onLike when like button is clicked", () => {
    expect.assertions(1);
    render(<ActionButtons {...defaultProps} />);
    fireEvent.click(screen.getByTestId("like-button"));
    expect(defaultProps.onLike).toHaveBeenCalledTimes(1);
  });

  it("should call onDislike when dislike button is clicked", () => {
    expect.assertions(1);
    render(<ActionButtons {...defaultProps} />);
    fireEvent.click(screen.getByTestId("dislike-button"));
    expect(defaultProps.onDislike).toHaveBeenCalledTimes(1);
  });

  it("should render reply button for comment type", () => {
    expect.assertions(1);
    render(<ActionButtons {...defaultProps} />);
    expect(screen.getByTestId("reply-button")).toBeTruthy();
  });

  it("should not render reply button for reply type", () => {
    expect.assertions(1);
    render(<ActionButtons {...defaultProps} type="reply" />);
    expect(screen.queryByTestId("reply-button")).toBeNull();
  });

  it("should call onReply when reply button is clicked", () => {
    expect.assertions(1);
    render(<ActionButtons {...defaultProps} />);
    fireEvent.click(screen.getByTestId("reply-button"));
    expect(defaultProps.onReply).toHaveBeenCalledTimes(1);
  });

  it("should change reply button style when clicked", () => {
    expect.assertions(2);
    render(<ActionButtons {...defaultProps} />);
    const replyButton = screen.getByTestId("reply-button");
    fireEvent.click(replyButton);
    expect(replyButton.classList.contains("bg-[#F97316]")).toBeTruthy();
    expect(replyButton.classList.contains("text-white")).toBeTruthy();
  });

  it("should render all buttons", () => {
    expect.assertions(5);
    render(<ActionButtons {...defaultProps} />);
    expect(screen.getByTestId("like-button")).toBeTruthy();
    expect(screen.getByTestId("dislike-button")).toBeTruthy();
    expect(screen.getByTestId("share-button")).toBeTruthy();
    expect(screen.getByTestId("forward-button")).toBeTruthy();
    expect(screen.getByTestId("reply-button")).toBeTruthy();
  });

  it("should render correct icons", () => {
    expect.assertions(5);
    render(<ActionButtons {...defaultProps} />);
    expect(screen.getByTestId("thumbs-up-icon")).toBeTruthy();
    expect(screen.getByTestId("thumbs-down-icon")).toBeTruthy();
    expect(screen.getByTestId("share-icon")).toBeTruthy();
    expect(screen.getByTestId("forward-icon")).toBeTruthy();
    expect(screen.getByTestId("message-square-icon")).toBeTruthy();
  });
});
