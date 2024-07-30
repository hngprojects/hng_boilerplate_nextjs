"use client";

import {
  Pagination as PaginationComponent,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

export interface PaginationProperties {
  total: number;
  pageSize: number;
  currentPage: number;
  activeVariant?: "default" | "outline";
  navigationVariant?: "semibold" | "medium";
  onChange?: (page: number) => void;
  previousText?: string;
  nextText?: string;
}

const Pagination = ({
  total,
  pageSize,
  currentPage,
  activeVariant = "default",
  navigationVariant = "medium",
  onChange,
}: PaginationProperties) => {
  const totalPages = Math.ceil(total / pageSize);

  const handleChange = (page: number) => {
    if (onChange) {
      onChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 3;

    if (showEllipsis === false) {
      for (let index = 1; index <= totalPages; index++) {
        pages.push(index);
      }
    } else {
      pages.push(1);
      if (currentPage > 4) {
        pages.push("...");
      }

      const firstPage = Math.max(2, currentPage - 2);
      const lastPage = Math.min(totalPages - 1, currentPage + 2);

      for (let index = firstPage; index <= lastPage; index++) {
        pages.push(index);
      }

      if (currentPage < totalPages - 3) {
        pages.push("...");
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <PaginationComponent>
      <PaginationContent>
        <PaginationItem>
          <div
            onClick={() => currentPage > 1 && handleChange(currentPage - 1)}
            className={`flex items-center ${
              navigationVariant === "semibold"
                ? "text-xl font-semibold leading-normal"
                : "pr-1 text-base font-medium leading-6"
            } ${
              currentPage > 1
                ? "cursor-pointer"
                : "cursor-not-allowed text-stroke-colors-stroke"
            }`}
          >
            {" "}
            <PaginationPrevious
              onClick={() => currentPage > 1 && handleChange(currentPage - 1)}
              className={`${
                navigationVariant === "semibold"
                  ? "text-xl font-semibold leading-normal"
                  : "border-none text-base font-medium leading-6"
              } ${
                currentPage > 1
                  ? "cursor-pointer bg-background"
                  : "cursor-not-allowed bg-background text-stroke-colors-stroke hover:bg-transparent hover:text-stroke-colors-stroke"
              }`}
              href={currentPage > 1 ? `?page=${currentPage - 1}` : "#"}
            ></PaginationPrevious>
            Previous
          </div>
        </PaginationItem>
        {getPageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <PaginationItem key={index} onClick={() => handleChange(page)}>
              <PaginationLink
                href={`?page=${page}`}
                isActive={currentPage === page}
                activeVariant={activeVariant}
                className={
                  currentPage === page && activeVariant === "default"
                    ? "bg-primary"
                    : "bg-inherit text-neutral-800"
                }
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem key={index} className="text-sm font-medium">
              {page}
            </PaginationItem>
          ),
        )}
        <PaginationItem
          onClick={() =>
            currentPage < totalPages && handleChange(currentPage + 1)
          }
        >
          <div
            onClick={() =>
              currentPage < totalPages && handleChange(currentPage + 1)
            }
            className={`flex items-center ${
              navigationVariant === "semibold"
                ? "text-xl font-semibold leading-normal"
                : "text-base font-medium leading-6"
            } ${
              currentPage < totalPages
                ? "cursor-pointer"
                : "cursor-not-allowed text-stroke-colors-stroke hover:bg-transparent hover:text-stroke-colors-stroke"
            }`}
          >
            {" "}
            Next
            <PaginationNext
              className={`${
                navigationVariant === "semibold"
                  ? "text-xl font-semibold leading-normal"
                  : "border-none text-base font-medium leading-6"
              } ${
                currentPage < totalPages
                  ? "cursor-pointer bg-background"
                  : "cursor-not-allowed text-stroke-colors-stroke hover:bg-transparent hover:text-stroke-colors-stroke"
              }`}
              href={currentPage < totalPages ? `?page=${currentPage + 1}` : "#"}
            ></PaginationNext>
          </div>
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
};

export default Pagination;
