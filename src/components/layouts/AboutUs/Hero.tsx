import Image from "next/image";

import AboutOne from "../../../../public/AboutUs/aboutUs_img_one.jpeg";
import Mask from "../../../../public/AboutUs/Mask group-2.png";

const Hero = () => {
  return (
    <div className="relative top-[108px] flex h-[834px] w-full flex-col pt-[64px]">
      <p className="text-about-dark-1 text-center text-[28px] font-[500]">
        About Us
      </p>
      <p className="text-about-dark-1 text-center text-[64px] font-[700]">
        More Than Just A BoilerPlate
      </p>
      <p className="text-about-dark-1 mx-auto h-[66px] w-[584px] text-center text-[18px] font-[400] leading-[22px]">
        Welcome to Hng Boilerplate, where passion meets innovation. Discover how
        we started, the challenges we overcame, and the milestones that define
        our journey.
      </p>

      <div className="relative mx-auto mt-[10px] flex h-[477px] w-[1200px] items-center justify-center">
        <Image
          src={AboutOne}
          alt="Hero_image"
          className="z-10 h-[353px] w-[1036px] rounded-bl-3xl rounded-br-md rounded-tl-md rounded-tr-3xl object-cover"
          width={1036}
          height={353}
        />
        <Image
          src={Mask}
          alt="dot"
          className="absolute left-0 top-0 h-[195px] w-[268px]"
          width={268}
          height={195}
        />
        <Image
          src={Mask}
          alt="dot"
          className="absolute bottom-0 right-0 h-[195px] w-[268px]"
          width={268}
          height={195}
        />
      </div>
    </div>
  );
};

export default Hero;
