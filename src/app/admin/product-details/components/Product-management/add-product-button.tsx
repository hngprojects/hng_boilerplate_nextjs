import Image from "next/image";

import CustomButton from "~/components/common/Button/button";

// svg plus icon
const PlusIcon = () => {
  return (
    <Image
      src="/images/user-product-details/plus-icon.svg"
      className="h-[16px] w-[16px]"
      width={16}
      height={16}
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
