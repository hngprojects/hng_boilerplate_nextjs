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

  const handleChange = (page: number, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }
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
            className={`flex cursor-pointer items-center pr-2 ${
              navigationVariant === "semibold"
                ? "pr-1 text-xl font-semibold leading-normal"
                : "text-base font-medium leading-6 hover:bg-transparent"
            } ${
              currentPage > 1
                ? "cursor-pointer"
                : "cursor-not-allowed text-stroke-colors-stroke hover:bg-transparent hover:text-stroke-colors-stroke"
            }`}
            onClick={() => currentPage > 1 && handleChange(currentPage - 1)}
          >
            <PaginationPrevious
              className={`${
                navigationVariant === "semibold"
                  ? "border-none bg-inherit text-xl font-semibold leading-normal"
                  : "border-none bg-inherit text-base font-medium leading-6"
              } ${
                currentPage > 1
                  ? "cursor-pointer border-none bg-inherit"
                  : "cursor-not-allowed text-stroke-colors-stroke hover:bg-transparent hover:text-stroke-colors-stroke"
              }`}
              onClick={(event) => {
                event.preventDefault();
                if (currentPage > 1) handleChange(currentPage - 1);
              }}
            />
            Previous
          </div>
        </PaginationItem>

        {getPageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <PaginationItem key={index} onClick={() => handleChange(page)}>
              <PaginationLink
                onClick={(event) => {
                  event.preventDefault();
                  handleChange(page);
                }}
                isActive={currentPage === page}
                activeVariant={activeVariant}
                className={
                  currentPage === page && activeVariant === "default"
                    ? "cursor-pointer bg-primary"
                    : "cursor-pointer border-none bg-inherit text-neutral-dark-1"
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
            className={`flex items-center pl-2${
              navigationVariant === "semibold"
                ? "text-xl font-semibold leading-normal"
                : "text-base font-medium leading-6"
            } ${
              currentPage < totalPages
                ? "cursor-pointer hover:bg-transparent"
                : "cursor-not-allowed text-stroke-colors-stroke hover:bg-transparent hover:text-stroke-colors-stroke"
            }`}
          >
            {" "}
            Next
            <PaginationNext
              className={`${
                navigationVariant === "semibold"
                  ? "border-none bg-inherit text-xl font-semibold leading-normal"
                  : "text-base font-medium leading-6"
              } ${
                currentPage < totalPages
                  ? "cursor-pointer border-none bg-inherit"
                  : "cursor-not-allowed border-none bg-inherit text-stroke-colors-stroke hover:bg-transparent hover:text-stroke-colors-stroke"
              }`}
              onClick={(event) => {
                event.preventDefault();
                if (currentPage < totalPages) handleChange(currentPage + 1);
              }}
            />{" "}
          </div>
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
};

export default Pagination;
