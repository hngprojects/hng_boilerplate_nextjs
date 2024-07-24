import { render, screen } from "@testing-library/react";

import BlogCard from "~/components/layouts/BlogCards";
import blogCardImage from "../../../public/images/blogPage/blogCard1.png";

const properties = {
  title: "Sample Blog Title",
  category: "Business",
  date: "July 18, 2024",
  labelClassName: "bg-primary",
  readTime: "5 mins read",
  image: blogCardImage,
};

describe("blog cards", () => {
  it("renders the BlogCard with correct styles", () => {
    expect.hasAssertions();
    render(<BlogCard {...properties} />);

    const image = screen.getByAltText(properties.title);
    expect(image).toHaveStyle("object-fit: contain");

    const categoryBadge = screen.getByText(properties.category);
    expect(categoryBadge).toHaveClass("bg-primary");

    const date = screen.getByText(properties.date);
    expect(date).toBeInTheDocument();

    const readTime = screen.getByText(`${properties.readTime} mins read`);
    expect(readTime).toBeInTheDocument();
  });
});
