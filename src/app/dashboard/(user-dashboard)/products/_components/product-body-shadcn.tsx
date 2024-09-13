/* eslint-disable react-hooks/exhaustive-deps */
import { AnimatePresence, motion } from "framer-motion";
import { Edit2, MoreVertical, Trash } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useRef } from "react";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { TableCell, TableRow } from "~/components/ui/table";
import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { useProducts } from "~/hooks/admin-product/use-products.persistence";
import { cn, formatPrice } from "~/lib/utils";
import { ProductTableProperties } from "~/types/admin-product.types";

type Properties = {
  subset: ProductTableProperties[];
  filteredProducts: ProductTableProperties[];
  searchTerm: string;
};

const ProductBodyShadcn = ({
  subset,
  filteredProducts,
  searchTerm,
}: Properties) => {
  const { products } = useProducts();
  const {
    updateOpen,
    updateProductId,
    product_id,
    isActionModal,
    setIsActionModal,
    setIsDelete,
  } = useProductModal();
  const modalReference = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isActionModal || !modalReference.current) return;
    modalReference.current.scrollIntoView({ behavior: "smooth" });
    // handle click outside modal
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalReference.current &&
        !modalReference.current.contains(event.target as Node)
      ) {
        setIsActionModal(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isActionModal]);
  if (!products) return;
  const handleOpenDetail = (product_id: string) => {
    setIsActionModal(false);
    updateProductId(product_id);
    updateOpen(true);
  };
  const handleDeleteAction = (id: string) => {
    setIsActionModal(false);
    updateProductId(id);
    setIsDelete(true);
  };
  const handleEditAction = (id: string) => {
    setIsActionModal(false);
    router.push(`/dashboard/products/${id}`);
  };

  return (
    filteredProducts.length > 0 &&
    subset.length > 0 &&
    subset.map((product, index) => (
      <TableRow
        key={product.product_id}
        className={cn(
          "relative bg-white",
          product_id === product.product_id ? "bg-[#F1F5F9]" : "",
        )}
      >
        <TableCell className="flex items-center justify-start gap-x-2 whitespace-nowrap md:gap-x-4">
          <div className="flex items-center gap-x-1 sm:gap-x-2 md:gap-x-4">
            <Input
              type="checkbox"
              className="sticky left-0 size-4 min-[500px]:size-5 lg:size-8"
            />
          </div>{" "}
          <span
            role="button"
            onClick={() => handleOpenDetail(product.product_id)}
            className="hide_scrollbar ml-0.5 w-[110px] whitespace-break-spaces text-[10px] text-neutral-dark-2 min-[376px]:text-xs sm:ml-1 md:w-[200px] md:text-base lg:w-[200px]"
          >
            {searchTerm.length > 1 ? (
              <span
                className={cn(
                  "",
                  searchTerm.length > 2 ? "w-[50px] overflow-x-auto" : "",
                )}
                dangerouslySetInnerHTML={{
                  __html: product.name!.replaceAll(
                    new RegExp(`(${searchTerm})`, "gi"),
                    (match, group) =>
                      `<span  style="color: black; background-color: ${
                        group.toLowerCase() === searchTerm.toLowerCase()
                          ? "yellow"
                          : "inherit"
                      }">${match}</span>`,
                  ),
                }}
              />
            ) : (
              <span className="">{product.name}</span>
            )}
          </span>
        </TableCell>
        <TableCell
          role="button"
          onClick={() => handleOpenDetail(product.product_id)}
          className="text-sm uppercase md:text-base"
        >
          {product.product_id}
        </TableCell>
        <TableCell
          role="button"
          onClick={() => handleOpenDetail(product.product_id)}
          className="text-[10px] min-[376px]:text-xs md:text-base"
        >
          {product.category}
        </TableCell>
        <TableCell
          role="button"
          onClick={() => handleOpenDetail(product.product_id)}
          className="text-[10px] min-[376px]:text-xs md:text-base"
        >
          {formatPrice(product.price)}
        </TableCell>
        <TableCell
          role="button"
          onClick={() => handleOpenDetail(product.product_id)}
        >
          <span
            className={cn(
              "flex items-center gap-x-1 whitespace-nowrap rounded-full px-2 text-[10px] leading-5 min-[376px]:text-xs md:gap-x-2 md:text-base",
            )}
          >
            <span
              className={cn("size-2 rounded-full sm:size-3", {
                "bg-[#6DC347]": product.status === "in_stock",
                "bg-[#DC2626]": product.status === "out_of_stock",
                "bg-[#EAB308]": product.status === "low_on_stock",
              })}
            />
            {product.status === "in_stock" && "In Stock"}
            {product.status === "low_on_stock" && "Low on Stock"}
            {product.status === "out_of_stock" && "Out of Stock"}
          </span>
        </TableCell>
        <TableCell className="relative whitespace-nowrap px-2 py-4 md:gap-x-4 min-[1440px]:px-6">
          <Button
            onClick={() => {
              updateProductId(product.product_id);
              setIsActionModal(!isActionModal);
            }}
            variant={"ghost"}
            size={"icon"}
          >
            <MoreVertical />
          </Button>
          <AnimatePresence>
            {isActionModal && product_id === product.product_id && (
              <motion.div
                ref={modalReference}
                initial={{ opacity: 0, y: -20, x: 20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -20, x: 20 }}
                className={cn(
                  "absolute right-16 z-30 flex w-[121px] flex-col justify-between gap-y-1 rounded-[6px] border border-gray-300 bg-white/80 shadow-[0px_1px_18px_0px_rgba(10,_57,_176,_0.12)] backdrop-blur-sm sm:w-full sm:max-w-[121px]",
                  index === subset.length - 1 || index === subset.length - 2
                    ? "bottom-[3.7rem]"
                    : "-bottom-[5.5rem]",
                )}
              >
                <span className="border-b border-gray-200 px-2 py-2 text-sm font-semibold text-neutral-dark-2 md:px-4">
                  Actions
                </span>
                <div className="flex flex-col">
                  <Button
                    variant="ghost"
                    onClick={() => handleEditAction(product.product_id)}
                    size={"sm"}
                    className={cn(
                      "flex h-8 cursor-pointer items-center justify-start gap-x-2 px-2 py-1 text-xs min-[500px]:text-sm",
                    )}
                  >
                    <Edit2 className={cn("size-4")} />

                    <span>Edit</span>
                  </Button>
                  <Button
                    onClick={() => handleDeleteAction(product.product_id)}
                    variant="ghost"
                    size={"sm"}
                    className={cn(
                      "flex h-8 cursor-pointer items-center justify-start gap-x-2 px-2 py-1 text-xs text-red-500 min-[500px]:text-sm",
                    )}
                  >
                    <Trash className={cn("size-4")} />

                    <span>Delete</span>
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </TableCell>
      </TableRow>
    ))
  );
};

export default ProductBodyShadcn;
