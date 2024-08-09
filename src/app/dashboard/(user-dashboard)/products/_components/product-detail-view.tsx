"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useRouter } from "next-nprogress-bar";
import { useEffect, useTransition } from "react";

import { deleteProduct } from "~/actions/product";
import BlurImage from "~/components/miscellaneous/blur-image";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/use-toast";
import { useOrgContext } from "~/contexts/orgContext";
import { useLocalStorage } from "~/hooks/use-local-storage";
import { cn, formatPrice } from "~/lib/utils";

const ProductDetailView = () => {
  const {
    products,
    selectedProduct,
    isDelete,
    setIsDelete,
    updateOpen,
    isOpen,
  } = useOrgContext();
  const router = useRouter();

  const [isLoading, startTransition] = useTransition();

  const product = products.find((p) => p.id === selectedProduct);
  const [org_id] = useLocalStorage<string>("current_orgid", "");

  const handleDelete = async () => {
    toast({
      title: "Deleting product",
      description: "Please wait...",
      variant: "destructive",
    });

    startTransition(async () => {
      await deleteProduct(org_id, selectedProduct).then((data) => {
        if (data.status === 200) {
          toast({
            title: "Product deleted",
            description: "Product deleted successfully.",
          });
        } else {
          toast({
            title: "Error",
            description: data.error || "An unexpected error occurred.",
            variant: "destructive",
          });
        }
        setIsDelete(false);
      });
    });
  };
  const handleEditAction = (id: string) => {
    setIsDelete(false);
    router.push(`/dashboard/products/${id}`);
  };

  useEffect(() => {
    document.title = isOpen
      ? `Product - ${product?.name}`
      : "Products - HNG Boilerplate";
  }, [isOpen, product?.name]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="sticky top-0 hidden w-full min-w-[340px] flex-col gap-y-5 rounded-[6px] border border-gray-300 bg-white px-2 py-4 shadow-[0px_1px_18px_0px_rgba(10,_57,_176,_0.12)] lg:flex lg:max-w-[370px] xl:w-[403px] xl:px-4"
        >
          <div
            className={cn(
              "absolute left-1/2 top-1/2 flex w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col gap-y-5 border bg-white/80 py-5 shadow-[0px_1px_18px_0px_rgba(10,_57,_176,_0.12)] backdrop-blur transition-all duration-300",
              isDelete
                ? "pointer-events-auto scale-100 opacity-100"
                : "pointer-events-none scale-50 opacity-0",
            )}
          >
            <p className="text-center text-sm">
              Are you sure you want to delete <b>{product?.name}</b>?
            </p>
            <div className="flex w-full items-center justify-center gap-x-2">
              <Button
                onClick={handleDelete}
                variant="outline"
                className="bg-white font-medium text-error"
              >
                Yes
              </Button>
              <Button
                onClick={() => setIsDelete(false)}
                variant="outline"
                className="bg-white font-medium"
              >
                No
              </Button>
            </div>
          </div>
          <div className="flex w-full items-center justify-between">
            <h2 className="text-xl font-semibold min-[1440px]:text-2xl">
              {product?.name}
            </h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
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
            className="w-full"
          />
          <span className="h-[1px] w-full bg-gray-300/80" />
          <div className="flex flex-col gap-y-4">
            <p className="flex w-full items-center justify-between text-sm lg:text-base">
              <span className="text-neutral-dark-1">Product ID</span>
              <span className="uppercase text-neutral-dark-2">
                {product?.id}
              </span>
            </p>
            <p className="flex w-full items-center justify-between text-sm lg:text-base">
              <span className="text-neutral-dark-1">Category</span>
              <span className="text-neutral-dark-2">{product?.category}</span>
            </p>
            <p className="flex w-full items-center justify-between text-sm lg:text-base">
              <span className="text-neutral-dark-1">Date added</span>
              <span className="text-neutral-dark-2">
                {product?.created_at},
              </span>
            </p>
            {/* <p className="flex w-full items-center justify-between text-sm lg:text-base">
              <span className="text-neutral-dark-1">Stock</span>
              <span className="text-neutral-dark-2">
                {product?.stock} {product!.stock! > 1 ? "pcs" : "pc"}
              </span>
            </p> */}
            <p className="flex w-full items-center justify-between text-sm lg:text-base">
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
              onClick={() => setIsDelete(true)}
              variant="outline"
              className="bg-white font-medium text-error"
            >
              {isLoading ? (
                <span className="flex items-center gap-x-2">
                  <span className="animate-pulse">Deleting...</span>{" "}
                  <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                </span>
              ) : (
                <span>Delete</span>
              )}
            </Button>
            <Button
              onClick={() => handleEditAction(selectedProduct)}
              variant="outline"
              className="bg-white font-medium"
            >
              Edit
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductDetailView;
