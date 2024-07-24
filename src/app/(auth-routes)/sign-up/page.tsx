"use client";

import Image from "next/image";
import Link from "next/link";

import SignupForm from "./_component/SignupForm";

const page = () => {
  interface IData {
    fullName: string;
    email: string;
    password: string;
  }
  return (
    <section>
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
                src={"/signup/icons/flat-color-icons_google.svg"}
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
                src={"/signup/icons/bi_facebook.svg"}
                alt="Facebook Icon"
                width={24}
                height={24}
              />
              <p className="text-neutralColor-dark-2 font-medium">
                Sign in with facebook
              </p>
            </button>
          </div>
          <SignupForm
            onSubmit={function (data: IData): void {
              alert(JSON.stringify(data));
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
    </section>
  );
};

export default page;
