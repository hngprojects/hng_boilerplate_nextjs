"use client";

import Link from "next/link";

const Join = () => {
  //

  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 py-20 md:px-10 lg:px-10 xl:px-10">
        <h3 className="mb-3 text-center text-[28px] font-[700] text-neutral-600 sm:text-[32px] md:text-[40px]">
          Meet Our Team
        </h3>

        <p className="mx-auto mb-3 w-full text-center text-[14px] text-neutral-600 sm:text-[16px] md:text-[18px] lg:w-[900px] lg:text-[20px]">
          Discover the passionate individuals who drive our vision and bring our
          projects to life. Our diverse team combines expertise, creativity, and
          dedication.
        </p>

        <Link
          href="/about-us"
          className="mx-auto rounded-md bg-primary px-14 py-4 text-background hover:bg-destructive"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default Join;
