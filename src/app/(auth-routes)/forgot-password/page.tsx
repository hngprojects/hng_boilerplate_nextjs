"use client";

import { TooltipArrow } from "@radix-ui/react-tooltip";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CircleCheck, X } from "lucide-react";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import CustomButton from "~/components/common/common-button/common-button";
import { InputOtp } from "~/components/common/input-otp";
import CustomInput from "~/components/common/input/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useToast } from "~/components/ui/use-toast";
import { cn } from "~/lib/utils";

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
  const [isCodeComplete, setIsCodeComplete] = useState(false);
  const [isCodeCorrect, setIsCodeCorrect] = useState(false);
  const [isOtpResent, setIsOtpResent] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);
  const [emailTooltipContent, setEmailTooltipContent] = useState("");
  const [apiUrl, setApiUrl] = useState("");
  const [userEmails, setUserEmails] = useState<string[]>([]);
  const { toast } = useToast();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isValidating, setIsValidating] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      let allUsers: string[] = [];
      let currentPage = 1;
      let lastPage = 1;
      try {
        const url = await getApiUrl();
        setApiUrl(url);

        do {
          const response = await axios.get(
            `${url}/api/v1/users?page=${currentPage}`,
          );

          type UserResponse = {
            data: {
              email: string;
            }[];
          };

          const data: UserResponse = response.data;
          const fetchedUserEmails: string[] = data.data.map(
            (user) => user.email,
          );

          allUsers = [...allUsers, ...fetchedUserEmails];
          currentPage = response.data.current_page;
          lastPage = response.data.last_page;
          currentPage++;
        } while (currentPage <= lastPage);

        setUserEmails(allUsers);
      } catch {
        toast({
          title: "Error",
          description: "Failed to fetch user emails",
          variant: "destructive",
        });
      }
    };

    getUsers();
  }, [toast]);

  const passwordError =
    newPassword.length < 8 ||
    !/[AZa-z]/.test(newPassword) ||
    !/\d/.test(newPassword) ||
    !/[\W_]/.test(newPassword);

  const confirmPasswordError = confirmNewPassword !== newPassword;

  const emailError =
    email && !userEmails.some((userEmail) => userEmail.includes(email));

  const fetchOtpCode = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/auth/forgot-password`,
        { email },
      );
      return response;
    } catch (error) {
      return axios.isAxiosError(error) && error.response
        ? {
            success: false,
            error: error.response.data,
          }
        : {
            success: false,
            error: "Unknown error occurred",
          };
    }
  };
  const validateOTP = async (inputCode: string) => {
    setIsValidating(true);
    try {
      const response = await axios.post(
        `${apiUrl}/api/v1/auth/verify-forgot-otp`,
        { email, otp: inputCode },
      );
      setIsCodeCorrect(response.status === 200 ? true : false);
    } catch (error) {
      setIsCodeCorrect(false);
      return axios.isAxiosError(error) && error.response
        ? {
            success: false,
            error: error.response.data,
          }
        : {
            success: false,
            error: "Unknown error occurred",
          };
    } finally {
      setIsValidating(false);
    }
  };

  const handleReset = async () => {
    const formattedData = {
      email: email,
      password: newPassword,
      password_confirmation: confirmNewPassword,
    };
    try {
      setIsValidating(true);
      const response = await axios.post(
        `${apiUrl}/api/v1/auth/reset-forgot-password`,
        formattedData,
      );
      if (response.status === 200) {
        setIsValidating(false);
      }
      return response;
    } catch (error) {
      return axios.isAxiosError(error) && error.response
        ? {
            success: false,
            error: error.response.data,
          }
        : {
            success: false,
            error: "Unknown error occurred",
          };
    }
  };

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
                  ? userEmails.find((email) => email.includes(newValue))
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
        onClick={fetchOtpCode}
        isDisabled={email === ""}
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
          slotClassName={`size-10 sm:size-[60px] !rounded-lg border duration-300 font-bold text-xs sm:text-lg ${isCodeComplete ? "border-primary ring-none" : isCodeComplete ? "border-error" : "border-stroke-colors-stroke ring-primary"}`}
          className="justify-center"
          data-testid="forgot-password-otp-input"
          onChange={(value) => {
            if (value.length === 6) {
              validateOTP(value);
              setIsCodeComplete(true);
            } else {
              setIsCodeComplete(false);
            }
          }}
        />
        {!isCodeCorrect && isCodeComplete && (
          <Error>The OTP entered is not correct. Try again</Error>
        )}
      </div>
      <CustomButton
        isDisabled={!isCodeComplete || !isCodeCorrect}
        type="submit"
        variant="primary"
        className="h-12 rounded-lg text-xs font-bold shadow-none disabled:bg-slate-100 disabled:text-neutral-dark-1 sm:h-16 sm:text-base"
      >
        {isValidating ? "Verifying..." : "Verify"}
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
      <CustomButton
        type="submit"
        variant="primary"
        className="h-12 w-full rounded-lg text-sm font-bold shadow-none sm:h-16 sm:text-base sm:font-medium"
      >
        Reset Password
      </CustomButton>
    </>
  );

  const PasswordUpdated = (
    <>
      <div className="text-center">
        <Heading>PASSWORD UPDATED</Heading>
        <Check
          className="mx-auto my-6 flex items-center justify-center rounded-full bg-[#0F9F1D] p-3 text-4xl text-[#FFF]"
          size={80}
        />
        <Description>Your password has been updated</Description>
      </div>
      <Link href="/login" className="w-full">
        <CustomButton
          type="submit"
          variant="primary"
          className="h-12 w-full rounded-lg text-sm font-bold shadow-none sm:h-16 sm:text-base sm:font-medium"
        >
          Back to Login
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

  const PasswordUpdatedSuccessfulMessage = (
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
            Password Updated Successfully!
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

  const ResetPassword = (
    <>
      <div className="text-center">
        <Heading>Reset Password</Heading>
        <Description>
          Your password must be at least 8 characters long
        </Description>
      </div>
      <CustomInput
        type="password"
        onChange={(event) => {
          setNewPassword(event.target.value);
        }}
        value={newPassword}
        variant="border"
        label="New Password"
        placeholder="New Password"
        className={`h-12 rounded-lg text-sm placeholder:text-sm focus:bg-zinc-50 focus:placeholder:text-neutral-dark-2 sm:h-16 sm:text-lg sm:placeholder:text-lg ${passwordError ? "border-error" : "focus:border-primary"}`}
        labelClassName="sm:text-xl text-[13px] text-neutral-dark-2"
      />
      {passwordError && (
        <Error className="mt-2 cursor-default font-normal">
          Invalid password format. Please check again
        </Error>
      )}
      <CustomInput
        type="password"
        onChange={(event) => {
          setConfirmNewPassword(event.target.value);
        }}
        value={confirmNewPassword}
        variant="border"
        label="Confirm Password"
        placeholder="Confirm Password"
        className={`h-12 rounded-lg text-sm placeholder:text-sm focus:bg-zinc-50 focus:placeholder:text-neutral-dark-2 sm:h-16 sm:text-lg sm:placeholder:text-lg ${confirmPasswordError ? "border-error" : "focus:border-primary"}`}
        labelClassName="sm:text-xl text-[13px] text-neutral-dark-2"
      />
      {confirmPasswordError && (
        <Error className="mt-2 cursor-default font-normal">
          Password do not match!
        </Error>
      )}
      <CustomButton
        type="submit"
        variant="primary"
        className="h-12 rounded-lg text-sm font-bold sm:h-16 sm:text-base sm:font-medium"
        onClick={handleReset}
        isDisabled={passwordError || confirmPasswordError}
      >
        {isValidating ? "Validating..." : "Reset Password"}
      </CustomButton>
    </>
  );

  const sections = [
    {
      element: Default,
      stage: 0,
      onSubmit: () => {
        if (!emailError) setCurrentStage(1);
      },
    },
    {
      element: VerificationCode,
      stage: 1,
      onSubmit: () => setCurrentStage(2),
    },
    {
      element: VerificationSuccessful,
      stage: 2,
      onSubmit: () => setCurrentStage(3),
    },
    {
      element: ResetPassword,
      stage: 3,
      onSubmit: () => setCurrentStage(4),
    },
    {
      element: PasswordUpdated,
      stage: 4,
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
      <AnimatePresence>
        {currentStage === 4 &&
          showSuccessMessage &&
          PasswordUpdatedSuccessfulMessage}
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
