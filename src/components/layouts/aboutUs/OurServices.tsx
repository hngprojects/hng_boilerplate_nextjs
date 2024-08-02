"use client";

import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-5 lg:px-10 xl:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="mb-10 w-full md:pr-10 lg:w-3/5 lg:pr-20">
            <h3 className="mb-2 text-center text-[20px] font-[700] text-primary sm:text-[24px] md:text-start md:text-[28px]">
              Our Services
            </h3>

            <p className="relative mb-5 w-full text-center text-[34px] font-[700] leading-[normal] max-sm:text-neutral-600 sm:text-[44px] md:mb-10 md:text-start md:font-[600] lg:w-[486px]">
              Trained to Give You The Best
              <span>
                <Image
                  src="/images/about-us/ellipse.svg"
                  alt="eclipse"
                  width={100}
                  height={15}
                  className="absolute left-[180px] top-[50px] flex max-sm:w-[60px] md:left-[520px] md:top-0 lg:left-[100px] lg:top-[55px]"
                />
              </span>
            </p>

            <Link
              href="/contact-us"
              className="mx-auto items-center rounded-lg bg-primary px-4 py-3 text-center text-[12px] text-background max-sm:flex max-sm:w-[107px] sm:text-[14px] md:px-8 md:py-4"
            >
              Contact Us
            </Link>
          </div>

          <div className="w-[2/3] items-start lg:w-[593px]">
            <p className="text-[16px] leading-[19px] text-neutral-600 max-sm:text-center sm:text-[18px] sm:leading-[32px] md:leading-[21.78px]">
              {`Since our founding in, Hng Boilerplate has been dedicated to
            constantly evolving to stay ahead of the curve. Our agile mindset
            and relentless pursuit of innovation ensure that you're always
            equipped with the most effective tools and strategies.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
