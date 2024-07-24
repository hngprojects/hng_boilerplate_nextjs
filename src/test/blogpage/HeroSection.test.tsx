import { render, screen } from "@testing-library/react";

import BlogHome from "~/app/blog/page";

describe("blogHome Component", () => {
  it("renders the Recent Blog Posts heading", () => {
    expect.assertions(1);
    render(<BlogHome />);
    expect(screen.getByText("Recent Blog Posts")).toBeInTheDocument();
  });

  it("renders blog posts correctly", () => {
    expect.assertions(6);
    render(<BlogHome />);
    expect(
      screen.getByText(
        "The Power of Networking: How to Build Meaningful Connections",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "The Global Impact of Climate Change: A Look at the Evidence",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("5 Easy and Delicious Recipes for Busy Weeknights"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("5 Simple Habits to Improve Your Mental Wellbeing"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "The Ultimate Guide to Dressing Stylishly with Fewer Clothes",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "The Future of Travel: What Will the World Look Like in 2030?",
      ),
    ).toBeInTheDocument();
  });

  it("renders the Show More Articles button", () => {
    expect.assertions(1);
    render(<BlogHome />);
    expect(
      screen.getByRole("button", { name: /show more articles/i }),
    ).toBeInTheDocument();
  });
});
