"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

import { Post } from "~/app/(landing-routes)/blog/page";

interface PaginationProperties {
  blogs: Post[];
  currentPage: number;
}

export default function Pagination({
  blogs,
  currentPage,
}: PaginationProperties) {
  const router = useRouter();
  const firstPageCount = 11;
  const subsequentPageCount = 12;
  const totalPages =
    Math.ceil((blogs.length - firstPageCount) / subsequentPageCount) + 1;

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      router.push(`?page=${currentPage + 1}`);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      router.push(`?page=${currentPage - 1}`);
    }
  };

  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];
    const maxVisiblePages = 3;

    if (totalPages <= maxVisiblePages + 2) {
      for (let index = 1; index <= totalPages; index++) {
        pageNumbers.push(index);
      }
    } else {
      if (currentPage <= 3) {
        // First 3 pages
        for (let index = 1; index <= 3; index++) {
          pageNumbers.push(index);
        }
        pageNumbers.push("...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Last 3 pages
        pageNumbers.push(1, "...");
        for (let index = totalPages - 2; index <= totalPages; index++) {
          pageNumbers.push(index);
        }
      } else {
        // Middle pages
        pageNumbers.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages,
        );
      }
    }

    return pageNumbers;
  };

  return (
    <div className="mt-12 flex justify-center">
      <nav className="flex items-center space-x-2">
        <button
          className={`flex items-center gap-1 px-2 py-2 font-semibold text-neutral-dark-1 transition duration-200 ease-in hover:text-black disabled:cursor-not-allowed disabled:opacity-50`}
          disabled={currentPage <= 1}
          onClick={handlePreviousPage}
        >
          <ChevronLeft size={14} className="text-neutral-dark-1" />
          <span className="hidden md:block">Previous</span>
        </button>
        {getPageNumbers().map((pageNumber, index) =>
          pageNumber === "..." ? (
            <span key={index}>...</span>
          ) : (
            <button
              key={index}
              className={`rounded py-2 transition duration-200 ease-in ${currentPage === pageNumber ? "bg-primary px-4 text-white" : "px-3 hover:bg-primary hover:text-white"}`}
              onClick={() => handlePageChange(pageNumber as number)}
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          ),
        )}
        <button
          className={`flex items-center gap-1 px-2 py-2 font-semibold text-neutral-dark-1 transition duration-200 ease-in hover:text-black disabled:cursor-not-allowed disabled:opacity-50`}
          disabled={currentPage >= totalPages}
          onClick={handleNextPage}
        >
          <span className="hidden md:block">Next</span>
          <ChevronRight size={14} className="text-neutral-dark-1" />
        </button>
      </nav>
    </div>
  );
}
