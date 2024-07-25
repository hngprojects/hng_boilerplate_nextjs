import Image from "next/image";

const Vision = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 lg:px-10 xl:px-10">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="items-start pr-0 lg:w-2/3 lg:pr-10">
          <h3
            className="mb-3 text-[24px] font-[700] text-primary sm:text-[26px] md:text-[28px]"
            data-testid="vision"
          >
            Our Vision
          </h3>
          <p className="mb-5 text-[30px] font-[600] leading-[36px] text-neutral-600 sm:text-[36px] sm:leading-[42px] md:text-[42px] md:leading-[48px] lg:text-[44px] lg:leading-[50px]">
            Leading the Way, Redefining Industries
          </p>
          <p className="text-[16px] font-[400] text-neutral-600 sm:text-[17px] md:text-[18px]">
            At Hng Boilerplate, Our vision is to revolutionize the industry
            landscape by continuously pushing the boundaries of innovation,
            setting new standards, and inspiring others to follow.
          </p>
        </div>

        <div className="mt-5 w-full items-end lg:mt-0 lg:w-3/4">
          <Image
            src="/images/about-us/our-vision.svg"
            alt="mask"
            width={130}
            height={102}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Vision;
