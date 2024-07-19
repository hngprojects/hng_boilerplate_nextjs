"use client";

import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

type FormInputs = {
  email: string;
};

const HeroSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    toast.error("Failed to send a copy!!");

    // toast.success("A copy has been sent to you !!!");
    reset();
  };

  return (
    <div className="container mx-auto box-border flex max-w-[1280px] flex-col p-6 md:h-screen md:flex-row md:items-center md:gap-8 md:p-12 lg:max-h-[800px]">
      {/* Left column */}
      <div className="mb-8 flex flex-col gap-3 md:mb-0 md:w-1/2 md:pr-8">
        <p className="text-[1.5rem] text-gray-500">New</p>
        <div className="my-3 h-[0.10rem] w-[4rem] bg-gray-500"></div>
        <h1 className="mb-4 text-5xl font-bold">Why build from Scratch?</h1>
        <p className="mb-6 text-lg">
          Streamline your processes with HNG boilerplate built for{" "}
          <span className="text-orange-500">efficiency</span> and{" "}
          <span className="text-orange-500">optimal productivity</span>.
        </p>
        <p className="mb-2 text-sm text-gray-600">
          Enter your Email to get Free Templates
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          <input
            type="email"
            placeholder="Enter email address"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[\w%+.-]+@[\d.a-z-]+\.[a-z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`w-full border px-4 py-2 outline-none ${
              errors.email ? "border-red-500" : "border-gray-300"
            } mb-2 rounded`}
          />
          {errors.email && (
            <p className="mb-2 text-sm text-red-500">{errors.email.message}</p>
          )}
          <button
            type="submit"
            className="mt-3 w-[250px] rounded-lg bg-orange-500 px-4 py-4 text-xl text-white transition duration-300 hover:bg-orange-600"
          >
            Get Your Free Copy
          </button>
        </form>
      </div>

      {/* Right column */}
      <div className="md:w-1/2">
        <div className="relative aspect-square w-full">
          <Image
            src="/squeezepage/image.png"
            alt="Woman using laptop"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default HeroSection;
