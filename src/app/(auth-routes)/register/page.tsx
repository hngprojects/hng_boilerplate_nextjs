"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AuthProvider from "~/components/authproviders/AuthProvider";
import { DialogDemo } from "~/components/common/Dialog";
import { Button } from "~/components/ui/button";
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
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="text-gray-500">
          Create an account to get started with us.
        </p>
      </div>
      <div className="flex justify-center gap-4 p-4">
        <AuthProvider
          title="Sign in with Google"
          icon="/public/images/google.png"
        />
        <AuthProvider
          title="Sign in with Google"
          icon="/public/images/google.png"
        />
      </div>
      <div className="mx-auto w-2/4">
        <Form {...form}>
          <form className="space-y-8">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <FormLabel>Fullname</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your fullname" {...field} />
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
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full"
              onClick={() => setOpen(true)}
            >
              Create Account
            </Button>
            <DialogDemo open={open} onOpenChanged={setOpen}>
              <div className="flex w-full flex-col items-center gap-4">
                <h1 className="text-xl font-bold text-[#0F172A]">Sign Up</h1>
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
                <Button type="submit" className="w-full">
                  Continue
                </Button>
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
              </div>
            </DialogDemo>
            <div className="flex justify-center gap-2">
              <p className="text-sm">Already Have An Account?</p>
              <Link className="text-sm text-orange-500" href={"#"}>
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
