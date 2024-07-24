"use client";

import { TooltipArrow } from "@radix-ui/react-tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { CircleCheck, X } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";

import CustomButton from "~/components/common/common-button/common-button";
import { InputOtp } from "~/components/common/input-otp";
import CustomInput from "~/components/common/input/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { cn } from "~/lib/utils";

const registeredEmails = [
  "akinsanyaadeyinka4166@gmail.com",
  "ellafedora@gmail.com",
  "alice@example.com",
  "bob@example.com",
  "charlie@example.com",
  "david@example.com",
  "eve@example.com",
  "frank@example.com",
  "grace@example.com",
  "hank@example.com",
  "irene@example.com",
  "jack@example.com",
  "karen@example.com",
  "leo@example.com",
  "markessien@gmail.com",
  "mike@example.com",
  "nancy@example.com",
  "oliver@example.com",
  "paul@example.com",
  "quincy@example.com",
  "rachel@example.com",
  "steve@example.com",
  "tina@example.com",
  "ursula@example.com",
  "victor@example.com",
  "wendy@example.com",
  "xander@example.com",
  "yvonne@example.com",
  "zach@example.com",
];

const Error = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => (
  <p className={cn("text-[13px] font-medium text-error", className)}>
    {children}
  </p>
);

const Heading = ({ children }: { children: ReactNode }) => (
  <p className="mb-2 text-[25px] font-semibold leading-[30px] text-neutral-dark-2 sm:mb-4 sm:text-[28px] sm:leading-[33.6px]">
    {children}
  </p>
);

const Description = ({ children }: { children: ReactNode }) => (
  <p className="text-[13px] text-neutral-dark-1 sm:text-lg">{children}</p>
);

const ForgotPassword = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [isCodeComplete, setIsCodeComplete] = useState(false);
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);
  const [isOtpResent, setIsOtpResent] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);
  const [emailTooltipContent, setEmailTooltipContent] = useState("");

  const emailError =
    email &&
    !registeredEmails.some((registeredEmail) =>
      registeredEmail.includes(email),
    );

  const Default = (
    <>
      <div className="text-center">
        <Heading>Forgot Password</Heading>
        <Description>
          Enter the email address you used to create the account to receive
          instructions on how to reset your password
        </Description>
      </div>
      <TooltipProvider delayDuration={200}>
        <Tooltip open={emailTooltipContent !== ""}>
          <TooltipTrigger type="button" className="text-start">
            <CustomInput
              type="email"
              onChange={(event) => {
                const newValue = event.target.value;
                const emailMatch = newValue
                  ? registeredEmails.find((email) => email.includes(newValue))
                  : undefined;
                setEmailTooltipContent(
                  emailMatch ? (emailMatch === newValue ? "" : emailMatch) : "",
                );
                setEmail(newValue);
              }}
              value={email}
              variant="border"
              label="Email"
              placeholder="Enter your email"
              className={`h-12 rounded-lg text-sm placeholder:text-sm focus:bg-zinc-50 focus:placeholder:text-neutral-dark-2 sm:h-16 sm:text-lg sm:placeholder:text-lg ${emailError ? "border-error" : "focus:border-primary"}`}
              labelClassName="sm:text-xl text-[13px] text-neutral-dark-2"
            />
            {emailError && (
              <Error className="mt-2 cursor-default font-normal">
                This email doesn&apos;t match our records please try again
              </Error>
            )}
          </TooltipTrigger>
          <TooltipContent
            sideOffset={-46}
            className="cursor-pointer border-none p-3 text-xs text-primary sm:text-sm"
            onClick={() => {
              setEmail(emailTooltipContent);
              setEmailTooltipContent("");
            }}
          >
            {emailTooltipContent}
            <TooltipArrow className="fill-white" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <CustomButton
        type="submit"
        variant="primary"
        className="h-12 rounded-lg text-sm font-bold sm:h-16 sm:text-base sm:font-medium"
      >
        Send
      </CustomButton>
      <div className="text-center">
        <span className="text-[13px] text-neutral-dark-2">
          Remember your Password?
        </span>
        <Link
          href={"/login"}
          className="p-2 text-base font-semibold text-primary hover:underline"
        >
          Login
        </Link>
      </div>
    </>
  );

  const VerificationCode = (
    <>
      <div className="text-center">
        <Heading>Verification Code{isOtpResent ? " Resent" : ""}</Heading>
        <Description>
          Confirm the OTP sent to
          <span className="font-bold"> {email}</span> and enter the verification
          code that was sent. Code expires in{" "}
          <span className="font-bold text-primary">00:59</span>
        </Description>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-4 text-center">
        <InputOtp
          slotClassName={`size-10 sm:size-[60px] !rounded-lg border duration-300 font-bold text-xs sm:text-lg ${isCodeComplete && isCodeCorrect ? "border-primary ring-none" : !isCodeCorrect && isCodeComplete ? "border-error" : "border-stroke-colors-stroke ring-primary"}`}
          className="justify-center"
          onChange={(value) => {
            setCode(value);
            setIsCodeComplete(value.length === 6);
          }}
          onComplete={() => {
            setIsCodeCorrect(code === "123456");
          }}
        />
        {!isCodeCorrect && isCodeComplete && (
          <Error>The OTP entered is not correct. Try again</Error>
        )}
      </div>
      <CustomButton
        isDisabled={!isCodeComplete}
        type="submit"
        variant="primary"
        className="h-12 rounded-lg text-xs font-bold shadow-none disabled:bg-slate-100 disabled:text-neutral-dark-1 sm:h-16 sm:text-base"
      >
        Verify
      </CustomButton>
      <div className="text-center">
        <p>
          <span className="text-[13px] text-neutral-dark-2">
            Didn&apos;t receive any code?
          </span>
          <span
            className="p-2 text-[13px] font-semibold text-primary hover:cursor-pointer hover:underline"
            onClick={() => setIsOtpResent(true)}
          >
            Resend OTP
          </span>
        </p>
        {isOtpResent && (
          <>
            <div className="my-2 flex items-center gap-x-6 sm:my-4">
              <span className="w-full border-b border-stroke-colors-stroke"></span>
              <span className="text-[13px]">Or</span>
              <span className="w-full border-b border-stroke-colors-stroke"></span>
            </div>
            <p
              className="cursor-pointer p-1 text-[13px] font-semibold leading-6 text-primary hover:underline sm:px-4 sm:py-2 sm:text-base sm:font-medium"
              onClick={() => {
                setCurrentStage(0);
                setIsOtpResent(false);
                setIsCodeComplete(false);
                setCode("");
                setEmail("");
              }}
            >
              Change email
            </p>
          </>
        )}
      </div>
    </>
  );

  const VerificationSuccessful = (
    <>
      <div className="text-center">
        <Heading>Verification Successful</Heading>
        <Description>
          Your verification was successful, you can now proceed to reset your
          password
        </Description>
      </div>
      <Link href={"/reset-password"} className="w-full max-w-[551px]">
        <CustomButton
          type="submit"
          variant="primary"
          className="h-12 w-full rounded-lg text-sm font-bold shadow-none sm:h-16 sm:text-base sm:font-medium"
        >
          Reset Password
        </CustomButton>
      </Link>
    </>
  );

  const VerificationSuccessfulMessage = (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{
        opacity: 0,
        height: 0,
        transition: { duration: 0.3 },
      }}
      className="w-full max-w-[552px] overflow-hidden"
    >
      <div className="flex h-[60px] items-center justify-between rounded-sm border border-[#5FC96A] bg-[#E7F7E9] px-6 sm:h-[72px]">
        <div className="flex items-center gap-x-2">
          <CircleCheck className="text-[#0F9F1D]" />
          <p className="text-sm text-neutral-dark-2 sm:text-base">
            Email Verified Successfully
          </p>
        </div>
        <X
          size={24}
          cursor={"pointer"}
          onClick={() => setShowSuccessMessage(false)}
        />
      </div>
    </motion.div>
  );

  const sections = [
    {
      element: Default,
      stage: 0,
      onSubmit: () => setCurrentStage(1),
    },
    {
      element: VerificationCode,
      stage: 1,
      onSubmit: () => setCurrentStage(2),
    },
    {
      element: VerificationSuccessful,
      stage: 2,
      onSubmit: () => {},
    },
  ];

  return (
    <div className="mb-[133px] mt-[85px] flex flex-col items-center justify-center px-6">
      <AnimatePresence>
        {currentStage === 2 &&
          showSuccessMessage &&
          VerificationSuccessfulMessage}
      </AnimatePresence>
      {sections.map(
        (section, index) =>
          section.stage === currentStage && (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                section.onSubmit();
              }}
              key={index}
              className="mt-8 flex w-full max-w-[552px] flex-col gap-y-5 sm:gap-y-6"
            >
              {section.element}
            </form>
          ),
      )}
    </div>
  );
};

export default ForgotPassword;
