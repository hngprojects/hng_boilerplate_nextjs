"use client";

import CustomButton from "~/components/common/common-button/common-button";
import { InputOtp } from "~/components/common/input-otp";

export default function VerifyCodePage() {
  return (
    <>
      <div className="m-auto mb-[120px] mt-[73px] flex flex-col items-center justify-center gap-5 px-6 text-center md:gap-6 lg:mb-[133px] lg:mt-20 lg:w-[551px]">
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <h3 className="text-2xl font-semibold md:text-[28px]">
            Verification Code
          </h3>
          <p className="text-[13px] font-normal text-[#525252] md:text-lg">
            Confirm the OTP sent to{" "}
            <span className="font-semibold">ellafedora@gmail.com</span> and
            enter the Verification code that was sent. Code expires in{" "}
            <span className="font-bold text-[#F97316]">00:59</span>
          </p>
        </div>

        <div>
          <InputOtp />
        </div>
        <div className="flex w-full flex-col gap-2 md:gap-4">
          <CustomButton variant="subtle" size="lg" isDisabled={true}>
            Verify{" "}
          </CustomButton>
          <p className="text-[13px]">
            Didn&apos;t recieve any code?{" "}
            <span className="ml-2 text-base font-semibold text-[#F97316]">
              Resend OTP
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
