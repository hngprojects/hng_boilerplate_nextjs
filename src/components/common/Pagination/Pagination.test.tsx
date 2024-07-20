import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Pagination from "./Pagination";

describe("pagination Component", () => {
  const onPageChange = vi.fn();

  const setup = (currentPage: number, totalPages: number) => {
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        nextPage={vi.fn()}
        previousPage={vi.fn()}
      />,
    );
  };

  it("renders correctly with given props", () => {
    setup(1, 10);

    expect(screen.getByText("Page 1 of 10")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("calls onPageChange with the correct page number when a page number is clicked", () => {
    setup(1, 10);

    fireEvent.click(screen.getByText("2"));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange with the next page number when the next button is clicked", () => {
    setup(1, 10);

    fireEvent.click(screen.getByAltText("right icon"));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange with the previous page number when the previous button is clicked", () => {
    setup(2, 10);

    fireEvent.click(screen.getByAltText("left icon"));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it("displays the correct range of page numbers based on the current page", () => {
    expect.hasAssertions();
    setup(5, 10);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.queryByText("2")).not.toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
  });

  // New tests to cover the uncovered lines
  it("does not call onPageChange when clicking the next button on the last page", () => {
    setup(10, 10);

    fireEvent.click(screen.getByAltText("right icon"));
    expect(onPageChange).not.toHaveBeenCalled();
  });

  it("does not call onPageChange when clicking the previous button on the first page", () => {
    setup(1, 10);

    fireEvent.click(screen.getByAltText("left icon"));
    expect(onPageChange).not.toHaveBeenCalled();
  });

  it("displays the first page button if current page is beyond half window", () => {
    setup(5, 10);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("displays the last page button if current page is before total pages minus half window", () => {
    setup(5, 10);

    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("displays ellipsis if there is a gap between page numbers", () => {
    setup(6, 10);

    expect(screen.queryByText("2")).not.toBeInTheDocument();
    expect(screen.getByText("...")).toBeInTheDocument(); // Assuming you show ellipsis for gaps
  });

  it("displays active page with primary variant", () => {
    setup(5, 10);

    expect(screen.getByText("5")).toHaveClass(
      "border-primary bg-[#FFECE5] text-gray-700",
    );
  });

  it("calls onPageChange with clicked page number", () => {
    setup(1, 10);

    fireEvent.click(screen.getByText("3"));
    expect(onPageChange).toHaveBeenCalledWith(3);
  });
});
