"use client";

import { ChevronRight, Loader } from "lucide-react";

import { useProducts } from "~/hooks/admin-product/use-products.persistence";
import ProductDetailsComponent from "./product-details-component";

const ProductDetailsContent = ({ productId }: { productId: string }) => {
  const { products } = useProducts();
  const product = products?.find((p) => p.product_id === productId);

  if (!product)
    return (
      <div>
        <p className="flex items-center gap-x-2 text-neutral-dark-2">
          <span className="animate-pulse">Loading...</span>{" "}
          <Loader className="size-4 animate-spin sm:size-5" />.
        </p>
      </div>
    );

  return (
    <div className="relative flex w-full flex-col gap-y-8 px-2 py-4 sm:px-4 sm:py-8 md:gap-y-12 md:pb-20">
      <div className="flex w-fit items-center gap-x-2 rounded-md border bg-[#fafafa] px-2 py-2 text-sm sm:px-4">
        <span className="font-medium text-neutral-dark-2 md:font-semibold">
          Products
        </span>
        <ChevronRight className="size-3 text-neutral-dark-1 sm:size-4" />
        <span className="text-neutral-dark-1">Product Details</span>
      </div>
      <ProductDetailsComponent product={product} />
    </div>
  );
};

export default ProductDetailsContent;
