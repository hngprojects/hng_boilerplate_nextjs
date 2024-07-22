import { ChevronLeft, ChevronRight } from "lucide-react";

import Button from "../Button/button";

interface PaginationProperties {
  currentPage: number;
  totalPages: number;
  onPageChange: (currentPage: number) => void;
  nextPage: () => void;
  previousPage: () => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  nextPage,
  previousPage,
}: PaginationProperties) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 5;
    const halfWindow = Math.floor(maxPageNumbersToShow / 2);

    let startPage = Math.max(1, currentPage - halfWindow);
    let endPage = Math.min(totalPages, currentPage + halfWindow);

    if (currentPage - 1 <= halfWindow) {
      endPage = Math.min(totalPages, maxPageNumbersToShow);
    }

    if (totalPages - currentPage <= halfWindow) {
      startPage = Math.max(1, totalPages - maxPageNumbersToShow + 1);
    }

    if (startPage > 1) {
      pageNumbers.push(1);
      if (startPage > 2) {
        pageNumbers.push("...");
      }
    }

    for (let index = startPage; index <= endPage; index++) {
      pageNumbers.push(index);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="flex w-full items-center justify-between py-2">
      <div>
        <p className="text-sm font-semibold text-[#0A0A0A]">
          Page {currentPage} of {totalPages}
        </p>
      </div>
      <div className="flex items-center gap-1">
        {getPageNumbers().map((number, index) => (
          <Button
            key={index}
            variant={currentPage === number ? "primary" : "outline"}
            onClick={() => number !== "..." && onPageChange(number as number)}
            className={`${currentPage === number ? "border border-primary bg-[#FFECE5] text-gray-700" : ""}`}
          >
            {number}
          </Button>
        ))}
      </div>
      <div className="flex gap-6">
        <Button
          variant="outline"
          onClick={previousPage}
          isDisabled={currentPage === 1}
        >
          <ChevronLeft data-testid="prev-button" />
        </Button>
        <Button
          variant="outline"
          onClick={nextPage}
          isDisabled={currentPage === totalPages}
        >
          <ChevronRight data-testid="next-button" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
