"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import CustomButton from "~/components/common/common-button/common-button";
import { DialogDemo } from "~/components/common/Dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "~/components/ui/input-otp";
import { useToast } from "~/components/ui/use-toast";
import { getApiUrl } from "~/utils/getApiUrl";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const SignUp = () => {
  const [apiUrl, setApiUrl] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const fetchApiUrl = async () => {
      try {
        const url = await getApiUrl();
        setApiUrl(url);
      } catch {
        toast({
          title: "Error",
          description: "Failed to fetch API URL",
          variant: "destructive",
        });
      }
    };

    fetchApiUrl();
  }, [toast]);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [open, setOpen] = useState(false);

  const handleFormSubmit = async (data: FormData) => {
    try {
      console.log(data);
      const response = await axios.post(`${apiUrl}/api/v1/auth/register`, {
        email: data.email,
        first_name: data.fullname,
        password: data.password,
        last_name: "Promise",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    form.handleSubmit(handleFormSubmit)();
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="my-4 text-gray-500">
          Create an account to get started with us.
        </p>
      </div>
      <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
        <CustomButton
          isDisabled={!apiUrl}
          variant="outline"
          isLeftIconVisible={true}
          onClick={() => signIn("google")}
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
          Sign up with Google
        </CustomButton>
        <CustomButton
          isDisabled={!apiUrl}
          variant="outline"
          href={apiUrl === "" ? undefined : `${apiUrl}/api/v1/auth/facebook`}
          isLeftIconVisible={true}
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_16038_1232)">
                <path
                  d="M24 12.073C24 5.40405 18.6269 -0.00195312 11.9999 -0.00195312C5.36995 -0.000453125 -0.00305176 5.40405 -0.00305176 12.0745C-0.00305176 18.1 4.38595 23.095 10.1219 24.001V15.5635H7.07695V12.0745H10.1249V9.41205C10.1249 6.38655 11.9174 4.71555 14.6579 4.71555C15.9719 4.71555 17.3444 4.95105 17.3444 4.95105V7.92105H15.8309C14.3414 7.92105 13.8764 8.85255 13.8764 9.80805V12.073H17.2034L16.6724 15.562H13.8749V23.9995C19.6109 23.0935 24 18.0985 24 12.073Z"
                  fill="#1976D2"
                />
              </g>
              <defs>
                <clipPath id="clip0_16038_1232">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
        >
          Sign up with Facebook
        </CustomButton>
      </div>
      <div className="mx-auto py-4 md:w-2/4">
        <Form {...form}>
          <form
            className="space-y-8"
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
          >
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <FormLabel>Fullname</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your fullname"
                        {...field}
                        value={field.value || ""}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email address"
                        {...field}
                        value={field.value || ""}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your password"
                        type="password"
                        {...field}
                        value={field.value || ""}
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <CustomButton
              variant="primary"
              type="submit"
              className="w-full"
              onClick={handleSubmit}
            >
              Create Account
            </CustomButton>
            <DialogDemo open={open} onOpenChanged={setOpen}>
              <DialogContent
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
                className="flex w-full flex-col items-center gap-4"
              >
                <DialogTitle className="text-xl font-bold text-[#0F172A]">
                  Sign Up
                </DialogTitle>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-gray-600">
                    Choose your sign-up method:
                  </p>
                  <ul className="flex list-disc flex-col items-center text-xs text-gray-600">
                    <li>Use the temporary sign-in code sent to your mail or</li>
                    <li>Continue with email and password</li>
                  </ul>
                </div>
                <p className="text-xs">
                  Please paste (or type) your 6-digit code:{" "}
                </p>
                <InputOTP maxLength={6}>
                  {...[0, 1, 2, 3, 4, 5].map((number_) => (
                    <InputOTPGroup key={number_}>
                      <InputOTPSlot index={number_} />
                    </InputOTPGroup>
                  ))}
                </InputOTP>
                <CustomButton
                  variant="primary"
                  type="submit"
                  className="w-full"
                >
                  Continue
                </CustomButton>
                <div className="flex flex-col items-center">
                  <p className="text-xs text-gray-500">
                    Would you rather use email and password?
                  </p>
                  <p className="text-xs text-orange-500">
                    Continue with email and password
                  </p>
                </div>
                <p className="text-center text-xs text-gray-500">
                  We would process your data as set forth in our Terms of Use,
                  Privacy Policy and Data Processing Agreement
                </p>
              </DialogContent>
            </DialogDemo>
            <div className="flex justify-center gap-2">
              <p className="text-sm">Already Have An Account?</p>
              <Link className="text-sm text-orange-500" href="/login">
                Login
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default SignUp;
