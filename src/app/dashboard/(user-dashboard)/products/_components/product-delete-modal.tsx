"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTransition } from "react";

import { deleteProduct } from "~/actions/product";
import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/use-toast";
import { useOrgContext } from "~/contexts/orgContext";
import { useLocalStorage } from "~/hooks/use-local-storage";
import { cn } from "~/lib/utils";

const variantProperties = {
  left: "50%",
  top: "50%",
  translateX: "-50%",
  translateY: "-50%",
};

const ProductDeleteModal = () => {
  const [org_id] = useLocalStorage<string>("current_orgid", "");
  const [isPending, startTransition] = useTransition();
  const { selectedProduct, products, isDelete, setIsDelete } = useOrgContext();

  const product = products.find((p) => p.id === selectedProduct);

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

  return (
    <>
      <div
        onClick={() => setIsDelete(false)}
        className={cn(
          "fixed left-0 top-0 z-[99999] min-h-screen w-full overflow-hidden bg-neutral-700/10 transition-all duration-300 lg:hidden",
          isDelete
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      />

      <AnimatePresence>
        {isDelete && (
          <motion.div
            initial={{
              ...variantProperties,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              ...variantProperties,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              ...variantProperties,
              opacity: 0,
              scale: 0.5,
            }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 z-[99999] grid w-full min-w-[350px] max-w-[349px] -translate-x-1/2 -translate-y-1/2 transform-gpu flex-col place-items-center items-center min-[360px]:max-w-[480px] sm:max-w-[403px] lg:hidden"
          >
            <div className="absolute left-1/2 top-1/2 flex w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col gap-y-5 border bg-white/80 px-2 py-5 shadow-[0px_1px_18px_0px_rgba(10,_57,_176,_0.12)] backdrop-blur transition-all duration-300">
              <p className="text-center text-sm">
                Are you sure you want to delete <b>{product?.name}</b>?
              </p>
              <div className="flex w-full items-center justify-center gap-x-2">
                <Button
                  onClick={handleDelete}
                  disabled={isPending}
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductDeleteModal;
