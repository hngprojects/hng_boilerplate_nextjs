import Image from "next/image";

const SearchIcon = () => {
  return (
    <Image
      src="/images/user-product-details/magnifying-glass.svg"
      className="h-[16px] w-[16px]"
      width={16}
      height={16}
      alt="search svg icon"
    />
  );
};

const SearchProductInput = () => {
  return (
    <>
      <form className="flex h-[36px] w-[266px] items-center gap-[8px] rounded-[6px] bg-white px-[12px] py-0 ring-1 ring-border">
        <SearchIcon />

        <input
          type="text"
          className="text-neutral w-full bg-transparent text-sm leading-[20px] outline-none"
          placeholder="Search products"
        />
      </form>
    </>
  );
};

export default SearchProductInput;
