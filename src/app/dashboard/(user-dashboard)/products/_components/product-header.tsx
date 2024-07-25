import { Plus } from "lucide-react";

import { Button } from "~/components/ui/button";
import { useProductModal } from "~/hooks/admin-product/use-product.modal";

const ProductHeader = () => {
  const { setIsNewModal } = useProductModal();

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-semibold lg:text-[30px]">Products</h2>
        <p className="text-sm text-neutral-dark-2">
          Manage your products efficiently
        </p>
      </div>
      <div className="flex">
        <Button
          onClick={() => setIsNewModal(true)}
          variant="default"
          className="flex items-center gap-x-2 text-sm"
        >
          <Plus />
          <span>Add a Product</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductHeader;
