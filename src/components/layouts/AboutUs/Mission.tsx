import Image from "next/image";

import Mask from "../../../../public/AboutUs/Mask group-3.png";
import MissionImg from "../../../../public/AboutUs/mission_img.jpeg";

const Mission = () => {
  return (
    <div className="mx-auto mt-[80px] grid h-[424px] w-[1200px] grid-cols-2">
      <div className="relative flex h-[424px] w-[660px] items-center">
        <Image
          src={Mask}
          alt="mask"
          width={130}
          height={102}
          className="absolute left-0 top-0 h-[102px] w-[130px]"
        />
        <Image
          src={MissionImg}
          alt="mission"
          width={588}
          height={353}
          className="z-10 mx-auto h-[353px] w-[588px] rounded-lg object-cover"
        />
        <Image
          src={Mask}
          alt="mask"
          width={130}
          height={102}
          className="absolute bottom-0 right-0 h-[102px] w-[130px]"
        />
      </div>
      <div className="flex items-center justify-end">
        <div className="flex h-[264px] w-[500px] flex-col gap-[24px]">
          <div className="flex h-[152px] w-[486px] flex-col gap-[12px]">
            <h3 className="h-[34px] text-[28px] font-[700] leading-[53px] text-[#F97316]">
              Our Mission
            </h3>
            <p className="h-[106px] text-[44px] font-[600] leading-[53px] text-[#525252]">
              We are committed to giving you the best
            </p>
          </div>
          <p className="h-[88px] text-[18px] font-[400] leading-[22px] text-[#525252]">
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
