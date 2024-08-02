"use client";

import Link from "next/link";

const Join = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 py-20 md:px-10 lg:px-10 xl:px-10">
        <h3 className="mb-3 text-center text-[28px] font-[700] sm:text-[32px] md:text-[36px] lg:text-[44px]">
          Meet Our Team
        </h3>

        <p className="mx-auto mb-3 w-full text-center text-[14px] sm:w-[500px] sm:text-[16px] md:w-[600px] md:text-[18px] lg:w-[740px] lg:text-[18px]">
          Discover the passionate individuals who drive our vision and bring our
          projects to life. Our diverse team combines expertise, creativity, and
          dedication.
        </p>

        <Link
          href="/about-us/dedicated-team"
          className="mx-auto flex h-[40px] w-[66px] items-center justify-center rounded-md bg-primary text-background"
        >
          View
        </Link>
      </div>
    </div>
  );
};

export default Join;
