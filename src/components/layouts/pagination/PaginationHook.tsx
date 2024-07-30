// usePagination.ts
import { useEffect, useState } from "react";

interface UsePaginationProperties {
  totalItems: number;
  itemsPerPage: number;
  initialPage?: number;
}

interface UsePaginationReturn {
  currentPage: number;
  pageCount: number;
  changePage: (page: number) => void;
}

export function usePagination({
  totalItems,
  itemsPerPage,
  initialPage = 1,
}: UsePaginationProperties): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [pageCount, setPageCount] = useState<number>(0);

  useEffect(() => {
    setPageCount(Math.ceil(totalItems / itemsPerPage));
  }, [totalItems, itemsPerPage]);

  const changePage = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, pageCount));
    setCurrentPage(pageNumber);
  };

  return {
    currentPage,
    pageCount,
    changePage,
  };
}
