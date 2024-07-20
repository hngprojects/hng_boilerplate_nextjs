/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { z } from "zod";

import Navbar from "~/components/layouts/Navbar/Navbar";
import FacebookIcon from "../../../public/bi_facebook.svg";
import GoogleIcon from "../../../public/flat-color-icons_google.svg";
import Linkedin from "../../../public/linkedin.svg";
import Instagram from "../../../public/mdi_instagram.svg";
import YouTube from "../../../public/mdi_youtube.svg";
import Twitter from "../../../public/prime_twitter.svg";
import Facebook from "../../../public/ri_facebook-fill.svg";

type FormDataType = {
  fullName: string;
  email: string;
  password: string;
};

type FormErrors = {
  fullName?: string;
  email?: string;
  password?: string;
};

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

export const Form = ({ onSubmit }: TestFormProperties) => {
  const [formData, setFormData] = useState<FormDataType>({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    const fieldSchema = schemaRegister.shape[name];
    const result = fieldSchema.safeParse(value);

    if (result.success) {
      setErrors((previousErrors) => {
        const { [name]: _, ...remainingErrors } = previousErrors;
        return remainingErrors;
      });
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: result.error.errors[0].message,
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = schemaRegister.safeParse(formData);

    if (result.success) {
      setErrors({});
      onSubmit(formData);
    } else {
      const newErrors: FormErrors = {};
      for (const error of result.error.errors) {
        const fieldName = error.path[0] as keyof FormDataType;
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
      <button className="rounded-lg bg-primary px-4 py-2 text-base font-bold text-[#FAF8F8] lg:h-16">
        Create Account
      </button>
    </form>
  );
};

const page = () => {
  return (
    <section>
      <Navbar />
      <div className="flex w-full items-center justify-center">
        <div className="mx-6 mt-[5.3125rem] text-center md:mx-0">
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
          <Form
            // eslint-disable-next-line unused-imports/no-unused-vars
            onSubmit={function (data: {
              fullName: string;
              email: string;
              password: string;
            }): void {
              throw new Error("Function not implemented.");
            }}
          />
          <p className="mt-4 text-center text-[13px]">
            Already Have An Account?{" "}
            <Link href="" className="text-primary">
              Login
            </Link>
          </p>
        </div>
      </div>
      <footer className="mt-[16.3125rem] bg-[hsl(var(--neutralColor-dark-2))] text-[#FAFAFA]">
        <div className="hidden lg:block">
          <div className="grid grid-cols-5 px-[8.3%] pb-12 pt-[4.5rem]">
            <div className="">
              <h5 className="mb-2 text-xl font-bold">BoilerPlate</h5>
              <p className="mt-9 text-base">Logo subject details and address</p>
            </div>

            <div className="">
              <h5 className="text-xl font-bold">Navigation</h5>
              <ul className="mt-[37px] flex flex-col gap-[17px] text-lg">
                <li>
                  <Link href="" passHref>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="" passHref>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="" passHref>
                    Job Listing
                  </Link>
                </li>
                <li>
                  <Link href="" passHref>
                    Feature Updates
                  </Link>
                </li>
                <li>
                  <Link href="" passHref>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support section */}
            <div className="">
              <h5 className="text-xl font-bold">Support</h5>
              <ul className="mt-[37px] flex flex-col gap-[17px] text-lg">
                <li>
                  <Link href="" passHref>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="" passHref>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="" passHref>
                    Waiting List
                  </Link>
                </li>
                <li>
                  <Link href="" passHref>
                    Pricing Experience
                  </Link>
                </li>
                <li>
                  <Link href="" passHref>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal section */}
            <div className="">
              <h5 className="text-xl font-bold">Legal</h5>
              <ul className="mt-[37px] flex flex-col gap-[17px] text-lg">
                <li>
                  <Link href="" passHref>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="" passHref>
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter section */}
            <div className="">
              <h5 className="text-lg font-semibold leading-[272.22%]">
                Sign Up For Newsletter
              </h5>
              <div className="relative mt-1">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full rounded-[5px] border border-gray-400 bg-[#E2E8F0] p-2.5 text-[#20382B] outline-none"
                />
                <button className="text-primary-forebg-primary-foreground absolute right-2.5 top-[50%] -translate-y-[50%] rounded-[6px] bg-orange-500 px-4 py-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Social links and copyright section */}
          <div className="flex flex-row items-center justify-between border-t border-[#FAFAFA] px-[8.3%] pb-16 pt-5">
            <div className="mb-4 flex space-x-4 sm:mb-0">
              <Link
                href=""
                aria-label="Twitter"
                className="rounded-full border border-transparent bg-primary p-3"
              >
                <Image src={Twitter} alt="Twitter" width={16} height={16} />
              </Link>
              <Link
                href=""
                aria-label="YouTube"
                className="rounded-full border border-transparent bg-primary p-3"
              >
                <Image src={YouTube} alt="YouTube" width={16} height={16} />
              </Link>
              <Link
                href=""
                aria-label="Instagram"
                className="rounded-full border border-transparent bg-primary p-3"
              >
                <Image src={Instagram} alt="Instagram" width={16} height={16} />
              </Link>
              <Link
                href=""
                aria-label="LinkedIn"
                className="rounded-full border border-transparent bg-primary p-3"
              >
                <Image src={Linkedin} alt="LinkedIn" width={16} height={16} />
              </Link>
              <Link
                href=""
                aria-label="Facebook"
                className="rounded-full border border-transparent bg-primary p-3"
              >
                <Image src={Facebook} alt="Facebook" width={16} height={16} />
              </Link>
            </div>
            <p className="text-sm">&copy; 2024 All Rights Reserved</p>
            <div>
              <Link className="text-sm" href="#" passHref>
                Privacy Policy
              </Link>
              <span className="mx-2">|</span>
              <Link className="text-sm" href="#" passHref>
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center lg:hidden">
          <div className="px-[6.1%] pb-[132px]">
            <div className="pt-7">
              <h5 className="mb-2 text-xl font-semibold">BoilerPlate</h5>
              <p className="text-lg">Logo subject details and address</p>
            </div>
            <div className="mt-12">
              <h5 className="mb-2 text-lg font-bold">Sign Up For Newsletter</h5>
              <div className="mt-1 flex max-w-full items-center justify-center">
                <div className="relative w-[316px]">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full rounded-[5px] border border-gray-400 bg-[#E2E8F0] p-2.5 text-[#20382B] outline-none"
                  />
                  <button className="text-primary-forebg-primary-foreground absolute right-2.5 top-[50%] -translate-y-[50%] rounded-[6px] bg-orange-500 px-4 py-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-24 grid grid-cols-2 gap-12">
              <div className="mb-6 text-start">
                <h5 className="mb-2 text-xl font-bold">Navigation</h5>
                <ul className="flex flex-col gap-3 text-lg">
                  <li>
                    <Link href="#" passHref>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      Job Listing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      Feature Updates
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mb-6 text-start">
                <h5 className="mb-2 text-xl font-bold">Support</h5>
                <ul className="flex flex-col gap-3 text-lg">
                  <li>
                    <Link href="#" passHref>
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      Waiting List
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      Pricing Experience
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mb-6 text-start">
                <h5 className="mb-2 text-xl font-bold">Legal</h5>
                <ul className="flex flex-col gap-3 text-lg">
                  <li>
                    <Link href="#" passHref>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" passHref>
                      Terms and Conditions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-start">
                <h5 className="mb-2 text-xl font-bold">Follow Us</h5>
                <div className="mb-4 flex w-full gap-2">
                  <Link
                    href=""
                    aria-label="Twitter"
                    className="rounded-full border border-transparent bg-primary p-1"
                  >
                    <Image src={Twitter} alt="Twitter" width={16} height={16} />
                  </Link>
                  <Link
                    href=""
                    aria-label="YouTube"
                    className="rounded-full border border-transparent bg-primary p-1"
                  >
                    <Image src={YouTube} alt="YouTube" width={16} height={16} />
                  </Link>
                  <Link
                    href=""
                    aria-label="Instagram"
                    className="rounded-full border border-transparent bg-primary p-1"
                  >
                    <Image
                      src={Instagram}
                      alt="Instagram"
                      width={16}
                      height={16}
                    />
                  </Link>
                  <Link
                    href=""
                    aria-label="LinkedIn"
                    className="rounded-full border border-transparent bg-primary p-1"
                  >
                    <Image
                      src={Linkedin}
                      alt="LinkedIn"
                      width={16}
                      height={16}
                    />
                  </Link>
                  <Link
                    href=""
                    aria-label="Facebook"
                    className="rounded-full border border-transparent bg-primary p-1"
                  >
                    <Image
                      src={Facebook}
                      alt="Facebook"
                      width={16}
                      height={16}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[#FAFAFA] pb-7 pt-2 text-center">
            <p className="text-sm">&copy; 2024 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default page;
