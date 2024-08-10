"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next-nprogress-bar";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { loginUser } from "~/actions/login";
import CustomButton from "~/components/common/common-button/common-button";
import { Input } from "~/components/common/input";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { useToast } from "~/components/ui/use-toast";
import { useLocalStorage } from "~/hooks/use-local-storage";
import { cn } from "~/lib/utils";
import { LoginSchema } from "~/schemas";
import { Organisation } from "~/types";

const Login = () => {
  const router = useRouter();
  const { toast } = useToast();
  const { status } = useSession();
  const [isLoading, startTransition] = useTransition();
  const [showPassword, setShowPassword] = useState(false);
  const [, setUserOrg] = useLocalStorage<Organisation[]>("user_org", []);

  const [currentOrgId, setCurrentOrgId] = useLocalStorage<string | undefined>(
    "current_orgid",
    "",
  );

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      await loginUser(values).then(async (data) => {
        const { email, password } = values;

        if (data.status === 200) {
          setUserOrg(data.organisations);
          if (!currentOrgId) {
            setCurrentOrgId(data.organisations[0].organisation_id);
          }
          await signIn(
            "credentials",
            {
              email,
              password,
              redirect: false,
            },
            { callbackUrl: "/dashboard" },
          );
          router.push("/dashboard");
        }
        toast({
          title: data.status === 200 ? "Login success" : "An error occurred",
          description: data.status === 200 ? "Redirecting" : data.error,
        });
      });
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    document.title = "Login";
  }, []);
  return (
    <div className="flex min-h-full items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="font-inter text-neutralColor-dark-2 mb-5 text-center text-2xl font-semibold leading-tight">
            Login
          </h1>
          <p className="font-inter text-neutralColor-dark-2 mt-2 text-center text-sm font-normal leading-6">
            Welcome back, you&apos;ve been missed!
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
            Continue with Google
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neutralColor-dark-2">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Enter Email Address"
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
                    Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        disabled={isLoading}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        {...field}
                        className={cn(
                          "font-inter w-full rounded-md border px-3 py-6 text-sm font-normal leading-[21.78px] transition duration-150 ease-in-out focus:outline-none",
                          form.formState.errors.password &&
                            "border-destructive",
                        )}
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
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
            <div className="flex items-center justify-between">
              <FormField
                control={form.control}
                name="rememberMe"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>Remember me</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <div className="text-sm">
                <Link
                  href="/forgot-password"
                  className="text-neutralColor-dark-2 text-sm font-medium"
                >
                  Forgot Password?
                </Link>
              </div>
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
                  <span className="animate-pulse">Logging in...</span>{" "}
                  <LoadingSpinner className="size-4 animate-spin sm:size-5" />
                </span>
              ) : (
                <span>Login</span>
              )}
            </CustomButton>
          </form>
        </Form>

        <CustomButton
          type="button"
          variant="outline"
          size="default"
          className="w-full py-6"
        >
          <Link href="/login/magic-link">Sign in with magic link</Link>
        </CustomButton>

        <p className="font-inter text-neutralColor-dark-1 mt-5 text-center text-sm font-normal leading-[15.6px]">
          Don&apos;t Have An Account?{" "}
          <Link
            href="/register"
            className="font-inter ms-1 text-left text-base font-bold leading-[19.2px] text-primary hover:text-orange-400"
            data-testid="link"
          >
            Sign Up
          </Link>
        </p>

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

export default Login;
