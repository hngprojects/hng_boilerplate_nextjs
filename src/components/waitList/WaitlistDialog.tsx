import Image from "next/image";
import React from "react";

const WaitlistDialog: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-[20px] grid grid-cols-1 gap-[20px] md:px-2 lg:grid-cols-3 lg:gap-[40px]">
        <div className="flex shrink-0 flex-col items-start rounded-[8px] border-[1px] border-neutral-300 p-[24px] transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg md:w-[500px] lg:w-[300px]">
          <div className="flex h-[53px] w-[53px] shrink-0 items-center justify-center rounded-full bg-primary">
            <Image
              src="/images/WaitList/Vector.svg"
              alt="Vector"
              width="25"
              height="25"
            />
          </div>
          <h1 className="mt-[12px] text-xl font-semibold leading-[28px]">
            Easy Customization
          </h1>
          <p className="w-[252px] text-[14px] font-normal leading-[20px]">
            Tailor your experience to your specific needs and preferences for
            maximum results
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-start rounded-[8px] border-[1px] border-neutral-300 p-[24px] transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg md:w-[500px] lg:w-[300px]">
          <div className="flex h-[53px] w-[53px] shrink-0 items-center justify-center rounded-full bg-primary">
            <Image
              src="/images/WaitList/pie-chart2.svg"
              alt="Pie-Chart"
              width="30"
              height="30"
            />
          </div>
          <h1 className="mt-[12px] text-xl font-semibold leading-[28px]">
            Scalable Foundation
          </h1>
          <p className="w-[252px] text-[14px] font-normal leading-[20px]">
            Easily add new features and functionalities as needed to grow your
            product
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-start rounded-[8px] border-[1px] border-neutral-300 p-[24px] transition-transform duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-lg md:w-[500px] lg:w-[300px]">
          <div className="flex h-[53px] w-[53px] shrink-0 items-center justify-center rounded-full bg-primary">
            <Image
              src="/images/WaitList/activity 2.svg"
              alt="activity"
              width="30"
              height="36"
            />
          </div>
          <h1 className="mt-[12px] text-xl font-semibold leading-[28px]">
            Pre-built Sections
          </h1>
          <p className="w-[252px] text-[14px] font-normal leading-[20px]">
            Leverage our prebuilt resources and sections to showcase your
            product effectively
          </p>
        </div>
      </div>
      <div className="mt-[24px] flex h-[72px] w-[320px] items-center justify-around rounded-[12px] border-[1px] border-primary transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex gap-[-16px]">
          <div className="boorder-white h-[40px] w-[40px] rounded-full border-[1px] bg-slate-200"></div>
          <div className="boorder-white ml-[-16px] h-[40px] w-[40px] rounded-full border-[1px] bg-pink-300"></div>
          <div className="boorder-white ml-[-16px] h-[40px] w-[40px] rounded-full border-[1px] bg-pink-100"></div>
          <div className="boorder-white ml-[-16px] h-[40px] w-[40px] rounded-full border-[1px] bg-gray-300"></div>
        </div>
        <div>
          <p className="text-[12px] font-normal leading-4 text-gray-400">
            Resource variety
          </p>
          <h1 className="text-[16px] font-medium leading-5">
            150+ Team support
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WaitlistDialog;
