import { IoMdGrid } from "react-icons/io";
import { IoListOutline } from "react-icons/io5";

interface DisplayTypeButtonPropertyTypes {
  displayGrid: boolean;
}

const DisplayTypeButton = ({ displayGrid }: DisplayTypeButtonPropertyTypes) => {
  return (
    <>
      {displayGrid ? (
        <button className="p-[8px] rounded-[6px] ring-1 ring-[#CBD5E1]">
          <IoMdGrid className="h-[20px] w-[20px] text-black bg-white" />
        </button>
      ) : (
        <button className="p-[8px] rounded-[6px] ring-1 ring-[#0A0A0A] bg-[#0A0A0A]">
          <IoListOutline className="h-[20px] w-[20px] text-white" />
        </button>
      )}
    </>
  );
};

export default DisplayTypeButton;
