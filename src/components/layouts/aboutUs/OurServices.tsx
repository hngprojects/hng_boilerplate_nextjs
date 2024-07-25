"use client";

import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
    return (
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10 py-20">
            <div className="flex flex-col items-center lg:flex-row">
                <div className="w-full md:pr-10 lg:w-3/5 lg:pr-20 mb-10">
                    <h3 className="text-[20px] text-primary sm:text-[24px] md:text-[28px] mb-2 font-[600]">
                        Our Services
                    </h3>

                    <p className="mb-10 relative text-[28px] sm:text-[36px] md:text-[44px] lg:text-[54px] font-[600] leading-[34px] sm:leading-[42px] md:leading-[50px] lg:leading-[58px] text-neutral-600 w-full sm:w-[400px] md:w-[500px] lg:w-[550px]">
                        Trained to Give You The Best
                        <span>
                            <Image
                                src="/images/about-us/ellipse.svg"
                                alt="eclipse"
                                width={100}
                                height={15}
                                className="hidden sm:flex absolute left-[80px] md:left-[110px] lg:left-[160px] top-[35px] sm:top-[40px] md:top-[45px] lg:top-[55px] max-sm:w-[50px]"
                            />
                        </span>
                    </p>

                    <Link href="/contact-us" className="rounded px-8 py-4 bg-primary text-[12px] sm:text-[14px] text-background text-center">
                        Contact Us
                    </Link>
                </div>

                <div className="items-start lg:w-2/3">
                    <p className="text-[16px] sm:text-[18px] text-neutral-600 leading-[30px] sm:leading-[32px] md:leading-[35px]">
                        Since our founding in, Hng Boilerplate has been dedicated to
                        constantly evolving to stay ahead of the curve. Our agile mindset and
                        relentless pursuit of innovation ensure that you're always equipped
                        with the most effective tools and strategies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
