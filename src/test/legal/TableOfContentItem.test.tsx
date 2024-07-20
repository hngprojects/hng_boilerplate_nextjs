import { render, screen } from "@testing-library/react";

import TableOfContentItem from "~/components/layouts/Legal/TableOfContentItem";

describe("tableOfContentItem", () => {
  const href = "/example";
  const children = "Example Link";

  it("renders children and link correctly", () => {
    expect.hasAssertions();
    render(<TableOfContentItem href={href}>{children}</TableOfContentItem>);

    // Check if the children are rendered
    expect(screen.getByText(children)).toBeInTheDocument();

    // Check if the link has the correct href
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", href);
  });

  it("applies the correct class names", () => {
    expect.hasAssertions();
    render(<TableOfContentItem href={href}>{children}</TableOfContentItem>);

    // Check if the correct class names are applied
    const listItem = screen.getByRole("listitem");
    expect(listItem).toHaveClass(
      "list-inside list-disc text-base font-normal leading-[16.94px] text-neutral-dark-1 md:leading-[19.36px]",
    );

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveClass(
      "decoration-neutral-dark-1 decoration-2 hover:underline",
    );
  });

  it("accepts and applies additional class names", () => {
    expect.hasAssertions();
    const additionalClass = "additional-class";
    render(
      <TableOfContentItem href={href} className={additionalClass}>
        {children}
      </TableOfContentItem>,
    );

    // Check if the additional class name is applied
    const listItem = screen.getByRole("listitem");
    expect(listItem).toHaveClass(additionalClass);
  });
});
