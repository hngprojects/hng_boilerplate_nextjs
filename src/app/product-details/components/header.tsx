import { FaPlus } from "react-icons/fa6";

import Button from "~/components/ui/button";

const Header = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="mr-auto flex flex-col gap-y-[8px]">
          <h2 className="text-[#0F172A] font-semibold text-[30px] leading-[36px]">
            Products
          </h2>
          <small className="text-sm leading-[16.94px] text-[#525252]">
            Manage your products effeciently
          </small>
        </div>

        <div>
          <Button
            text="Add a Product"
            backgroundColor="bg-[#F97316]"
            textColor="text-white"
            icon={<FaPlus className="h-[14px] w-[14px] text-white" />}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
