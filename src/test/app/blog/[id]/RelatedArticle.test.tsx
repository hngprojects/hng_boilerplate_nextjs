import { render, screen } from "@testing-library/react";

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
});
