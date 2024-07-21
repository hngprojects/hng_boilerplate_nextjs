import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import BlurImage from "~/components/miscellaneous/blur-image";
import { Button } from "~/components/ui/button";
import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { useProducts } from "~/hooks/admin-product/use-products.persistence";
import { formatPrice } from "~/lib/utils";

const ProductDetailView = () => {
  const { products } = useProducts();
  const { product_id, updateProductId, updateOpen, isOpen } = useProductModal();

  const product = products?.find(
    (product) => product.product_id === product_id,
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="hidden w-full min-w-[350px] max-w-[403px] flex-col gap-y-5 rounded-xl border border-gray-300 bg-white px-2 py-4 shadow-[0px_1px_18px_0px_rgba(10,_57,_176,_0.12)] xl:flex xl:w-[403px] xl:px-4"
        >
          <div className="flex w-full items-center justify-between">
            <h2 className="text-xl font-semibold xl:text-2xl min-[1400px]:text-[30px]">
              {product?.name}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                updateProductId("");
                updateOpen(false);
              }}
            >
              <X className="xl:size-6" />
            </Button>
          </div>
          <BlurImage
            src={product!.image!}
            alt={product!.name}
            width={403}
            height={153}
          />
          <span className="h-[1px] w-full bg-gray-300/80" />
          <div className="flex flex-col gap-y-4">
            <p className="flex w-full items-center justify-between">
              <span className="text-neutral-dark-1">Product ID</span>
              <span className="text-neutral-dark-2">{product?.product_id}</span>
            </p>
            <p className="flex w-full items-center justify-between">
              <span className="text-neutral-dark-1">Category</span>
              <span className="text-neutral-dark-2">{product?.category}</span>
            </p>
            <p className="flex w-full items-center justify-between">
              <span className="text-neutral-dark-1">Date added</span>
              <span className="text-neutral-dark-2">
                {product?.date_added}, {product?.time}
              </span>
            </p>
            <p className="flex w-full items-center justify-between">
              <span className="text-neutral-dark-1">Stock</span>
              <span className="text-neutral-dark-2">
                {product?.stock} {product!.stock! > 1 ? "pcs" : "pc"}
              </span>
            </p>
            <p className="flex w-full items-center justify-between">
              <span className="text-neutral-dark-1">Stock</span>
              <span className="text-neutral-dark-2">
                {formatPrice(product!.price! ?? 0)}
              </span>
            </p>
          </div>
          <span className="h-[1px] w-full bg-gray-300/80" />
          <div className="flex flex-col gap-y-2 bg-[#fafafa] p-2 text-sm xl:p-4">
            <p className="text-neutral-dark-2">Description</p>
            <p className="text-neutral-dark-1">{product?.description}</p>
          </div>
          <span className="h-[1px] w-full bg-gray-300/80" />
          <div className="flex w-full items-center justify-end gap-x-2">
            <Button
              variant="outline"
              className="bg-white font-medium text-error"
            >
              Delete
            </Button>
            <Button variant="outline" className="bg-white font-medium">
              Edit
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailView;
