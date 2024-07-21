import Image from "next/image";

import Mask from "../../../public/AboutUsImages/Mask group-3.png";
import MissionImg from "../../../public/AboutUsImages/mission_img.jpeg";

const Mission = () => {
  return (
    <div className="mx-auto mt-[80px] grid h-[562px] grid-cols-1 items-center justify-evenly md:h-[424px] md:w-[1200px] md:grid-cols-2">
      <div className="flex h-[382px] flex-col gap-[24px] md:hidden">
        <div className="mx-auto flex h-[119px] w-[382px] flex-col items-center justify-evenly gap-[12px]">
          <h3
            className="h-[34px] text-[24px] font-[700] leading-[53px] text-primary"
            data-testid="mission mobile"
          >
            Our Mission
          </h3>
          <p
            className="h-[106px] w-[382px] text-center text-[32px] font-[700] leading-[38px] text-neutral-600"
            data-testid="subheading mobile"
          >
            We are committed to giving you the best
          </p>
        </div>
        <p
          className="h-[88px] text-center text-[18px] font-[400] leading-[22px] text-neutral-600 max-sm:w-[382px]"
          data-testid="description mobile"
        >
          At Hng Boilerplate, we are dedicated to exceeding your expectations.
          We strive to understand your unique needs and challenges, providing
          tailored solutions that drive real results and empower your success.
        </p>
      </div>

      <div className="relative flex h-[276px] items-center md:h-[424px] md:w-[660px]">
        <Image
          src={Mask}
          alt="mask"
          width={130}
          height={102}
          className="absolute left-0 top-0 h-[66px] w-[85px] md:h-[102px] md:w-[130px]"
        />
        <Image
          src={MissionImg}
          alt="mission"
          width={588}
          height={230}
          className="z-10 mx-auto h-[230px] w-[383px] rounded-lg object-cover md:h-[353px] md:w-[588px]"
        />
        <Image
          src={Mask}
          alt="mask"
          width={130}
          height={102}
          className="absolute bottom-0 right-0 h-[66px] w-[85px] md:h-[102px] md:w-[130px]"
        />
      </div>

      <div className="hidden items-center md:flex md:justify-end">
        <div className="flex h-[264px] w-[500px] flex-col gap-[24px]">
          <div className="flex h-[152px] w-[486px] flex-col gap-[12px]">
            <h3
              className="h-[34px] text-[28px] font-[700] leading-[53px] text-primary"
              data-testid="mission web"
            >
              Our Mission
            </h3>
            <p className="h-[106px] text-[44px] font-[600] leading-[53px] text-neutral-600">
              We are committed to giving you the best
            </p>
          </div>
          <p
            className="h-[88px] text-[18px] font-[400] leading-[22px] text-neutral-600"
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
