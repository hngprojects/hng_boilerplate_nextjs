"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useToast } from "~/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

const getInputClassName = (hasError: boolean, isValid: boolean) => {
  const baseClasses =
    "font-inter w-full rounded-md border px-3 py-6 text-sm font-normal leading-[21.78px] transition duration-150 ease-in-out focus:outline-none focus:ring-1 focus:ring-opacity-50";

  if (hasError) {
    return `${baseClasses} border-red-500 focus:border-red-500 focus:ring-red-500 text-red-900`;
  } else if (isValid) {
    return `${baseClasses} border-orange-500 focus:border-orange-500 focus:ring-orange-500 text-neutralColor-dark-2`;
  }
  return `${baseClasses} border-gray-300 focus:border-orange-500 focus:ring-orange-500 text-neutralColor-dark-2`;
};

const LoginMagicLink: React.FC = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      router.push("/login/magic-link/link-sent");
    } catch (error: unknown) {
      toast({
        title: "Login failed",
        description:
          error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-8 flex min-h-full items-center justify-center bg-gray-50 px-0 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="font-inter text-neutralColor-dark-2 mb-5 text-center text-2xl font-semibold leading-tight">
            Login With Magic Link
          </h1>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 space-y-6"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email" className="text-neutralColor-dark-2">
                    Email
                  </Label>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter Email Address"
                      className={getInputClassName(
                        !!form.formState.errors.email,
                        form.formState.isValid,
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage
                    className="mt-1 text-sm"
                    data-testid="email-error"
                  />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              variant="default"
              size="default"
              className="h-12 w-full rounded-md bg-primary px-4 py-6 text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              {isLoading ? (
                <span className="flex items-center gap-x-2">
                  <span className="animate-pulse">Getting Link...</span>{" "}
                  <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                </span>
              ) : (
                <span>Get Magic Link</span>
              )}
            </Button>
          </form>
        </Form>

        <p className="mt-2 text-center text-xs text-gray-500">
          <ShieldCheck className="mr-1 hidden h-4 w-4 text-gray-400 sm:inline-block" />
          By logging in, you agree to the{" "}
          <a
            href="#"
            className="text-sm font-bold text-primary hover:text-orange-500"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-sm font-bold text-primary hover:text-orange-500"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginMagicLink;
