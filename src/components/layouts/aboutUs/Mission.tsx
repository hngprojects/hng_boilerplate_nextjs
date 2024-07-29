import Image from "next/image";

const Mission = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-10 md:py-5 lg:px-10 xl:px-10">
        <div className="flex flex-col-reverse items-center lg:flex-row">
          <div className="w-full md:pr-10 lg:mb-0 lg:w-3/4">
            <Image
              src="/images/about-us/our-mission.svg"
              alt="mask"
              width={130}
              height={300}
              className="w-full"
            />
          </div>

          <div className="mb-8 items-start lg:w-2/3">
            <h3
              className="mb-3 text-[24px] font-[700] text-primary max-sm:text-center sm:text-[26px] md:text-[28px]"
              data-testid="mission web"
            >
              Our Mission & Vision
            </h3>
            <h3 className="mb-5 text-[32px] font-[700] leading-[normal] max-sm:text-center max-sm:text-neutral-600 md:text-[44px] md:font-[600]">
              Leading the Way, Redefining Industries
            </h3>
            <p
              className="text-[16px] font-[400] leading-[normal] text-neutral-600 sm:text-[17px] md:text-[18px] lg:w-[500px]"
              data-testid="description web"
            >
              At Hng Boilerplate, we are dedicated to exceeding your
              expectations. We strive to understand your unique needs and
              challenges, providing tailored solutions that drive real results
              and empower your success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
