import Image from "next/image";

import CustomButton from "~/components/common/Button/button";

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
        src="/images/user-product-details/grid-icon.svg"
        className={`h-[20px] w-[20px] ${gridDisplay ? "invert" : undefined}`}
        height={20}
        width={20}
        alt="grid svg icon"
      />
    );
  };

  const ListIcon = () => {
    return (
      <Image
        src="/images/user-product-details/list-icon.svg"
        className={`h-[20px] w-[20px] ${listDisplay ? undefined : "invert"}`}
        height={20}
        width={20}
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
