import { fireEvent, render, screen } from "~/test/utils";

import "@testing-library/jest-dom";

import { describe, expect, it, vi } from "vitest";

import Pagination from "./Pagination";

describe("pagination Component", () => {
  const onPageChangeMock = vi.fn();
  const nextPageMock = vi.fn();
  const previousPageMock = vi.fn();

  const renderPagination = (currentPage: number, totalPages: number) => {
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChangeMock}
        nextPage={nextPageMock}
        previousPage={previousPageMock}
      />,
    );
  };

  it("should render the correct page information", () => {
    expect.hasAssertions();
    renderPagination(3, 10);
    expect(screen.getByText("Page 3 of 10")).toBeInTheDocument();
  });

  it("should display correct page numbers", () => {
    expect.hasAssertions();
    renderPagination(3, 10);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(9);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("should call onPageChange with the correct page number when a page button is clicked", () => {
    expect.hasAssertions();
    renderPagination(3, 10);
    const page2Button = screen.getByText("2");
    fireEvent.click(page2Button);
    expect(onPageChangeMock).toHaveBeenCalledWith(2);
  });

  it("should call nextPage when the next button is clicked", () => {
    expect.hasAssertions();
    renderPagination(3, 10);
    const nextButton = screen.getAllByTestId("next-button")[0];
    fireEvent.click(nextButton);
    expect(nextPageMock).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should call previousPage when the previous button is clicked", () => {
    expect.hasAssertions();
    renderPagination(3, 10);
    const previousButton = screen.getAllByTestId("prev-button")[0];
    fireEvent.click(previousButton);
    expect(nextPageMock).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should adjust page numbers correctly when currentPage is near the start", () => {
    expect.hasAssertions();
    renderPagination(2, 10);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(9);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });

  it("should adjust page numbers correctly when currentPage is near the end", () => {
    expect.hasAssertions();
    renderPagination(9, 10);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(9);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("6")).toBeInTheDocument();
    expect(screen.getByText("7")).toBeInTheDocument();
    expect(screen.getByText("8")).toBeInTheDocument();
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
