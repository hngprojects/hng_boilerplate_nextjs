import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Comments from "./index";

// Mock next/image
vi.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...properties }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...properties} />
  ),
}));

describe("comments Component", () => {
  it("renders comments and their replies", () => {
    expect.hasAssertions();
    render(<Comments />);

    // Check if the main comments are rendered
    expect(screen.getByText("Uduak Essien")).toBeInTheDocument();
    expect(screen.getByText("@Uduess")).toBeInTheDocument();
    expect(
      screen.getByText("Living a balanced lifestyle is essential."),
    ).toBeInTheDocument();

    // Check if like and reply buttons are present
    expect(screen.getAllByAltText("Like")[0]).toBeInTheDocument();
    expect(screen.getAllByAltText("Reply")[0]).toBeInTheDocument();
  });

  it("toggles replies visibility on button click", () => {
    expect.hasAssertions();
    render(<Comments />);

    // Find the reply button and click it
    const replyButton = screen.getAllByAltText("Reply")[0];
    fireEvent.click(replyButton);

    // Check if the replies are displayed
    expect(
      screen.getByText(
        "A well-rounded lifestyle leads to a happier, more fulfilling life.",
      ),
    ).toBeInTheDocument();

    // Click the reply button again to hide the replies
    fireEvent.click(replyButton);
    expect(
      screen.queryByText(
        "A well-rounded lifestyle leads to a happier, more fulfilling life.",
      ),
    ).not.toBeInTheDocument();

    // Toggle it back to ensure consistent behavior
    fireEvent.click(replyButton);
    expect(
      screen.getByText(
        "A well-rounded lifestyle leads to a happier, more fulfilling life.",
      ),
    ).toBeInTheDocument();
  });

  it("initializes comments on mount", () => {
    expect.hasAssertions();
    render(<Comments />);

    // Check if the comments are initialized
    expect(screen.getAllByText("Uduak Essien").length).toBeGreaterThan(0);
  });
});
