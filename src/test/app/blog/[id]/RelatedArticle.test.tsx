import { render, screen } from "@testing-library/react";

import BlogCard from "~/components/blog/BlogCard";
import RelatedArticle from "../../../../app/blog/[id]/RelatedArticle";

describe("related Article", () => {
  it("should render loading.. if Loading is true", () => {
    expect.hasAssertions();
    render(<RelatedArticle />);

    const textElement = screen.getByRole("paragraph");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent("Loading...");
  });

  it("should render correctly", () => {
    expect.hasAssertions();
    render(<RelatedArticle />);

    const textElement = screen.getByRole("heading");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent("Related Articles");
  });

  it("should render list of News", () => {
    expect.hasAssertions();
    type New = {
      id: number;
      thumbnailUrl: string;
    };
    type newTypes = {
      id: number;
      name: string;
      color: string;
      title: string;
      date: string;
      timeRead: string;
    };
    const News: New = [
      {
        id: 0,
        thumbnailUrl: "users",
      },
      {
        id: 1,
        thumbnailUrl: "outcast",
      },
    ];
    const newsTypes: newTypes = [
      {
        id: 0,
        name: "Business",
        color: "#F97316",
        title: "The Power of Networking: How to Build Meaningful Connections",
        date: "July 12, 2024",
        timeRead: "5 min read",
      },
      {
        id: 1,
        name: "Lifestyle",
        color: "#7F0682",
        title: "The Power of Networking: How to Build Meaningful Connections",
        date: "July 12, 2024",
        timeRead: "5 min read",
      },
    ];

    render(<BlogCard article={News} newsType={newsTypes} />);

    const textElement = screen.getByTestId("news-displayed");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveStyle({ backgroundColor: newsTypes.color });
  });
});
