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

  const handleChange = (page: number) => {
    if (onChange) {
      onChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis: boolean = totalPages > 3;

    if (showEllipsis === undefined) {
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
          <PaginationPrevious
            onClick={() => currentPage > 1 && handleChange(currentPage - 1)}
            className={`cursor-pointer ${
              navigationVariant === "semibold"
                ? "text-xl font-semibold leading-normal"
                : "text-base font-medium leading-6"
            } ${
              currentPage > 1
                ? "cursor-pointer"
                : "cursor-not-allowed text-stroke-colors-stroke hover:bg-transparent hover:text-stroke-colors-stroke"
            }`}
          />
        </PaginationItem>
        {getPageNumbers().map((page, index) =>
          typeof page === "number" ? (
            <PaginationItem key={index} onClick={() => handleChange(page)}>
              <PaginationLink
                isActive={currentPage === page}
                activeVariant={activeVariant}
                className={`cursor-pointer ${
                  currentPage === page && activeVariant === "default"
                    ? "bg-primary"
                    : ""
                }`}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ) : (
            <PaginationItem
              key={index}
              className="cursor-pointer text-sm font-medium"
            >
              {page}
            </PaginationItem>
          ),
        )}
        <PaginationItem
          onClick={() =>
            currentPage < totalPages && handleChange(currentPage + 1)
          }
        >
          <PaginationNext
            className={`cursor-pointer ${
              navigationVariant === "semibold"
                ? "text-xl font-semibold leading-normal"
                : "text-base font-medium leading-6"
            } ${
              currentPage < totalPages
                ? "cursor-pointer"
                : "cursor-not-allowed text-stroke-colors-stroke hover:bg-transparent hover:text-stroke-colors-stroke"
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </PaginationComponent>
  );
};

export default Pagination;
