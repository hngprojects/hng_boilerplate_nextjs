import Image from "next/image";

const Mission = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10 py-10 md:py-20">
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
            className="mb-3 text-[24px] font-[700] text-primary sm:text-[26px] md:text-[28px]"
            data-testid="mission web"
          >
            Our Mission
          </h3>
          <h3 className="mb-5 text-[32px] font-[600] leading-[38px] text-neutral-600 sm:text-[36px] sm:leading-[42px] md:text-[40px] md:leading-[46px] lg:text-[44px] lg:leading-[50px]">
            We are committed to giving you the best
          </h3>
          <p
            className="text-[16px] font-[400] text-neutral-600 sm:text-[17px] md:text-[18px]"
            data-testid="description web"
          >
            At Hng Boilerplate, we are dedicated to exceeding your expectations.
            We strive to understand your unique needs and challenges, providing
            tailored solutions that drive real results and empower your success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
