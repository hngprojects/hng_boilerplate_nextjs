import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import ProductCardSkeleton from "~/components/skeleton/product.skeleton";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { useProductsFilters } from "~/hooks/admin-product/use-products.-filters.persistence";
import { useProducts } from "~/hooks/admin-product/use-products.persistence";
import { cn } from "~/lib/utils";
import { ProductTableProperties } from "~/types/admin-product.types";
import ProductBodyShadcn from "./product-body-shadcn";

const Pagination = dynamic(() => import("react-paginate"), {
  ssr: false,
  loading: () => <LoadingSpinner />,
});

const ProductContent = ({
  searchTerm,
  view,
}: {
  searchTerm: string;
  view: "list" | "grid";
}) => {
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const { products } = useProducts();
  const [perPage, setPerPage] = useState("10");
  const { isOpen } = useProductModal();
  const { active_filter } = useProductsFilters();

  const [subset, setSubset] = useState<ProductTableProperties[]>([]);

  const startIndex = currentPage * Number(perPage);
  const endIndex = startIndex + Number(perPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };
  // filter by active filter
  const filteredProductsByActiveFilter = useMemo(() => {
    if (!products) return [];
    if (products.length === 0) return [];
    return products.filter((product) => {
      if (active_filter === "all") return product;
      return product.status === active_filter;
    });
  }, [active_filter, products]);

  // filter by search term
  const filteredProducts = useMemo(() => {
    if (!filteredProductsByActiveFilter) return [];
    if (filteredProductsByActiveFilter.length === 0) return [];
    return filteredProductsByActiveFilter.filter((product) => {
      if (
        !(searchTerm.length > 1) ||
        filteredProductsByActiveFilter.length === 0
      ) {
        return product;
      }
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm, filteredProductsByActiveFilter]);

  useEffect(() => {
    if (filteredProducts.length === 0) return;
    setTotalPages(Math.ceil(filteredProducts.length / Number(perPage)));
    setSubset(filteredProducts.slice(startIndex, endIndex));
  }, [filteredProducts, perPage, startIndex, endIndex]);

  useEffect(() => {
    const perPage = localStorage.getItem("perPage");
    if (perPage && typeof perPage === "string") {
      setPerPage(perPage);
      return;
    }
  }, []);

  return (
    <div className="relative flex w-full flex-col overflow-hidden pb-10">
      <div
        className={cn(
          "show_scrollbar rounded-xl border border-gray-300 bg-[#F1F5F9] pt-4",
          isOpen
            ? "max-w-full lg:max-w-[600px] min-[1090px]:max-w-[650px] min-[1150px]:max-w-[750px] min-[1200px]:max-w-[800px] xl:max-w-full"
            : "max- w-full",
        )}
      >
        <AnimatePresence>
          {view === "list" && (
            <Table divClassName={cn("relative")}>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] overflow-x-auto text-center md:w-[200px] lg:w-[200px]">
                    Product Name
                  </TableHead>
                  <TableHead className="whitespace-nowrap">
                    Product ID
                  </TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="w-full">
                <ProductBodyShadcn
                  subset={subset}
                  filteredProducts={filteredProducts}
                  searchTerm={searchTerm}
                />
              </TableBody>
            </Table>
          )}
        </AnimatePresence>
        {!products && <ProductCardSkeleton count={9} />}
        {filteredProducts.length === 0 && searchTerm.length > 1 && (
          <div className="flex h-[400px] w-full items-center justify-center bg-white">
            <p className="w-full text-center">
              No product found for &quot;
              <span className="font-bold">{searchTerm}</span>
              &quot;
            </p>
          </div>
        )}
      </div>
      <AnimatePresence>
        {products && filteredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 flex w-full justify-between md:mt-12"
          >
            <div className="flex items-center gap-x-4">
              <p className="text-xs font-medium text-neutral-dark-1 md:text-sm">
                Showing{" "}
                <span className="text-sm font-bold text-neutral-950 md:text-lg">
                  {startIndex + 1}
                </span>{" "}
                to{" "}
                <span className="text-sm font-bold text-neutral-950 md:text-lg">
                  {endIndex > filteredProducts.length
                    ? filteredProducts.length
                    : endIndex}
                </span>{" "}
                of{" "}
                <span className="text-sm font-bold text-neutral-950 md:text-lg">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>
            </div>
            {totalPages > 1 && (
              <Pagination
                breakLabel="..."
                nextLabel={
                  <span className="flex items-center gap-x-1 text-sm md:ml-5 md:text-base">
                    <span className="hidden min-[500px]:inline">Next</span>
                    <ChevronRight />
                  </span>
                }
                previousLabel={
                  <span className="flex items-center gap-x-1 text-sm md:mr-5 md:text-base">
                    <ChevronLeft />
                    <span className="hidden min-[500px]:inline">Previous</span>
                  </span>
                }
                previousAriaLabel="Previous"
                nextAriaLabel="Next"
                pageCount={totalPages}
                onPageChange={handlePageChange}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                className="flex select-none items-center justify-center rounded-md md:px-4"
                pageClassName="size-6 md:size-8 flex justify-center items-center  "
                previousClassName="pr-2 lg:pr-4 text-sm md:text-base  font-medium"
                nextClassName="pl-2 lg:pl-4 text-sm md:text-base font-medium"
                pageLinkClassName="  w-full h-full flex items-center justify-center"
                activeClassName="bg-transparent  !text-black border   font-medium rounded-md mx-4"
                renderOnZeroPageCount={undefined}
                disabledClassName="cursor-not-allowed opacity-70"
                disabledLinkClassName="cursor-not-allowed opacity-70"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductContent;
