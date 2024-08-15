"use client";

import { Plus } from "lucide-react";
import moment from "moment";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Breadcrumb } from "~/components/common/breadcrumb";
import CustomButton from "~/components/common/common-button/common-button";

const JobDetails = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const searchParameters = useSearchParams();

  const title: string | null = searchParameters.get("title");
  const description: string | null = searchParameters.get("description");
  const amount: string | null = searchParameters.get("amount");
  const jobtype: string | null = searchParameters.get("job_type");
  const jobmode: string | null = searchParameters.get("job_mode");
  const deadline: string | null = searchParameters.get("deadline");

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
          href: "/career/2",
          isCurrent: true,
          style: { color: "hsl(25, 95%, 53%)" },
        },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Job Listings", href: "/career" },
        {
          name: "Job Details",
          href: "/career/2",
          isCurrent: true,
        },
      ];
  const mailtoLink = "mailto:hng123@gmail.com";

  return (
    <main className="mx-auto max-w-7xl bg-white px-5 py-10 sm:bg-transparent md:px-10 lg:px-10 xl:px-10">
      <Breadcrumb pages={pages} maxPages={isSmallScreen ? 2 : 3} />

      <div className="mb-4 mt-8 grid w-full auto-rows-min grid-cols-1 pb-2 md:grid-cols-3">
        <div className="col-span-1 mb-6 sm:col-span-2 md:mr-16 xl:mr-40">
          <div className="flex flex-col justify-start">
            <h1 className="mb-3 text-3xl font-bold text-neutral-dark-2 md:text-[38px]">
              {title}
            </h1>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h3 className="mt-4 text-[16px] font-bold text-neutral-dark-1 md:text-[25px] md:text-neutral-dark-2">
                  Job Description
                </h3>
                <p className="text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                  {description}You will collaborate closely with
                  cross-functional teams, including product managers, engineers,
                  and marketers, to create intuitive and aesthetically pleasing
                  designs that meet user needs and business goals.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-bold text-neutral-dark-1 md:text-[25px] md:text-neutral-dark-2">
                  Key Responsibilities
                </h3>
                <ul className="styled-list list-disc pl-8">
                  <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                    Conduct user research and gather insights to inform design
                    decisions
                  </li>
                  <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                    Create wireframes, prototypes, and high-fidelity mockups for
                    new features and product enhancements
                  </li>
                  <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                    Collaborate with the product team to define design
                    requirements and ensure alignment with business objectives
                  </li>
                  <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                    Develop and maintain design systems to ensure consistency
                    across all products
                  </li>
                  <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                    Conduct usability testing and iterate on designs based on
                    user feedback
                  </li>
                  <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                    Stay up-to-date with industry trends and best practices in
                    design and user experience
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[16px] font-bold text-neutral-dark-1 md:text-[25px] md:text-neutral-dark-2">
                  Qualifications
                </h3>
                <ul className="styled-list list-disc pl-8">
                  <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                    Bachelor&apos;s degree in Design, Human-Computer
                    Interaction, or a related field
                  </li>
                  <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                    3+ years of experience in product design or a similar role
                  </li>
                  <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                    Proficiency in design tools such as Figma, Sketch, Adobe XD,
                    or similar
                  </li>
                  <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                    Strong portfolio showcasing your design process,
                    problem-solving skills, and final products
                  </li>
                  <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                    Excellent communication and collaboration skills
                  </li>
                  <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                    Ability to think critically and solve complex design
                    challenges
                  </li>
                  <li className="text-[16px] font-normal text-neutral-dark-1 md:text-neutral-dark-2">
                    Knowledge of HTML, CSS, and JavaScript is a plus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-5 self-start xl:ml-[6rem]">
          <div className="flex max-w-[282px] flex-col items-start justify-start rounded-sm border border-stroke-colors-stroke px-6 py-6 sm:max-w-full">
            <h5 className="mb-3 text-[16px] font-semibold text-neutral-dark-1 md:md:text-neutral-dark-2">
              About the job
            </h5>

            <div className="mb-2 flex flex-col">
              <p className="text-[14px] text-neutral-dark-1 md:text-neutral-dark-2">
                <b> Deadline</b>
              </p>
              <p className="text-[14px] md:text-neutral-dark-2">
                {moment(deadline).format("ll")}
              </p>
            </div>

            <div className="mb-2 flex flex-col">
              <p className="text-[14px] text-neutral-dark-1 md:text-neutral-dark-2">
                <b>Work mode</b>
              </p>
              <p className="text-[14px] md:text-neutral-dark-2">{jobmode}</p>
            </div>

            <div className="mb-2 flex flex-col">
              <p className="text-[14px] text-neutral-dark-1 md:text-neutral-dark-2">
                <b>Job-type</b>
              </p>
              <p className="text-[14px] md:text-neutral-dark-2">{jobtype}</p>
            </div>

            <div className="mb-2 flex flex-col">
              <p className="text-[14px] text-neutral-dark-1 md:text-neutral-dark-2">
                <b>Experience level</b>
              </p>
              <p className="text-[14px] md:text-neutral-dark-2">2-3years</p>
            </div>

            <div className="mb-2 flex flex-col">
              <p className="text-[14px] text-neutral-dark-1 md:text-neutral-dark-2">
                <b>Salary</b>
              </p>
              <p className="text-[14px] md:text-neutral-dark-2">{amount}</p>
            </div>
          </div>

          <div className="flex max-w-[282px] flex-col items-start justify-start rounded-[6px] border border-stroke-colors-stroke px-6 py-6 sm:max-w-full">
            <h5 className="mb-3 text-[16px] font-semibold text-neutral-dark-1 md:text-neutral-dark-2">
              What we offer
            </h5>
            <ul className="styled-list list-disc pl-6">
              <li className="mb-3 text-[14px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                Competitive salary and benefits
              </li>
              <li className="mb-3 text-[14px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                Flexible working hours and remote work options
              </li>
              <li className="mb-3 text-[14px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                Opportunities for professional growth and development
              </li>
              <li className="mb-3 text-[14px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                A collaborative and inclusive work environment
              </li>
            </ul>
          </div>
          <div className="flex max-w-[282px] flex-col items-start justify-start rounded-[6px] border border-stroke-colors-stroke px-6 py-6 sm:max-w-full">
            <h5 className="mb-3 text-[16px] font-semibold text-neutral-dark-1 md:text-neutral-dark-2">
              How to Apply
            </h5>

            <p className="text-[14px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
              Send your CV and cover letter to this email{" "}
              <span className="font-medium text-neutral-dark-1 md:text-neutral-dark-2">
                hng123@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="my-10 mb-8 flex flex-row items-center justify-center">
        <Link href={mailtoLink} passHref legacyBehavior>
          <CustomButton
            variant="primary"
            size="lg"
            icon={isSmallScreen ? undefined : <Plus />}
            isLeftIconVisible={isSmallScreen}
            isDisabled={false}
            className={`h-[50px] w-[250px] hover:bg-destructive`}
          >
            Apply Now
          </CustomButton>
        </Link>
      </div>
    </main>
  );
};

export default JobDetails;
