"use client";

import Link from "next/link";

const Join = () => {
  //

  return (
    <div className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-5 py-20 md:px-10 lg:px-10 xl:px-10">
        <h3 className="mb-3 text-center text-[28px] font-[700] text-neutral-600 sm:text-[32px] md:text-[36px] lg:text-[44px]">
          Join Our Team
        </h3>

        <p className="mx-auto mb-3 w-full text-center text-[14px] text-neutral-600 sm:w-[500px] sm:text-[16px] md:w-[600px] md:text-[18px] lg:w-[700px] lg:text-[20px]">
          Interested in joining our team? View our Job Listing page for openings
          and apply with an equal chance of working with us!
        </p>

        <Link
          href="/register"
          className="mx-auto rounded-md bg-primary px-14 py-4 text-background"
        >
          Join us
        </Link>
      </div>
    </div>
  );
};

export default Join;
