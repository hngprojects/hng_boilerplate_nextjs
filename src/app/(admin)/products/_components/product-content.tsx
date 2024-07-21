import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";

import BlurImage from "~/components/miscellaneous/blur-image";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn, formatPrice } from "~/lib/utils";
import {
  PRODUCT_NAV,
  PRODUCT_TABLE,
  type ProductTableProperties,
} from "../data/product.mock";

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
    if (PRODUCT_TABLE.length === 0) return [];
    return PRODUCT_TABLE.filter((product) => {
      if (!(searchTerm.length > 1) || PRODUCT_TABLE.length === 0) {
        return product;
      }
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }, [searchTerm]);

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
      <div className="show_scrollbar w-[calc(100%)]x w-fullx overflow-x-auto rounded-xl border border-gray-300 bg-[#F1F5F9] pt-4">
        <AnimatePresence>
          {view === "list" && (
            <table className="w-full max-w-full">
              <thead className="">
                <tr>
                  {PRODUCT_NAV.map((item) => (
                    <th
                      key={item.name}
                      className={cn(
                        "whitespace-nowrap px-4 py-3 text-left text-sm font-medium tracking-wider xl:px-6",
                        item.name === "product_name" ? "text-center" : "",
                      )}
                    >
                      {item.label}
                    </th>
                  ))}
                </tr>
              </thead>

              <motion.tbody
                initial="productCards"
                animate="whileInView"
                whileInView="whileInView"
                transition={{ duration: 0.2, staggerChildren: 0.15 }}
                className="min-h-[400px] w-full divide-y divide-gray-200 overflow-hidden bg-white"
              >
                <AnimatePresence>
                  {filteredProducts.length > 0 &&
                    subset.length > 0 &&
                    subset.map((product) => (
                      <motion.tr
                        layout
                        layoutId={product.product_id}
                        key={product.product_id}
                        variants={{
                          productCards: {
                            opacity: 0,
                            y: 30,
                          },
                          whileInView: {
                            opacity: 1,
                            y: 0,
                          },
                        }}
                        transition={{
                          type: "spring",
                          mass: 2,
                          // stiffness: 200,
                          damping: 30,
                        }}
                        viewport={{ once: true }}
                        className="transition-colors hover:bg-[#F1F5F9]"
                      >
                        <td className="flex items-center justify-start gap-x-2 whitespace-nowrap px-4 py-4 md:gap-x-4 xl:px-6">
                          <div className="flex items-center gap-x-2 md:gap-x-4">
                            <Input
                              type="checkbox"
                              className="size-4 lg:size-5"
                            />
                            <BlurImage
                              src={product.image}
                              alt="Product"
                              width={40}
                              height={40}
                              className="h-10 w-10 rounded-lg"
                            />
                          </div>
                          <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900 xl:px-6">
                            <span>
                              {searchTerm.length > 1 ? (
                                <span
                                  className={cn(
                                    "",
                                    searchTerm.length > 2
                                      ? "w-[50px] overflow-x-auto"
                                      : "",
                                  )}
                                  dangerouslySetInnerHTML={{
                                    __html: product.name!.replaceAll(
                                      new RegExp(`(${searchTerm})`, "gi"),
                                      (match, group) =>
                                        `<span  style="color: black; background-color: ${
                                          group.toLowerCase() ===
                                          searchTerm.toLowerCase()
                                            ? "yellow"
                                            : "inherit"
                                        }">${match}</span>`,
                                    ),
                                  }}
                                />
                              ) : (
                                <span>{product.name}</span>
                              )}
                            </span>
                          </td>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 xl:px-6">
                          {product.product_id}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 xl:px-6">
                          {product.category}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500 xl:px-6">
                          {formatPrice(product.price)}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 xl:px-6">
                          <span
                            className={cn(
                              "flex items-center gap-x-1 rounded-full px-2 text-sm leading-5 md:gap-x-2",
                            )}
                          >
                            <span
                              className={cn("size-4 rounded-full", {
                                "bg-[#6DC347]": product.stock === "in_stock",
                                "bg-[#DC2626]":
                                  product.stock === "low_on_stock",
                                "bg-[#EAB308]":
                                  product.stock === "out_of_stock",
                              })}
                            />
                            {product.stock === "in_stock" && "In Stock"}
                            {product.stock === "low_on_stock" && "Low on Stock"}
                            {product.stock === "out_of_stock" && "Out of Stock"}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 xl:px-6">
                          <Button variant={"ghost"} size={"icon"}>
                            <MoreVertical />
                          </Button>
                        </td>
                      </motion.tr>
                    ))}
                </AnimatePresence>
              </motion.tbody>
            </table>
          )}
        </AnimatePresence>
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
        {filteredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 flex w-full justify-end md:mt-12"
          >
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
