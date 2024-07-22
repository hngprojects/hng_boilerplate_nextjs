import Image from "next/image";

import { Button } from "~/components/ui/button";

const ProductFilter: React.FC = () => {
  return (
    <div className="mb-10 flex w-full max-w-sm items-center justify-between md:max-w-md lg:max-w-screen-2xl">
      <div>
        <h2 className="text-[20px] font-semibold text-black lg:text-[28px]">
          Products
        </h2>
        <p className="min-w-9 text-xs font-normal lg:max-w-[328px]">
          Manage your products and view their sales performance.
        </p>
      </div>
      <div className="flex gap-[10px]">
        <Button className="flex items-center gap-[10px] rounded border-[.5px] border-[#CBD5E1] bg-[#FFF] p-[10px] text-base font-normal text-[#525252]">
          <Image
            src="/images/filter.svg"
            width={20}
            height={20}
            alt="filter button"
            className="h-4 w-4 lg:h-[20px] lg:w-[20px]"
          />
          <span>Filter</span>
        </Button>
        <Button className="flex items-center gap-2 rounded bg-[#F97316] px-[16px] py-[8px] text-white hover:bg-[#F97316]">
          <Image
            src="/images/add.svg"
            width={16}
            height={16}
            alt="add button"
          />
          <span>Add Product</span>
        </Button>
      </div>
    </div>
  );
};

export default ProductFilter;
