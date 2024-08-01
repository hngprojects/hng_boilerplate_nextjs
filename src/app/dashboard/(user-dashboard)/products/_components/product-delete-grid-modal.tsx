import { AnimatePresence, motion } from "framer-motion";

import { Button } from "~/components/ui/button";
import { toast } from "~/components/ui/use-toast";
import { useProductModal } from "~/hooks/admin-product/use-product.modal";
import { useProducts } from "~/hooks/admin-product/use-products.persistence";
import { useUserProducts } from "~/hooks/admin-product/use-server-products";
import { cn } from "~/lib/utils";

const variantProperties = {
  left: "50%",
  top: "50%",
  translateX: "-50%",
  translateY: "-50%",
};
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const ProductDeleteGridModal = () => {
  const { deleteProduct } = useProducts();
  const { data } = useUserProducts();
  const products = data?.products;

  const { product_id, updateProductId, updateOpen, isDelete, setIsDelete } =
    useProductModal();

  const product = products?.find(
    (product) => product.product_id === product_id,
  );

  const handleDelete = async (id: string) => {
    toast({
      title: "Deleting product",
      description: "Please wait...",
      variant: "destructive",
    });
    setIsDelete(false);

    await delay(3000);
    deleteProduct(id);
    toast({
      title: `Product deleted`,
      description: (
        <span>
          <b>{product?.name}</b> has been deleted.
        </span>
      ),
      variant: "default",
      className: "z-[99999]",
    });
    updateOpen(false);
    updateProductId("null");
  };

  return (
    <>
      <div
        onClick={() => {
          updateOpen(false);
          updateProductId("null");

          setIsDelete(false);
        }}
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
            className={cn(
              "fixed left-1/2 top-1/2 z-[99999] grid w-full min-w-[350px] max-w-[349px] -translate-x-1/2 -translate-y-1/2 transform-gpu flex-col place-items-center items-center min-[360px]:max-w-[480px] sm:max-w-[403px] lg:hidden",
            )}
          >
            <div
              className={cn(
                "absolute left-1/2 top-1/2 flex w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col gap-y-5 border bg-white/80 px-2 py-5 shadow-[0px_1px_18px_0px_rgba(10,_57,_176,_0.12)] backdrop-blur transition-all duration-300",
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
                  onClick={() => handleDelete(product!.product_id!)}
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

export default ProductDeleteGridModal;
