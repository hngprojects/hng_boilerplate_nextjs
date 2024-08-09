import { AnimatePresence, motion } from "framer-motion";
import { Edit2, MoreVertical, Trash } from "lucide-react";
import { useEffect, useRef } from "react";

import BlurImage from "~/components/miscellaneous/blur-image";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { TableCell, TableRow } from "~/components/ui/table";
import { useOrgContext } from "~/contexts/orgContext";
import { cn, formatPrice } from "~/lib/utils";
import { Product } from "~/types";
import { ProductHighlightTerm } from "./product-highlight-term";

interface ProductListRowProperties extends Product {
  searchTerm: string;
  isBottomRow: boolean;
  isActionModal: boolean;
  onOpenActionModal: () => void;
  onCloseActionModal: () => void;
  onEdit: () => void; // (id: string) => void;
  onDelete: () => void; // (id: string) => void;
  onSelect?: () => void; // (id: string) => void;
  onOpenDetails: () => void;
}

export function ProductListRow({
  id,
  price,
  category,
  image,
  searchTerm = "",
  isBottomRow,
  isActionModal,
  onCloseActionModal,
  onOpenActionModal,
  onEdit,
  onDelete,
  name,
  stock_status,
  onOpenDetails,
}: ProductListRowProperties) {
  const { selectedProduct } = useOrgContext();
  const modalReference = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isActionModal || !modalReference.current) return;
    modalReference.current.scrollIntoView({ behavior: "smooth" });

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalReference.current &&
        !modalReference.current.contains(event.target as Node)
      ) {
        onCloseActionModal();
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isActionModal, onCloseActionModal]);
  return (
    <TableRow
      key={id}
      className={cn(
        "relative bg-white",
        selectedProduct === id ? "bg-[#F1F5F9]" : "",
      )}
    >
      <TableCell className="flex items-center justify-start gap-x-2 whitespace-nowrap md:gap-x-4">
        <div className="flex items-center gap-x-1 sm:gap-x-2 md:gap-x-4">
          <Input
            type="checkbox"
            className="sticky left-0 size-4 min-[500px]:size-5 lg:size-8"
          />
          <BlurImage
            src={image}
            alt="Product"
            width={40}
            height={40}
            className="size-6 flex-1 flex-shrink-0 rounded-md object-cover min-[500px]:size-7 md:size-10 md:rounded-xl"
          />
        </div>
        <span
          role="button"
          onClick={onOpenDetails}
          className="hide_scrollbar ml-0.5 w-[110px] whitespace-break-spaces text-[10px] text-neutral-dark-2 min-[376px]:text-xs sm:ml-1 md:w-[200px] md:text-base lg:w-[200px]"
        >
          <ProductHighlightTerm searchTerm={searchTerm} name={name} />
        </span>
      </TableCell>
      <TableCell
        role="button"
        onClick={onOpenDetails}
        className="text-sm uppercase md:text-base"
      >
        {id}
      </TableCell>
      <TableCell
        role="button"
        onClick={onOpenDetails}
        className="text-[10px] min-[376px]:text-xs md:text-base"
      >
        {category}
      </TableCell>
      <TableCell
        role="button"
        onClick={onOpenDetails}
        className="text-[10px] min-[376px]:text-xs md:text-base"
      >
        {formatPrice(price)}
      </TableCell>
      <TableCell role="button" onClick={onOpenDetails}>
        <span
          className={cn(
            "flex items-center gap-x-1 whitespace-nowrap rounded-full px-2 text-[10px] leading-5 min-[376px]:text-xs md:gap-x-2 md:text-base",
          )}
        >
          <span
            className={cn("size-2 rounded-full sm:size-3", {
              "bg-[#6DC347]": stock_status === "in stock",
              "bg-[#DC2626]": stock_status === "out of stock",
              "bg-[#EAB308]": stock_status === "preorder",
            })}
          />
          {stock_status === "in stock" && "In Stock"}
          {stock_status === "preorder" && "Low on Stock"}
          {stock_status === "out of stock" && "Out of Stock"}
        </span>
      </TableCell>
      <TableCell className="relative whitespace-nowrap px-2 py-4 md:gap-x-4 min-[1440px]:px-6">
        <Button onClick={onOpenActionModal} variant={"ghost"} size={"icon"}>
          <MoreVertical />
        </Button>
        <AnimatePresence>
          {isActionModal && selectedProduct === id && (
            <motion.div
              ref={modalReference}
              initial={{ opacity: 0, y: -20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: -20, x: 20 }}
              className={cn(
                "absolute right-16 z-30 flex w-[121px] flex-col justify-between gap-y-1 rounded-[6px] border border-gray-300 bg-white/80 shadow-[0px_1px_18px_0px_rgba(10,_57,_176,_0.12)] backdrop-blur-sm sm:w-full sm:max-w-[121px]",
                isBottomRow ? "bottom-[3.7rem]" : "-bottom-[5.5rem]",
              )}
            >
              <span className="border-b border-gray-200 px-2 py-2 text-sm font-semibold text-neutral-dark-2 md:px-4">
                Actions
              </span>
              <div className="flex flex-col">
                <Button
                  variant="ghost"
                  onClick={onEdit}
                  size={"sm"}
                  className={cn(
                    "flex h-8 cursor-pointer items-center justify-start gap-x-2 px-2 py-1 text-xs min-[500px]:text-sm",
                  )}
                >
                  <Edit2 className={cn("size-4")} />

                  <span>Edit</span>
                </Button>
                <Button
                  onClick={onDelete}
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
  );
}
