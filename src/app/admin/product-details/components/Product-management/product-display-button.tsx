import Image from "next/image";

import CustomButton from "~/components/common/Button/button";
import GridIconSVG from "../../assets/svgs/grid-icon.svg";
import ListIconSVG from "../../assets/svgs/list-icon.svg";

interface ComponentPropertyTypes {
  listDisplayFunction: () => void;
  gridDisplayFunction: () => void;
  listDisplay: boolean;
  gridDisplay: boolean;
}

const ProductDisplayButton = ({
  listDisplayFunction,
  gridDisplayFunction,
  gridDisplay,
  listDisplay,
}: ComponentPropertyTypes) => {
  const GridIcon = () => {
    return (
      <Image
        src={GridIconSVG}
        className={`h-[20px] w-[20px] ${gridDisplay ? undefined : "invert"}`}
        alt="grid svg icon"
      />
    );
  };

  const ListIcon = () => {
    return (
      <Image
        src={ListIconSVG}
        className={`h-[20px] w-[20px] ${listDisplay ? "invert" : undefined}`}
        alt="list svg icon"
      />
    );
  };

  return (
    <>
      <div className="flex flex-row items-center gap-[8px]">
        <div onClick={() => gridDisplayFunction()}>
          <CustomButton
            variant={listDisplay ? "outline" : undefined}
            icon={<GridIcon />}
            size="icon"
            isIconOnly={true}
          />
        </div>

        <div onClick={() => listDisplayFunction()}>
          <CustomButton
            variant={gridDisplay ? "outline" : undefined}
            icon={<ListIcon />}
            size="icon"
            isIconOnly={true}
          />
        </div>
      </div>
    </>
  );
};

export default ProductDisplayButton;
