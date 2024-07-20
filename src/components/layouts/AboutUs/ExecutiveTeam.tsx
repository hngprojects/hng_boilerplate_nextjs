import Image from "next/image";

import Addison from "../../../../public/AboutUs/Addison.png";
import Facebook from "../../../../public/AboutUs/facebook.png";
import Insta from "../../../../public/AboutUs/Insta.png";
import John from "../../../../public/AboutUs/John.png";
import Joy from "../../../../public/AboutUs/joy.png";
import Phillip from "../../../../public/AboutUs/Philp.png";
import Twitter from "../../../../public/AboutUs/X.png";

const ExecutiveTeam = () => {
  return (
    <div className="mt-[80px] flex h-[1831px] flex-col md:h-[610px] md:w-full">
      <div className="mx-auto flex w-[382px] flex-col items-center justify-center max-sm:px-[5px] md:w-[630px]">
        <h3 className="text-center text-[32px] font-[600] text-[#525252] md:text-[44px]">
          The Executive Team
        </h3>
        <p className="text-center text-[16px] leading-[19px] text-[#525252] md:text-[18px] md:leading-[22px]">
          Meet Our Exclusive team that have been trained to meet your needs.
        </p>
      </div>

      <div className="mx-auto mt-[20px] grid h-[1692px] grid-cols-1 gap-[27px] md:h-[3px] md:w-[1200px] md:grid-cols-4">
        <div
          className="flex w-[280px] flex-col gap-[20px] bg-[#f4f2f299] pb-[14px]"
          data-testid="johnSection"
        >
          <Image
            src={John}
            alt="image"
            width={277}
            height={205}
            className="h-[205px] w-[277px] bg-[#D3D3D3] object-cover object-top pl-[10px] pr-[10px]"
          />
          <div className="flex h-[105px] flex-col justify-between p-[0px_14px]">
            <div className="h-[41px]">
              <h3 className="text-[18px] font-[600]">John Abraham</h3>
              <p className="text-[12px] font-[400] text-[#525252]">
                Business Developer
              </p>
            </div>
            <p className="w-[249px] text-[16px] leading-[19px] text-[#525252]">
              John is a strategic product manager with a keen eye for market
              trends.{" "}
            </p>
          </div>
          <div className="ml-[14px] flex h-[32px] w-[126px] items-center justify-between gap-[14px]">
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <Image
                src={Facebook}
                alt="facebook"
                width={11}
                height={18}
                className="h-full w-full p-[1px_3px]"
              />
            </div>
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <Image
                src={Insta}
                alt="facebook"
                width={11}
                height={20}
                className="h-full w-full p-[2px]"
              />
            </div>
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <Image
                src={Twitter}
                alt="facebook"
                width={11}
                height={18}
                className="h-full w-full p-[2px]"
              />
            </div>
          </div>
        </div>

        <div
          className="flex w-[280px] flex-col gap-[20px] bg-[#f4f2f299] pb-[14px]"
          data-testid="addisonSection"
        >
          <Image
            src={Addison}
            alt="image"
            width={277}
            height={205}
            className="h-[205px] w-[277px] bg-[#D3D3D3] object-cover object-top"
          />
          <div className="flex h-[105px] flex-col justify-between p-[0px_14px]">
            <div className="h-[41px]">
              <h3 className="text-[18px] font-[600]">Addison mark</h3>
              <p className="text-[12px] font-[400] text-[#525252]">
                Software Engineer
              </p>
            </div>
            <p className="w-[249px] text-[16px] leading-[19px] text-[#525252]">
              Addison our skilled frontend developer, brings websites to life
              with clean code.{" "}
            </p>
          </div>
          <div className="ml-[14px] flex h-[32px] w-[126px] items-center justify-between gap-[14px]">
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <Image
                src={Facebook}
                alt="facebook"
                width={11}
                height={18}
                className="h-full w-full p-[1px_3px]"
              />
            </div>
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <Image
                src={Insta}
                alt="facebook"
                width={11}
                height={20}
                className="h-full w-full p-[2px]"
              />
            </div>
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <Image
                src={Twitter}
                alt="facebook"
                width={11}
                height={18}
                className="h-full w-full p-[2px]"
              />
            </div>
          </div>
        </div>

        <div
          className="flex w-[280px] flex-col gap-[20px] bg-[#f4f2f299] pb-[14px]"
          data-testid="joySection"
        >
          <Image
            src={Joy}
            alt="image"
            width={277}
            height={205}
            className="h-[205px] w-[277px] bg-[#D3D3D3] object-cover object-top"
          />
          <div className="flex h-[105px] flex-col justify-between p-[0px_14px]">
            <div className="h-[41px]">
              <h3 className="text-[18px] font-[600]">Joy Tony</h3>
              <p
                className="text-[12px] font-[400] text-[#525252]"
                data-testid="product manager"
              >
                Product Manager
              </p>
            </div>
            <p className="w-[249px] text-[16px] leading-[19px] text-[#525252]">
              Joy is a passionate product manager driven by user experience.
            </p>
          </div>

          <div className="ml-[14px] flex h-[32px] w-[126px] items-center justify-between gap-[14px]">
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <Image
                src={Facebook}
                alt="facebook"
                width={11}
                height={18}
                className="h-full w-full p-[1px_3px]"
              />
            </div>
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <Image
                src={Insta}
                alt="facebook"
                width={11}
                height={20}
                className="h-full w-full p-[2px]"
              />
            </div>
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <Image
                src={Twitter}
                alt="facebook"
                width={11}
                height={18}
                className="h-full w-full p-[2px]"
              />
            </div>
          </div>
        </div>

        <div
          className="flex w-[280px] flex-col gap-[20px] bg-[#f4f2f299] pb-[14px]"
          data-testid="philipSection"
        >
          <Image
            src={Phillip}
            alt="image"
            width={277}
            height={205}
            className="h-[205px] w-[277px] bg-[#D3D3D3] object-cover"
          />
          <div className="flex h-[105px] flex-col justify-between p-[0px_14px]">
            <div className="h-[41px]">
              <h3 className="text-[18px] font-[600]">Johua Philip</h3>
              <p
                className="text-[12px] font-[400] text-[#525252]"
                data-testid="data analyst"
              >
                Data Analyst
              </p>
            </div>
            <p className="w-[249px] text-[16px] leading-[19px] text-[#525252]">
              JJoshua, our data analyst, uses user data to optimize our
              boilerplates for performance.
            </p>
          </div>
          <div className="ml-[14px] flex h-[32px] w-[126px] items-center justify-between gap-[14px]">
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <Image
                src={Facebook}
                alt="facebook"
                width={11}
                height={18}
                className="h-full w-full p-[1px_3px]"
              />
            </div>
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <Image
                src={Insta}
                alt="facebook"
                width={11}
                height={20}
                className="h-full w-full p-[2px]"
              />
            </div>
            <div className="flex h-[24px] w-[24px] items-center justify-center">
              <Image
                src={Twitter}
                alt="facebook"
                width={11}
                height={18}
                className="h-full w-full p-[2px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExecutiveTeam;
