"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { getApiUrl } from "~/actions/getApiUrl";
import { registerUser, resendOtp, verifyOtp } from "~/actions/register";
import CustomButton from "~/components/common/common-button/common-button";
import { Input } from "~/components/common/input";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import { useToast } from "~/components/ui/use-toast";
import { cn } from "~/lib/utils";
import { RegisterSchema } from "~/schemas";
import { formatTime, maskEmail } from "~/utils";

const Register = () => {
  const t = useTranslations("register");
  const router = useRouter();
  const { toast } = useToast();
  const { status } = useSession();
  const [isLoading, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(15 * 60);
  const [value, setValue] = useState("");
  const [createOrg, setCreateOrg] = useState<boolean>(false);

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    const apiUrl = await getApiUrl();

    startTransition(async () => {
      await registerUser(values).then(async (data) => {
        if (data.status === 201) {
          // Handle redirection based on createOrg condition
          if (createOrg) {
            router.push("/register/organisation");
          } else {
            router.push("/login");
          }

          toast({
            title: "Account created successfully",
            description: "Verify your account",
          });

          const emailTemplateId = data?.data?.email_template_id;

          // Check if the email_template_id is provided
          if (emailTemplateId) {
            const emailData = {
              template_id: emailTemplateId,
              subject: "Welcome to Our Service!",
              recipient: values.email,
              variables: JSON.stringify({ name: values.first_name }),
              status: "pending",
            };

            try {
              const response = await fetch(`${apiUrl}/api/v1/email-requests`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(emailData),
              });

              const emailResult = await response.json();
              if (emailResult.status !== "success") {
                throw new Error(emailResult.message || "Email sending failed");
              }
            } catch {
              // Handle error, possibly show a toast notification or log it
            }
          }
        } else {
          toast({
            title: "An error occurred",
            description: data.error,
          });
        }
      });
    });
  };

  const onOtpSubmit = async () => {
    startTransition(async () => {
      const values = { token: value, email: form.getValues().email };
      await verifyOtp(values).then(async (data) => {
        if (data.status === 200) {
          setShowOtp(false);
          router.push("/login");
        }

        toast({
          title:
            data.status === 201
              ? "Email verification successfully"
              : "an error occurred",
          description: data.status === 201 ? "Redirecting" : data.error,
        });
      });
    });
  };

  const resendOtpreq = async () => {
    startTransition(async () => {
      resendOtp(form.getValues().email).then(async (data) => {
        if (data.status === 200) {
          setTimeLeft(15 * 60);
          toast({
            title: "OTP sent successfully",
            description: "Please check your email",
          });
        } else {
          toast({
            title: "Error",
            description: data.error,
            variant: "destructive",
          });
        }
      });
    });
  };

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="font-inter text-neutralColor-dark-2 mb-5 text-center text-2xl font-semibold leading-tight">
            {t("signUp")}
          </h1>
          <p className="font-inter text-neutralColor-dark-2 mt-2 text-center text-sm font-normal leading-6">
            {t("createAccountDesc")}
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
          <CustomButton
            variant="outline"
            isLeftIconVisible={true}
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            icon={
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.327 16.3285 15.1115 18 12.5 18C9.1865 18 6.5 15.3135 6.5 12C6.5 8.6865 9.1865 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C6.9775 2 2.5 6.4775 2.5 12C2.5 17.5225 6.9775 22 12.5 22C18.0225 22 22.5 17.5225 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                  fill="#FFC107"
                />
                <path
                  d="M3.65295 7.3455L6.93845 9.755C7.82745 7.554 9.98045 6 12.5 6C14.0295 6 15.421 6.577 16.4805 7.5195L19.309 4.691C17.523 3.0265 15.134 2 12.5 2C8.65895 2 5.32795 4.1685 3.65295 7.3455Z"
                  fill="#F97316"
                />
                <path
                  d="M12.5 22.0003C15.083 22.0003 17.43 21.0118 19.2045 19.4043L16.1095 16.7853C15.0718 17.5745 13.8038 18.0014 12.5 18.0003C9.89903 18.0003 7.69053 16.3418 6.85853 14.0273L3.59753 16.5398C5.25253 19.7783 8.61353 22.0003 12.5 22.0003Z"
                  fill="#4CAF50"
                />
                <path
                  d="M22.3055 10.0415H21.5V10H12.5V14H18.1515C17.7571 15.1082 17.0467 16.0766 16.108 16.7855L16.1095 16.7845L19.2045 19.4035C18.9855 19.6025 22.5 17 22.5 12C22.5 11.3295 22.431 10.675 22.3055 10.0415Z"
                  fill="#1976D2"
                />
              </svg>
            }
          >
            {t("continueWithGoogle")}
          </CustomButton>
        </div>
        <div className="flex items-center justify-center">
          <hr className="w-full border-t border-gray-300" />
          <span className="font-inter text-neutralColor-dark-1 px-3 text-xs font-normal leading-tight">
            OR
          </span>
          <hr className="w-full border-t border-gray-300" />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutralColor-dark-2">
                    {t("firstName")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={isLoading}
                      placeholder={`${t("firstNamePlaceholder")}`}
                      {...field}
                      className={cn(
                        "font-inter w-full rounded-md border px-3 py-6 text-sm font-normal leading-[21.78px] transition duration-150 ease-in-out focus:outline-none",
                        form.formState.errors.first_name &&
                          "border-destructive",
                      )}
                    />
                  </FormControl>
                  <FormMessage data-testid="name-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutralColor-dark-2">
                    {t("lastName")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={isLoading}
                      placeholder={`${t("lastNamePlaceholder")}`}
                      {...field}
                      className={cn(
                        "font-inter w-full rounded-md border px-3 py-6 text-sm font-normal leading-[21.78px] transition duration-150 ease-in-out focus:outline-none",
                        form.formState.errors.last_name && "border-destructive",
                      )}
                    />
                  </FormControl>
                  <FormMessage data-testid="name-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutralColor-dark-2">
                    {t("email")}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      disabled={isLoading}
                      placeholder={`${t("emailPlaceholder")}`}
                      {...field}
                      className={cn(
                        "font-inter w-full rounded-md border px-3 py-6 text-sm font-normal leading-[21.78px] transition duration-150 ease-in-out focus:outline-none",
                        form.formState.errors.email && "border-destructive",
                      )}
                    />
                  </FormControl>
                  <FormMessage data-testid="email-error" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutralColor-dark-2">
                    {t("password")}
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        disabled={isLoading}
                        type={showPassword ? "text" : "password"}
                        placeholder={`${t("paswwordPlaceholder")}`}
                        {...field}
                        className={cn(
                          "font-inter w-full rounded-md border px-3 py-6 text-sm font-normal leading-[21.78px] transition duration-150 ease-in-out focus:outline-none",
                          form.formState.errors.password &&
                            "border-destructive",
                        )}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                      >
                        {showPassword ? (
                          <Eye
                            className="h-5 w-5 text-gray-400"
                            data-testid="eye-icon"
                          />
                        ) : (
                          <EyeOff
                            className="h-5 w-5 text-gray-400"
                            data-testid="eye-off-icon"
                          />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage data-testid="password-error" />
                </FormItem>
              )}
            />
            <div
              className="flex items-center gap-2"
              onClick={() => setCreateOrg((a) => !a)}
            >
              <Checkbox id="createOrg" />
              <label
                htmlFor="createOrg"
                className="font-inter ms-1 text-center text-sm leading-[19.2px] hover:cursor-pointer"
              >
                Also create an organisation
              </label>
            </div>
            <CustomButton
              type="submit"
              variant="primary"
              size="default"
              className="w-full py-6"
              isDisabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center gap-x-2">
                  <span className="animate-pulse">{t("loggingIn")}</span>{" "}
                  <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                </span>
              ) : (
                <span>{t("createAccount")}</span>
              )}
            </CustomButton>
          </form>
        </Form>
        <Dialog open={showOtp} onOpenChange={setShowOtp}>
          <DialogContent
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
            className="flex w-full flex-col items-center gap-5 sm:max-w-[425px]"
          >
            <DialogHeader>
              <DialogTitle className="w-full text-center text-xl font-bold text-[#0F172A]">
                {t("emailVerification")}
              </DialogTitle>
              <DialogDescription className="flex flex-col items-center text-[#0F172A]">
                <p className="text-base font-medium text-[#0F172A]">
                  {t("emailVerificationDesc")}{" "}
                  {maskEmail(form.getValues().email)}
                </p>
                <div className="flex flex-col items-center text-base">
                  <span>{t("checkSpam")}</span>
                  <span>
                    {t("otpExpiresIn")}: {formatTime(timeLeft)}
                  </span>
                </div>
              </DialogDescription>
            </DialogHeader>

            <InputOTP
              maxLength={6}
              className="flex w-full"
              onComplete={onOtpSubmit}
              value={value}
              onChange={setValue}
              disabled={isLoading}
            >
              {...[0, 1, 2, 3, 4, 5].map((number_) => (
                <InputOTPGroup key={number_}>
                  <InputOTPSlot index={number_} />
                </InputOTPGroup>
              ))}
            </InputOTP>

            <div className="flex flex-col items-center">
              <p className="text-xs text-gray-500">
                {t("resendCode")}{" "}
                <span
                  className="cursor-pointer text-orange-500"
                  onClick={() => resendOtpreq()}
                >
                  resend
                </span>
              </p>
            </div>
            <p className="text-center text-xs text-gray-500">
              {t("dataProcessing")}
            </p>
          </DialogContent>
        </Dialog>

        <p className="font-inter text-neutralColor-dark-1 mt-5 text-center text-sm font-normal leading-[15.6px]">
          {t("alreadyHaveAccount")}{" "}
          <Link
            href="/login"
            className="font-inter ms-1 text-left text-base font-bold leading-[19.2px] text-primary hover:text-orange-400"
            data-testid="link"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
