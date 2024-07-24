import { MoreVertical } from "lucide-react";

import BlurImage from "~/components/miscellaneous/blur-image";
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
  const { updateOpen, updateProductId, product_id } = useProductModal();

  if (!products) return;

  return (
    filteredProducts.length > 0 &&
    subset.length > 0 &&
    subset.map((product) => (
      <TableRow
        key={product.product_id}
        className={cn(
          "bg-white",
          product_id === product.product_id ? "bg-muted/50" : "",
        )}
      >
        <TableCell className="flex items-center justify-start gap-x-2 whitespace-nowrap md:gap-x-4">
          <div className="flex items-center gap-x-2 md:gap-x-4">
            <Input type="checkbox" className="size-5 lg:size-8" />
            <BlurImage
              src={product.image}
              alt="Product"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl object-cover"
            />
          </div>{" "}
          <span
            role="button"
            onClick={() => {
              updateProductId(product.product_id);
              updateOpen(true);
            }}
            className="hide_scrollbar overflow-x-auto text-neutral-dark-2 md:w-[200px] lg:w-[200px]"
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
              <span>{product.name}</span>
            )}
          </span>
        </TableCell>
        <TableCell>{product.product_id}</TableCell>
        <TableCell
          role="button"
          onClick={() => {
            updateProductId(product.product_id);
            updateOpen(true);
          }}
        >
          {product.category}
        </TableCell>
        <TableCell
          role="button"
          onClick={() => {
            updateProductId(product.product_id);
            updateOpen(true);
          }}
        >
          {formatPrice(product.price)}
        </TableCell>
        <TableCell
          role="button"
          onClick={() => {
            updateProductId(product.product_id);
            updateOpen(true);
          }}
        >
          <span
            className={cn(
              "flex items-center gap-x-1 whitespace-nowrap rounded-full px-2 text-sm leading-5 md:gap-x-2",
            )}
          >
            <span
              className={cn("size-4 rounded-full", {
                "bg-[#6DC347]": product.status === "in_stock",
                "bg-[#DC2626]": product.status === "low_on_stock",
                "bg-[#EAB308]": product.status === "out_of_stock",
              })}
            />
            {product.status === "in_stock" && "In Stock"}
            {product.status === "low_on_stock" && "Low on Stock"}
            {product.status === "out_of_stock" && "Out of Stock"}
          </span>
        </TableCell>
        <TableCell className="whitespace-nowrap px-2 py-4 md:gap-x-4 min-[1440px]:px-6">
          <Button variant={"ghost"} size={"icon"}>
            <MoreVertical />
          </Button>
        </TableCell>
      </TableRow>
    ))
  );
};

export default ProductBodyShadcn;
