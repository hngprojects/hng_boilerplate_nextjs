import { Plus } from "lucide-react";

import { Button } from "~/components/ui/button";
import { useOrgContext } from "~/contexts/orgContext";

const ProductHeader = () => {
  const { setIsNewModal } = useOrgContext();

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col min-[380px]:gap-y-1 min-[450px]:gap-y-2">
        <h2 className="text-xl font-semibold min-[450px]:text-2xl lg:text-[30px]">
          Products
        </h2>
        <p className="text-[10px] text-neutral-dark-2 min-[380px]:text-xs min-[450px]:text-sm">
          Manage your products efficiently
        </p>
      </div>
      <div className="flex">
        <Button
          onClick={() => setIsNewModal(true)}
          variant="default"
          className="flex items-center gap-x-1 text-[10px] max-[450px]:px-1 min-[380px]:text-xs min-[450px]:gap-x-2 min-[450px]:text-sm"
        >
          <Plus />
          <span>Add a Product</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductHeader;
