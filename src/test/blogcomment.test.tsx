import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import BlogComment from "~/components/common/blogcommentsection/blogcomment";

describe("blogComment Component", () => {
  it("renders comment data correctly", () => {
    expect.hasAssertions();

    const mockData = {
      name: "John Doe",
      message: "This is a test comment.",
      imageLink: "",
      timeAgo: "2 hours ago",
    };

    render(<BlogComment data={mockData} />);

    const nameElement = screen.getByText(mockData.name);
    const messageElement = screen.getByText(mockData.message);
    const timeAgoElement = screen.getByText(mockData.timeAgo);

    expect(nameElement).toBeInTheDocument();
    expect(messageElement).toBeInTheDocument();
    expect(timeAgoElement).toBeInTheDocument();

    const images = screen.queryAllByRole("img", { name: "profile image" });
    expect(images).toHaveLength(1);
  });
});
