import { render, screen } from "@testing-library/react";

import TableOfContent from "~/components/layouts/Legal/TableOfContent";

describe("tableOfContent", () => {
  const listOfContent = [
    { href: "/section-1", label: "Section 1" },
    { href: "/section-2", label: "Section 2" },
  ];

  it("renders with default classes", () => {
    expect.hasAssertions();

    render(<TableOfContent listOfContent={listOfContent} />);

    // Check if the aside element has the default class
    const aside = screen.getByRole("complementary");
    expect(aside).toHaveClass("space-y-2");

    // Check if the heading is rendered with the correct text
    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent("Table of Content");

    // Check if the list element is present
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });

  it("accepts and applies additional class names", () => {
    expect.hasAssertions();

    const additionalClass = "additional-class";
    render(
      <TableOfContent
        listOfContent={listOfContent}
        className={additionalClass}
      />,
    );

    // Check if the aside element has both the default and additional class
    const aside = screen.getByRole("complementary");
    expect(aside).toHaveClass("space-y-2");
    expect(aside).toHaveClass(additionalClass);
  });

  it("renders all list items with correct href and label", () => {
    expect.hasAssertions();

    render(<TableOfContent listOfContent={listOfContent} />);

    // Check each item in the list
    for (const item of listOfContent) {
      // Check if the link with the correct label and href is rendered
      const link = screen.getByRole("link", { name: item.label });
      expect(link).toHaveAttribute("href", item.href);
      expect(link).toHaveTextContent(item.label);
    }
  });
});
