import Image from "next/image";

import { Button } from "~/components/common/Button";
import AboutOne from "../../../../public/AboutUs/aboutUs_img_one.jpeg";
import Mask from "../../../../public/AboutUs/Mask group-2.png";
import Mask2 from "../../../../public/AboutUs/Mask group-3.png";

const Hero = () => {
  return (
    <div className="relative top-[108px] flex h-[754px] flex-col justify-between md:h-[834px] md:w-full md:pb-[64px] md:pt-[64px]">
      <div className="mx-auto flex flex-col items-center justify-evenly max-sm:h-[302px] max-sm:w-[382px] max-sm:gap-[24px]">
        <p className="text-center text-[20px] font-[500] text-foreground md:text-[28px]">
          About Us
        </p>
        <p className="text-neutralColor-dark-2 text-center text-[32px] font-[700] max-sm:leading-[38px] md:text-[64px]">
          More Than Just A BoilerPlate
        </p>
        <p className="mx-auto h-[88px] w-[382px] text-center text-[18px] font-[400] leading-[22px] text-foreground md:h-[66px] md:w-[584px]">
          Welcome to Hng Boilerplate, where passion meets innovation. Discover
          how we started, the challenges we overcame, and the milestones that
          define our journey.
        </p>
        <Button className="hidden h-[40px] w-[136px] items-center justify-center rounded-[6px] bg-primary p-[16px_8px] text-background max-sm:flex">
          Meet The Team
        </Button>
      </div>

      <div className="relative mx-auto mt-[10px] flex h-[396px] items-center md:h-[477px] md:w-[1200px] md:justify-center">
        <Image
          src={AboutOne}
          alt="Hero_image"
          className="z-10 h-[353px] w-[372px] rounded-bl-3xl rounded-br-md rounded-tl-md rounded-tr-3xl object-cover md:w-[1036px]"
          width={1036}
          height={353}
        />
        <Image
          src={Mask}
          alt="dot"
          className="absolute left-0 top-0 hidden h-[195px] w-[268px] md:flex"
          width={268}
          height={195}
        />
        <Image
          src={Mask2}
          alt="dot"
          className="absolute left-[-25px] top-0 flex h-[66px] w-[88px] md:hidden"
          width={88}
          height={66}
        />
        <Image
          src={Mask}
          alt="dot"
          className="absolute bottom-0 right-0 hidden h-[195px] w-[268px] md:flex"
          width={268}
          height={195}
        />
        <Image
          src={Mask2}
          alt="dot"
          className="absolute bottom-0 right-[-10px] flex h-[66px] w-[88px] md:hidden"
          width={268}
          height={195}
        />
      </div>
    </div>
  );
};

export default Hero;
