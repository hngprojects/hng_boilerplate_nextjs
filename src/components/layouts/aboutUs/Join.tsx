"use client";

import Link from "next/link";


const Join = () => {
    // 

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10 py-20 flex flex-col items-center justify-center">
                <h3 className="text-center text-[28px] font-[700] text-neutral-600 sm:text-[32px] md:text-[36px] lg:text-[44px] mb-3">
                    Join Our Team
                </h3>

                <p className="mx-auto text-center text-[14px] text-neutral-600 sm:text-[16px] md:text-[18px] lg:text-[20px] w-full sm:w-[500px] md:w-[600px] lg:w-[700px] mb-3">
                    Interested in joining our team? View our Job Listing page for openings
                    and apply with an equal chance of working with us!
                </p>

                <Link href="/register" className="py-4 px-14 rounded-md mx-auto bg-primary text-background">
                    Join us
                </Link>
            </div>
        </div>
    );
};

export default Join;
