import Image from "next/image";

import { Button } from "~/components/ui/button";

function ProductFilter() {
  return (
    <div className="mb-10 flex items-center justify-between">
      <div className="">
        <h2 className="text-[28px] font-semibold text-black">Products</h2>
        <p className="text-xs font-normal">
          Manage your products and view their sales performance.
        </p>
      </div>
      <div className="flex gap-[10px]">
        <Button className="flex items-center gap-[10px] rounded border-[.5px] border-stroke-300 text-base font-normal text-natural-200">
          <Image src="/filter.svg" width={20} height={20} alt="" />
          <span>Filter</span>
        </Button>
        <Button className="flex items-center gap-2 rounded bg-acent-400 text-white">
          <Image src="/add.svg" width={16} height={16} alt="" />
          <span>Add Product</span>
        </Button>
      </div>
    </div>
  );
}

export default ProductFilter;
