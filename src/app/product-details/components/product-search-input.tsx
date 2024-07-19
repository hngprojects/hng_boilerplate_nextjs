import { IoSearchOutline } from "react-icons/io5";

const ProductSearchInput = () => {
  return (
    <>
      <form className="bg-white ring-1 ring-[#E4E4E7] rounded-[6px] py-0 px-[12px] flex items-center flex-row gap-[8px] w-[266px] h-[36px]">
        <IoSearchOutline className="w-[16px] h-[16px] text-black opacity-[50%]" />
        <input
          type="text"
          className="outline-none box-border w-full h-full text-sm leading-[20px] text-[#71717A] placeholder:text-[#71717A]"
          placeholder="Search products"
        />
      </form>
    </>
  );
};

export default ProductSearchInput;
