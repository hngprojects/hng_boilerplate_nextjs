import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import PaginationComponent from "~/components/superadminlayout/pagination/PaginationComponent";

describe("paginationComponent", () => {
  it("displays page numbers and total pages", () => {
    expect.assertions(4);
    render(<PaginationComponent currentPage={3} totalPages={10} />);
    expect(screen.getByText("Page 3 of 10")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("has left and right navigation buttons", () => {
    expect.assertions(4);
    render(<PaginationComponent currentPage={3} totalPages={10} />);

    const previousButton = screen.getByRole("link", { name: /previous/i });
    const nextButton = screen.getByRole("link", { name: /next/i });

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(previousButton).toHaveAttribute("href", "?page=2");
    expect(nextButton).toHaveAttribute("href", "?page=4");
  });

  it("has number navigation buttons", () => {
    expect.assertions(2);
    render(<PaginationComponent currentPage={3} totalPages={10} />);

    const pageButtons = screen
      .getAllByRole("link")
      .filter((link) => !Number.isNaN(Number(link.textContent)));

    expect(pageButtons.length).toBeGreaterThan(0);
    expect(
      pageButtons.every((button) =>
        button.getAttribute("href")?.match(/\?page=\d+/),
      ),
    ).toBeTruthy();
  });

  it("implements different style for current / active page", () => {
    expect.assertions(2);
    render(<PaginationComponent currentPage={3} totalPages={10} />);

    const activePageLink = screen.getByRole("link", { name: "3" });
    const inactivePageLink = screen.getByRole("link", { name: "1" });

    expect(activePageLink).toHaveClass("bg-primary/20");
    expect(inactivePageLink).not.toHaveClass("border-solid");
  });

  it("displays ellipsis when there are many pages", () => {
    expect.assertions(1);
    render(<PaginationComponent currentPage={5} totalPages={20} />);

    const ellipses = screen.getAllByTestId("PaginationEllipsis");
    expect(ellipses.length).toBeGreaterThan(0);
  });

  it("does not display ellipsis when there are few pages", () => {
    expect.assertions(1);
    render(<PaginationComponent currentPage={3} totalPages={5} />);

    const ellipsis = screen.queryByText("…");
    expect(ellipsis).not.toBeInTheDocument();
  });

  it("disables previous button on first page", () => {
    expect.assertions(1);
    render(<PaginationComponent currentPage={1} totalPages={10} />);

    const previousButton = screen.getByRole("link", { name: /previous/i });
    expect(previousButton).toHaveAttribute("href", "?page=1");
  });

  it("disables next button on last page", () => {
    expect.assertions(1);
    render(<PaginationComponent currentPage={10} totalPages={10} />);

    const nextButton = screen.getByRole("link", { name: /next/i });
    expect(nextButton).toHaveAttribute("href", "?page=10");
  });
});
