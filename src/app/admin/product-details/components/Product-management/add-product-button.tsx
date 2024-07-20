import Image from "next/image";

import CustomButton from "~/components/common/Button/button";
import PlusIconSVG from "../../assets/svgs/plus-icon.svg";

// svg plus icon
const PlusIcon = () => {
  return (
    <Image
      src={PlusIconSVG}
      className="h-[16px] w-[16px]"
      alt="plus svg icon"
    />
  );
};

const AddProductButton = () => {
  return (
    <>
      <CustomButton
        variant="primary"
        icon={<PlusIcon />}
        isLeftIconVisible={true}
        isLoading={false}
        isDisabled={false}
      >
        Add a Products
      </CustomButton>
    </>
  );
};

export default AddProductButton;
