import Image from "next/image";

import Mask from "../../../../public/AboutUs/Mask group-3.png";
import VisionImg from "../../../../public/AboutUs/vision_img.jpeg";

const Vision = () => {
  return (
    <div className="mx-auto mt-[150px] grid h-[543px] grid-cols-1 items-center justify-evenly md:mt-[80px] md:h-[424px] md:w-[1200px] md:grid-cols-2">
      <div className="flex items-center md:justify-start">
        <div className="flex h-[382px] w-[430px] flex-col gap-[24px] md:h-[264px] md:w-[500px]">
          <div className="mx-auto flex h-[119px] w-[211px] flex-col justify-evenly gap-[12px] max-sm:items-center md:h-[152px] md:w-[486px]">
            <h3
              className="h-[34px] text-[24px] font-[700] leading-[53px] text-[#F97316] md:text-[28px] md:leading-[53px]"
              data-testid="vision"
            >
              Our Vision
            </h3>
            <p className="h-[106px] w-[382px] text-[32px] font-[700] text-[#525252] max-md:text-center md:w-full md:text-[44px] md:font-[600] md:leading-[53px]">
              Leading the Way, Redefining Industries
            </p>
          </div>
          <p className="h-[88px] text-[18px] font-[400] leading-[22px] text-[#525252] max-sm:w-[382px] max-sm:text-center">
            At Hng Boilerplate, Our vision is to revolutionize the industry
            landscape by continuously pushing the boundaries of innovation,
            setting new standards, and inspiring others to follow.
          </p>
        </div>
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
          src={VisionImg}
          alt="mission"
          width={588}
          height={353}
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
    </div>
  );
};

export default Vision;
