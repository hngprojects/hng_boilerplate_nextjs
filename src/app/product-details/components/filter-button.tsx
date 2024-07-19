import { IoFunnelOutline } from "react-icons/io5";

const FilterButton = () => {
  return (
    <>
      <button className="p-[8px] rounded-[6px] ring-1 ring-[#CBD5E1] flex flex-row items-center gap-[8px] text-base leading-[19.36px] text-[#0A0A0A]">
        <IoFunnelOutline className="h-[20px] w-[20px] text-[#0A0A0A]" />
        <div>Filter</div>
      </button>
    </>
  );
};

export default FilterButton;
