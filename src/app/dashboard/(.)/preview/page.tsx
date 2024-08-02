"use client";

import { useEffect, useState } from "react";

export default function Preview() {
  const [squeezeDetails, setSqueezeDetails] = useState({
    title: "",
    headline: "",
    subHeadline: "",
    body: "",
    image: "",
  });

  useEffect(() => {
    setSqueezeDetails(
      JSON.parse(localStorage.getItem("hng_new_squeeze_page") || "{}"),
    );
  }, []);

  return (
    <div className="flex justify-center bg-cover bg-center px-3 py-6 sm:px-8 sm:py-20 md:justify-start md:px-32 md:py-16">
      <div className="w-[480px] rounded-lg bg-background px-3 py-8 text-neutral-dark-1 md:px-6">
        <div className="items-left flex flex-col justify-between px-3">
          <h1 className="text-[26px] font-bold leading-8 md:text-[32px]">
            {squeezeDetails?.title}
          </h1>

          <div className="my-3 pr-2 md:my-10">
            <p className="text-lg font-medium leading-6">
              {squeezeDetails?.headline}
            </p>
          </div>

          <div className="my-3">
            <p className="text-lg font-medium leading-6">
              {squeezeDetails?.subHeadline}
            </p>
          </div>

          <div className="my-3 items-center space-x-3">
            <div className="mb-3">
              <p className="text-lg font-medium leading-6">
                {squeezeDetails?.body}
              </p>
            </div>

            <form className="mb-4">
              <input
                className="block w-full rounded-md border border-neutral-dark-1 bg-background p-3 text-neutral-dark-1 outline-none"
                type="text"
                placeholder="First Name"
              />

              <input
                className="mt-2 block w-full rounded-md border border-neutral-dark-1 bg-background p-3 outline-none"
                type="text"
                placeholder="Last Name"
              />

              <input
                className="mt-2 block w-full rounded-md border border-neutral-dark-1 bg-background p-3 outline-none"
                type="email"
                placeholder="Enter your email"
              />

              <button
                type="submit"
                className="mt-4 block w-full rounded-md bg-primary py-3 font-medium text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send me the template
              </button>
            </form>
            <p className="text-center text-xs font-semibold">
              We respect your privacy, unsubscribe anytime, view our{" "}
              <span className="text-primary">privacy policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
