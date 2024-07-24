"use client";

import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Breadcrumb } from "~/components/common/breadcrumb";
import CustomButton from "~/components/common/common-button/common-button";

const JobDetails = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pages = isSmallScreen
        ? [
            { name: "Career", href: "/career" },
            {
                name: "Job Details",
                href: "/job-details",
                isCurrent: true,
                style: { color: "hsl(25, 95%, 53%)" },
            },
        ]
        : [
            { name: "Home", href: "/" },
            { name: "Job Listings", href: "/job-listings" },
            {
                name: "Job Details",
                href: "/job-listings/job-detail",
                isCurrent: true,
            },
        ];

    return (
        <main className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10 py-10">
                <Breadcrumb pages={pages} maxPages={isSmallScreen ? 2 : 3} />

                <div className="mb-4 mt-8 grid w-full auto-rows-min grid-cols-1 pb-2 md:grid-cols-3 mt-[60px]">
                    <div className="col-span-1 mb-6 sm:col-span-2 md:mr-16 xl:mr-40">
                        <div className="flex flex-col justify-start">
                            <h1 className="mb-3 text-3xl font-bold text-neutral-dark-2 md:text-[38px]">
                                Product Designer
                            </h1>
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-2">
                                    <h3 className="mt-4 text-[18px] font-bold text-neutral-dark-1 md:text-[25px] md:text-neutral-dark-2">
                                        Job Description
                                    </h3>
                                    <p className="text-[18px] font-normal text-neutral-dark-1 leading-relaxed md:text-neutral-dark-2">
                                        We are looking for a talented and passionate Product
                                        Designer to join our dynamic team. As a Product Designer at
                                        the Company, you will play a critical role in shaping the
                                        user experience and visual design of our products. You will
                                        collaborate closely with cross-functional teams, including
                                        product managers, engineers, and marketers, to create
                                        intuitive and aesthetically pleasing designs that meet user
                                        needs and business goals.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[18px] font-bold text-neutral-dark-1 md:text-[25px] md:text-neutral-dark-2">
                                        Key Responsibilities
                                    </h3>
                                    <ul className="styled-list list-disc pl-8 ">
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                            Conduct user research and gather insights to inform design
                                            decisions
                                        </li>
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                            Create wireframes, prototypes, and high-fidelity mockups
                                            for new features and product enhancements
                                        </li>
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                            Collaborate with the product team to define design
                                            requirements and ensure alignment with business objectives
                                        </li>
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                            Develop and maintain design systems to ensure consistency
                                            across all products
                                        </li>
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                            Conduct usability testing and iterate on designs based on
                                            user feedback
                                        </li>
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                            Stay up-to-date with industry trends and best practices in
                                            design and user experience
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[18px] font-bold text-neutral-dark-1 md:text-[25px] md:text-neutral-dark-2">
                                        Qualifications
                                    </h3>
                                    <ul className="styled-list list-disc pl-8">
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                            Bachelor&apos;s degree in Design, Human-Computer Interaction,
                                            or a related field
                                        </li>
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                            3+ years of experience in product design or a similar role
                                        </li>
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                            Proficiency in design tools such as Figma, Sketch, Adobe
                                            XD, or similar
                                        </li>
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                            Strong portfolio showcasing your design process,
                                            problem-solving skills, and final products
                                        </li>
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2" leading-relaxed mb-3>
                                            Excellent communication and collaboration skills
                                        </li>
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                            Ability to think critically and solve complex design
                                            challenges
                                        </li>
                                        <li className="text-[18px] font-normal text-neutral-dark-1 md:text-neutral-dark-2">
                                            Knowledge of HTML, CSS, and JavaScript is a plus
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-5 self-start xl:ml-[6rem]">
                        <div className="flex max-w-[282px] flex-col items-start justify-start rounded-sm border border-stroke-colors-stroke px-6 py-6 sm:max-w-full">
                            <h5 className="mb-3 text-[18px] font-semibold text-neutral-dark-1 md:md:text-neutral-dark-2">
                                About the job
                            </h5>

                            <div className="mb-2 flex flex-col">
                                <p className="text-[16px] text-neutral-dark-1 md:text-neutral-dark-2">
                                <b> Deadline</b>
                                </p>
                            <p className="text-[16px] md:text-neutral-dark-2">
                                    July 19th, 2024
                                </p>
                            </div>

                            <div className="mb-2 flex flex-col">
                                <p className="text-[16px] text-neutral-dark-1 md:text-neutral-dark-2">
                                <b>Work mode</b>
                                </p>
                                <p className="text-[16px] md:text-neutral-dark-2">On-site</p>
                            </div>

                            <div className="mb-2 flex flex-col">
                                <p className="text-[16px] text-neutral-dark-1 md:text-neutral-dark-2">
                                    <b>Job-type</b>
                                </p>
                                <p className="text-[16px] md:text-neutral-dark-2">Internship</p>
                            </div>

                            <div className="mb-2 flex flex-col">
                                <p className="text-[16px] text-neutral-dark-1 md:text-neutral-dark-2">
                                <b>Experience level</b>
                                </p>
                                <p className="text-[16px] md:text-neutral-dark-2">2-3years</p>
                            </div>

                            <div className="mb-2 flex flex-col">
                                <p className="text-[16px] text-neutral-dark-1 md:text-neutral-dark-2">
                                <b>Salary</b>
                                </p>
                                <p className="text-[16px] md:text-neutral-dark-2">$500k-$900k</p>
                            </div>
                        </div>

                        <div className="flex max-w-[282px] flex-col items-start justify-start rounded-[6px] border border-stroke-colors-stroke px-6 py-6 sm:max-w-full">
                            <h5 className="mb-3 text-[18px] font-semibold text-neutral-dark-1 md:text-neutral-dark-2">
                                What we offer
                            </h5>
                        <ul className="styled-list list-disc pl-6">
                                <li className="text-[16px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                    Competitive salary and benefits
                                </li>
                                <li className="text-[16px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                    Flexible working hours and remote work options
                                </li>
                                <li className="text-[16px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                    Opportunities for professional growth and development
                                </li>
                                <li className="text-[16px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed mb-3">
                                    A collaborative and inclusive work environment
                                </li>
                            </ul>
                        </div>
                        <div className="flex max-w-[282px] flex-col items-start justify-start rounded-[6px] border border-stroke-colors-stroke px-6 py-6 sm:max-w-full">
                            <h5 className="mb-3 text-[18px] font-semibold text-neutral-dark-1 md:text-neutral-dark-2">
                                How to Apply
                            </h5>

                            <p className="text-[16px] font-normal text-neutral-dark-1 md:text-neutral-dark-2 leading-relaxed">
                                Send your CV and cover letter to this email{" "}
                                <span className="font-medium text-neutral-dark-1 md:text-neutral-dark-2">
                                    hng123@gmail.com
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-8 flex flex-row items-center justify-center my-10 mb-40">
                    <CustomButton
                        variant="primary"
                        size="lg"
                        icon={isSmallScreen ? undefined : <Plus />}
                        isLeftIconVisible={isSmallScreen}
                        isDisabled={false}
                        className={`w-[250px] h-[50px]`}
                    >
                        Apply Now
                    </CustomButton>
                </div>
            </main>
    );
};

export default JobDetails;