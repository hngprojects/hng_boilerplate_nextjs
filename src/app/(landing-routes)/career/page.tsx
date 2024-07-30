"use client";

// Career.tsx
import React, { useEffect, useState } from "react";

import CareerCardParent from "~/components/common/CareerCard";
import Pagination from "~/components/layouts/pagination/Pagination";

const ITEMS_PER_PAGE = 6;
const TOTAL_ITEMS = 200;

interface UsePaginationReturn {
  currentPage: number;
  changePage: (page: number) => void;
}

function usePagination(initialPage: number = 1): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const changePage = (page: number) => {
    const pageNumber = Math.max(
      1,
      Math.min(page, Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE)),
    );
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    changePage,
  };
}

interface PaginationWrapperProperties {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationWrapper: React.FC<PaginationWrapperProperties> = ({
  currentPage,
  onPageChange,
}) => {
  return (
    <Pagination
      total={TOTAL_ITEMS}
      pageSize={ITEMS_PER_PAGE}
      currentPage={currentPage}
      onChange={onPageChange}
    />
  );
};

const Career: React.FC = () => {
  const { currentPage, changePage } = usePagination();
  const [visibleJobs, setVisibleJobs] = useState<number[]>([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const newVisibleJobs = Array.from(
      { length: ITEMS_PER_PAGE },
      (_, index) => startIndex + index,
    );
    setVisibleJobs(newVisibleJobs);
  }, [currentPage]);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 md:px-10 lg:px-10 xl:px-10">
      <div className="mb-10 text-center md:mx-auto md:mb-12">
        <p className="mb-8 inline-block rounded-md bg-[#F1F1F1] p-2.5 text-xl font-medium text-neutral-600">
          Career
        </p>
        <h1 className="mb-8 text-4xl font-bold text-neutral-950 md:text-5xl lg:text-6xl">
          Available <span className="text-orange-500">Jobs</span> in Our company
        </h1>
        <p className="text-center text-base font-normal text-neutral-600 md:text-lg">
          Explore job opportunities across various fields that fit for your
          skills and career aspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {visibleJobs.map((jobIndex) => (
          <div key={jobIndex} className="animate-fade-in">
            <CareerCardParent />
          </div>
        ))}
      </div>

      <div className="text-1xl my-5 text-right">
        Showing {Math.min(currentPage * ITEMS_PER_PAGE, TOTAL_ITEMS)} of{" "}
        {TOTAL_ITEMS}
      </div>

      <div className="my-20">
        <PaginationWrapper
          currentPage={currentPage}
          onPageChange={changePage}
        />
      </div>
    </div>
  );
};

export default Career;
