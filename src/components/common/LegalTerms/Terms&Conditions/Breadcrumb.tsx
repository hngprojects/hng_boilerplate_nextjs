import Image from "next/image";


const Breadcrumb = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-[24px] max-w-full mb-[80px]">
      <div className="flex flex-row items-center justify-start py-1 px-0 gap-[8px]">
        <div className="rounded overflow-hidden flex flex-row items-center justify-start py-0 pr-[19px] pl-0">
          <div className="relative leading-[16px] inline-block min-w-[33px] text-xs font-[400]">
            Home
          </div>
        </div>
        <Image
          className="relative"
          loading="lazy"
          alt=""
          src="/terms&conditions/arrowRight.svg"
          height={12}
          width={12}
        />
      </div>
      <div className="flex flex-row items-center justify-start py-1 px-0 gap-[8px]">
        <div className="rounded overflow-hidden flex flex-row items-center justify-center">
          <div className="relative leading-[16px] inline-block min-w-[66px] text-xs font-[400]">
            Legal Terms
          </div>
        </div>
        <Image
          className="relative"
          loading="lazy"
          alt=""
          src="/terms&conditions/arrowRight.svg"
          height={12}
          width={12}
        />
      </div>
      <div className="rounded overflow-hidden flex flex-row items-center justify-center text-primary-primary-color">
        <div className="relative leading-[16px] inline-block min-w-[118px] text-[#F97316] text-xs font-[400]">
          Terms and Conditions
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
