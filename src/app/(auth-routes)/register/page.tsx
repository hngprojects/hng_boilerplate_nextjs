"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

  const handleFormSubmit = () => {
    form.handleSubmit(() => {
      if (form.formState.isValid) {
        setOpen(true);
      }
    })();
  };

  const handleSubmit = () => {
    form.handleSubmit(handleFormSubmit)();
  };

  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold">Sign Up</h1>
        <p className="text-gray-500">
          Create an account to get started with us.
        </p>
      </div>
      <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
        <Button
          disabled
          className="flex items-center rounded-md border border-gray-300 bg-white px-4 py-4 text-gray-700 shadow-sm hover:bg-gray-50"
        >
          <Image
            src="/images/goggle.png"
            width={20}
            height={20}
            alt="Goggle"
            className="mr-2"
          />
          Sign in with Google
        </Button>
        <Button
          disabled
          className="flex items-center rounded-md border border-gray-300 bg-white p-4 px-4 text-gray-700 shadow-sm hover:bg-gray-50"
        >
          <Image
            src="/images/facebook.svg"
            width={20}
            height={20}
            alt="Facebook"
            className="mr-2"
          />
          Sign in with Google
        </Button>
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
            <Button type="submit" className="w-full" onClick={handleSubmit}>
              Create Account
            </Button>
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
