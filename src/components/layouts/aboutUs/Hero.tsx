import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10">
        <div className="mx-auto flex flex-col items-center">
          <p className="text-center text-[20px] font-[500] text-neutral-600 sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px]">
            About Us
          </p>
          <p className="text-center text-[30px] font-[700] text-neutral-600 sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px]">
            More Than Just A BoilerPlate
          </p>

          <p className="mt-2 w-full text-center text-[16px] font-[400] text-neutral-600 sm:w-[600px] md:w-[700px] md:text-[18px] lg:w-[784px]">
            Welcome to Hng Boilerplate, where passion meets innovation. Discover
            how we started, the challenges we overcame, and the milestones that
            define our journey.
          </p>
        </div>

        <div className="mt-[10px] w-full">
          <Image
            src="/images/about-us/aboutus1.svg"
            alt="Hero_image"
            className="w-full"
            width={1036}
            height={355}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
