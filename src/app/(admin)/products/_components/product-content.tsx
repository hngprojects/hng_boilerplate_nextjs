import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import ProductCardSkeleton from "~/components/skeleton/product.skeleton";
import { useProducts } from "~/hooks/admin-product/use-products.persistence";
import { cn } from "~/lib/utils";
import { ProductTableProperties } from "~/types/admin-product.types";
import { PRODUCT_NAV } from "../data/product.mock";
import ProductBody from "./product-body";

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

  const [subset, setSubset] = useState<ProductTableProperties[]>([]);

  const startIndex = currentPage * Number(perPage);
  const endIndex = startIndex + Number(perPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window?.scrollTo({ top: 0, behavior: "smooth" });
  };

  // filter by search term
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (products.length === 0) return [];
    return products.filter((product) => {
      if (!(searchTerm.length > 1) || products.length === 0) {
        return product;
      }
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm, products]);

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
      <div className="show_scrollbar w-[calc(100%)]x w-fullx overflow-x-autox rounded-xl border border-gray-300 bg-[#F1F5F9] pt-4">
        <AnimatePresence>
          {view === "list" && (
            <table className="relative w-full max-w-full">
              <thead className="">
                <tr>
                  {PRODUCT_NAV.map((item) => (
                    <th
                      key={item.name}
                      className={cn(
                        "whitespace-nowrap px-2 py-3 text-left text-sm font-medium tracking-wider min-[1440px]:px-6",
                        item.name === "product_name" ? "text-center" : "",
                      )}
                    >
                      {item.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <ProductBody
                filteredProducts={filteredProducts}
                searchTerm={searchTerm}
                subset={subset}
              />
            </table>
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
              <p className="text-sm font-medium text-neutral-dark-1">
                Showing{" "}
                <span className="text-lg font-bold text-neutral-950">
                  {startIndex + 1}
                </span>{" "}
                to{" "}
                <span className="text-lg font-bold text-neutral-950">
                  {endIndex > filteredProducts.length
                    ? filteredProducts.length
                    : endIndex}
                </span>{" "}
                of{" "}
                <span className="text-lg font-bold text-neutral-950">
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>
            </div>
            {totalPages > 1 && (
              <Pagination
                breakLabel="..."
                nextLabel={
                  <span className="ml-5 flex items-center gap-x-1">
                    Next
                    <ChevronRight />
                  </span>
                }
                previousLabel={
                  <span className="mr-5 flex items-center gap-x-1">
                    <ChevronLeft />
                    Previous
                  </span>
                }
                previousAriaLabel="Previous"
                nextAriaLabel="Next"
                pageCount={totalPages}
                onPageChange={handlePageChange}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                className="flex select-none items-center justify-center rounded-md px-4"
                pageClassName="w-8 h-8 flex justify-center items-center  "
                previousClassName="pr-2 lg:pr-4 text-accent-orange  font-medium"
                nextClassName="pl-2 lg:pl-4 text-accent-orange font-medium"
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
