import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-10 lg:px-10 xl:px-10">
        <div className="mx-auto flex flex-col items-center">
          <p className="rounded-lg bg-neutral-100 p-3 text-center text-[20px] font-[400] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px]">
            About Us
          </p>
          <p className="text-center text-[36px] font-[700] leading-[normal] md:text-[42px] lg:text-[48px] xl:text-[54px]">
            More Than <span className="text-primary">Just</span> A BoilerPlate
          </p>

          <p className="mt-2 w-[378px] text-center text-[20px] font-[400] leading-[normal] text-neutral-600 sm:w-[600px] md:w-[996px] md:text-[18px]">
            Welcome to Hng Boilerplate, where passion meets innovation. Discover
            how we started, the challenges we overcame, and the milestones that
            define our journey.
          </p>
        </div>

        <div className="mt-[10px] h-auto w-full lg:h-[477px]">
          <Image
            src="/images/about-us/aboutus1.svg"
            alt="Hero_image"
            className=""
            width={1200}
            height={977}
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
