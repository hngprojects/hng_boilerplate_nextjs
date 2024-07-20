import Image from "next/image";

const Breadcrumb = () => {
  return (
    <div className="mb-[80px] flex max-w-full flex-row items-center justify-start gap-[24px]">
      <div className="flex flex-row items-center justify-start gap-[8px] px-0 py-1">
        <div className="flex flex-row items-center justify-start gap-[8px] overflow-hidden rounded px-0 py-1">
          <div className="relative inline-block min-w-[33px] text-xs font-[400] leading-[16px] text-neutral-dark-1">
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
      <div className="flex flex-row items-center justify-start gap-[8px] px-0 py-1">
        <div className="flex flex-row items-center justify-center overflow-hidden rounded">
          <div className="relative inline-block min-w-[66px] text-xs font-[400] leading-[16px] text-neutral-dark-1">
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
      <div className="flex flex-row items-center justify-center overflow-hidden rounded">
        <div className="relative inline-block min-w-[118px] text-xs font-[400] leading-[16px] text-primary">
          Terms and Conditions
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
