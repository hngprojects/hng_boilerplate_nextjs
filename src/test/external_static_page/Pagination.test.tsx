import { render, screen } from "@testing-library/react";

import Pagination, {
  PaginationProperties,
} from "~/components/external_static_page/Pagination";

const defaultProps: PaginationProperties = {
  total: 50,
  pageSize: 10,
  currentPage: 1,
};

describe("pagination", () => {
  it("should render", () => {
    expect.assertions(1);
    render(<Pagination {...defaultProps} />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("should render with the correct number of pages", () => {
    expect.assertions(1);
    render(<Pagination {...defaultProps} />);
    const pages = screen.getAllByRole("link");
    expect(pages).toHaveLength(6);
  });

  it("should render the correct page links", () => {
    expect.assertions(5);
    render(<Pagination {...defaultProps} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getAllByText("...")).toHaveLength(1);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("should disable the previous link on the first page", () => {
    expect.assertions(1);
    render(<Pagination {...defaultProps} />);
    const previousLink = screen.getByRole("link", { name: /previous/i });
    expect(previousLink).toHaveClass("cursor-not-allowed");
  });

  it("should disable the next link on the last page", () => {
    expect.assertions(1);
    render(<Pagination {...defaultProps} currentPage={5} />);
    const nextLink = screen.getByRole("link", { name: /next/i });
    expect(nextLink).toHaveClass("cursor-not-allowed");
  });

  it("should highlight the current page", () => {
    expect.assertions(1);
    render(
      <Pagination {...defaultProps} currentPage={3} activeVariant="default" />,
    );
    const currentPageLink = screen.getByText("3");
    expect(currentPageLink).toHaveClass("bg-primary");
  });

  it("should call the onChange function when a page is clicked", () => {
    expect.assertions(1);
    const handlePageChange = vitest.fn();
    render(<Pagination {...defaultProps} onChange={handlePageChange} />);
    const page2 = screen.getByText("2");
    page2.click();
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  it("should render ellipsis for pages out of range", () => {
    expect.assertions(1);
    render(
      <Pagination
        {...defaultProps}
        total={100}
        pageSize={10}
        currentPage={6}
      />,
    );
    expect(screen.getAllByText("...")).toHaveLength(2);
  });

  it("should render the first and last page links when current page is near the start or end", () => {
    expect.assertions(2);
    render(
      <Pagination
        {...defaultProps}
        total={100}
        pageSize={10}
        currentPage={6}
      />,
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
