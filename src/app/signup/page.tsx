"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { z, ZodType } from "zod";

import CustomButton from "~/components/common/Button/button";
import Footer from "~/components/layouts/Footer";
import Navbar from "~/components/layouts/Navbar";
import FacebookIcon from "../../../public/signup/icons/bi_facebook.svg";
import GoogleIcon from "../../../public/signup/icons/flat-color-icons_google.svg";

interface TestFormProperties {
  onSubmit: (data: {
    fullName: string;
    email: string;
    password: string;
  }) => void;
}

const schemaRegister = z.object({
  fullName: z.string().regex(/^['A-Za-z-]+(?: ['A-Za-z-]+)*$/, {
    message: "Enter your full name",
  }),
  email: z.string().email({
    message: "Enter a valid email format",
  }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters long.",
    })
    .max(20, {
      message: "Password should not be more than 20 characters long.",
    }),
});

type SchemaRegisterType = z.infer<typeof schemaRegister>;

type ErrorsType = Partial<Record<keyof SchemaRegisterType, string>>;

export const Form = ({ onSubmit }: TestFormProperties) => {
  const [formData, setFormData] = useState<SchemaRegisterType>({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<ErrorsType>({});
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name in schemaRegister.shape) {
      setFormData({ ...formData, [name]: value });

      const fieldSchema = schemaRegister.shape[
        name as keyof typeof schemaRegister.shape
      ] as ZodType<string>;
      const result = fieldSchema.safeParse(value);

      if (result.success) {
        setErrors((previousErrors) => {
          const remainingErrors = { ...previousErrors };
          delete remainingErrors[name as keyof SchemaRegisterType];
          return remainingErrors;
        });
      } else {
        setErrors((previousErrors) => ({
          ...previousErrors,
          [name]: result.error.errors[0].message,
        }));
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = schemaRegister.safeParse(formData);

    if (result.success) {
      setErrors({});
      onSubmit(formData);
    } else {
      const newErrors: ErrorsType = {};
      for (const error of result.error.errors) {
        const fieldName = error.path[0] as keyof SchemaRegisterType;
        newErrors[fieldName] = error.message;
      }
      setErrors(newErrors);
    }
  };
  return (
    <form
      className="mt-5 flex flex-col space-y-5 text-left lg:space-y-6"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <div className="flex flex-col space-y-2 lg:space-y-3">
          <label
            htmlFor="fullName"
            className="text-xl font-medium lg:font-normal"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`text-neutralColor-dark-2 rounded-lg border px-4 py-3 text-lg outline-none placeholder:text-[hsl(var(--neutralColor-dark-1))] focus:border-primary lg:py-5 lg:pl-4 lg:pr-6 ${
              errors.fullName
                ? "border-[#E80D0D]"
                : formData.fullName
                  ? "border-primary"
                  : "border-stroke-colors-stroke"
            }`}
            placeholder="Enter your full name"
          />
        </div>
        {errors.fullName && (
          <span className="text-[13px] leading-[180%] text-[#E80D0D]">
            {errors.fullName}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col space-y-2 lg:space-y-3">
          <label
            htmlFor="emailAddress"
            className="text-xl font-medium lg:font-normal"
          >
            Email Address
          </label>
          <input
            type="email"
            id="emailAddress"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`text-neutralColor-dark-2 rounded-lg border px-4 py-3 text-lg outline-none placeholder:text-[hsl(var(--neutralColor-dark-1))] focus:border-primary lg:py-5 lg:pl-4 lg:pr-6 ${
              errors.email
                ? "border-[#E80D0D]"
                : formData.email
                  ? "border-primary"
                  : "border-stroke-colors-stroke"
            }`}
            placeholder="Enter your email address"
          />
        </div>
        {errors.email && (
          <span className="text-[13px] leading-[180%] text-[#E80D0D]">
            {errors.email}
          </span>
        )}
      </div>
      <div className="flex flex-col">
        <div className="relative flex flex-col space-y-2 lg:space-y-3">
          <label
            htmlFor="password"
            className="text-xl font-medium lg:font-normal"
          >
            Password
          </label>
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`text-neutralColor-dark-2 rounded-lg border px-4 py-3 text-lg outline-none placeholder:text-[hsl(var(--neutralColor-dark-1))] focus:border-primary lg:py-5 lg:pl-4 lg:pr-6 ${
              errors.password
                ? "border-[#E80D0D]"
                : formData.password
                  ? "border-primary"
                  : "border-stroke-colors-stroke"
            }`}
            placeholder="Create your password"
          />
          {passwordVisible ? (
            <Eye
              size={24}
              color="#939393"
              className="absolute right-6 top-[50%] cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            />
          ) : (
            <EyeOff
              size={24}
              color="#939393"
              className="absolute right-6 top-[50%] cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            />
          )}
        </div>
        {errors.password && (
          <span className="text-[13px] leading-[180%] text-[#E80D0D]">
            {errors.password}
          </span>
        )}
      </div>
      <CustomButton
        variant="primary"
        className="px-4 py-2 text-base font-bold lg:h-16"
      >
        Create Account
      </CustomButton>
    </form>
  );
};

const page = () => {
  return (
    <section>
      <Navbar />
      <div className="flex w-full items-center justify-center">
        <div className="mx-6 mb-[9rem] mt-[5.3125rem] text-center md:mx-0">
          <h3 className="text-[1.75rem] font-semibold leading-[120%] text-[#141414]">
            Sign Up
          </h3>
          <p className="mt-4 text-xl font-normal text-[hsl(var(--neutralColor-dark-1))]">
            Create an account to get started with us.
          </p>
          <div className="mt-6 flex flex-col items-center gap-2 text-center sm:flex-row md:gap-[18px]">
            <button className="flex w-full flex-row items-center justify-center gap-2.5 rounded-lg border border-border px-4 py-3 md:w-fit md:px-8 md:py-4">
              <Image
                src={GoogleIcon}
                alt="Google Icon"
                width={24}
                height={24}
              />
              <p className="text-neutralColor-dark-2 font-medium">
                Sign in with Google
              </p>
            </button>
            <button className="flex w-full flex-row items-center justify-center gap-2.5 rounded-lg border border-border px-4 py-3 md:w-fit md:px-8 md:py-4">
              <Image
                src={FacebookIcon}
                alt="Facebook Icon"
                width={24}
                height={24}
              />
              <p className="text-neutralColor-dark-2 font-medium">
                Sign in with facebook
              </p>
            </button>
          </div>
          <Form onSubmit={function (): void {}} />
          <p className="mt-4 text-center text-[13px]">
            Already Have An Account?{" "}
            <Link href="" className="text-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
