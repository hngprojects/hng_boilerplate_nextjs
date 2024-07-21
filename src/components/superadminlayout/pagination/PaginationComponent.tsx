"use client";

import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

export type PaginationType = {
  className?: string;
  currentPage: number;
  totalPages: number;
};

const PaginationComponent = ({
  className,
  currentPage,
  totalPages,
}: PaginationType) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    if (totalPages <= 5) {
      for (let index = 1; index <= totalPages; index++) {
        pageNumbers.push(index);
      }
    } else {
      pageNumbers.push(1);
      if (currentPage > 3) {
        pageNumbers.push(currentPage - 1);
      }
      if (currentPage !== 1 && currentPage !== totalPages) {
        pageNumbers.push(currentPage);
      }
      if (currentPage < totalPages - 2) {
        pageNumbers.push(currentPage + 1);
      }
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  const pageNumbers = getPageNumbers();

  return (
    <Pagination
      className={`text-neutral-colors-dark-2 box-border flex w-full items-center justify-between bg-background py-2 text-sm ${className}`}
    >
      <p className="text-neutral-colors-dark-2 hidden text-[0.875rem] font-semibold md:inline-block">
        Page {currentPage} of {totalPages}
      </p>
      <PaginationContent>
        {pageNumbers.map((pageNumber, index) => (
          <React.Fragment key={pageNumber}>
            {index > 0 && pageNumber - pageNumbers[index - 1] > 1 && (
              <PaginationItem>
                <PaginationEllipsis data-testid="PaginationEllipsis" />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationLink
                href={`?page=${pageNumber}`}
                isActive={pageNumber === currentPage}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          </React.Fragment>
        ))}
      </PaginationContent>

      <div className="flex items-center justify-center gap-2 md:gap-5">
        <PaginationPrevious href={`?page=${Math.max(1, currentPage - 1)}`} />
        <PaginationNext
          href={`?page=${Math.min(totalPages, currentPage + 1)}`}
        />
      </div>
    </Pagination>
  );
};

export default PaginationComponent;
