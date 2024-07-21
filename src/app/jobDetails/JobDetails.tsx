"use client";
import { Breadcrumb } from "~/components/common/Breadcrumb"
import CustomButton from "~/components/common/Button/button";
import Layout from "~/components/layouts/index";
import {  Plus } from "lucide-react";
import { useEffect, useState } from "react";


const JobDetails = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      console.log('Window resized:', window.innerWidth);
      console.log('isSmallScreen:', window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pages = isSmallScreen
    ? [
        { name: "Career", href: "/career" },
        { name: "Job Details", href: "/job-details", isCurrent: true, style: { color: 'hsl(25, 95%, 53%)' }},
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Job Listings", href: "/job-listings" },
        { name: "Job Details", href: "/job-listings/job-detail", isCurrent: true },
      ];

  return (
    <Layout>
    <main className="flex flex-col mx-6  xl:mx-[120px] 2xl:mx-[190px] mt-8">
   <Breadcrumb
        pages={pages}
        maxPages={isSmallScreen ? 2 : 3}
      />
      <div className="mt-8 mb-4 pb-2 w-full grid grid-cols-1 md:grid-cols-3 auto-rows-min ">
        <div className="col-span-1 sm:col-span-2  md:mr-16  xl:mr-40 mb-6">
          <div className="flex flex-col justify-start">
            <h1 className="text-3xl md:text-[44px] font-bold text-neutral-dark-2  mb-3">
              Product Designer
            </h1>
            <div className="flex flex-col gap-8  ">
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[20px] md:text-[28px] text-neutral-dark-1 md:text-neutral-dark-2 mt-4">
                  Job Description
                </h3>
                <p className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                  We are looking for a talented and passionate Product Designer
                  to join our dynamic team. As a Product Designer at the
                  Company, you will play a critical role in shaping the user
                  experience and visual design of our products. You will
                  collaborate closely with cross-functional teams, including
                  product managers, engineers, and marketers, to create
                  intuitive and aesthetically pleasing designs that meet user
                  needs and business goals.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[20px] md:text-[28px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                  Key Responsibilities
                </h3>
                <ul className="styled-list pl-8 list-disc">
                  <li className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                    Conduct user research and gather insights to inform design
                    decisions
                  </li>
                  <li className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                    Create wireframes, prototypes, and high-fidelity mockups for
                    new features and product enhancements
                  </li>
                  <li className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                    Collaborate with the product team to define design
                    requirements and ensure alignment with business objectives
                  </li>
                  <li className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                    Develop and maintain design systems to ensure consistency
                    across all products
                  </li>
                  <li className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                    Conduct usability testing and iterate on designs based on
                    user feedback
                  </li>
                  <li className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                    Stay up-to-date with industry trends and best practices in
                    design and user experience
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-[20px] md:text-[28px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                  Qualifications
                </h3>
                <ul className="styled-list pl-8 list-disc">
                  <li className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                    Bachelor's degree in Design, Human-Computer Interaction, or
                    a related field
                  </li>
                  <li className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                    3+ years of experience in product design or a similar role
                  </li>
                  <li className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                    Proficiency in design tools such as Figma, Sketch, Adobe XD,
                    or similar
                  </li>
                  <li className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                    Strong portfolio showcasing your design process,
                    problem-solving skills, and final products
                  </li>
                  <li className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
                    Excellent communication and collaboration skills
                  </li>
                  <li className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2">
                    Ability to think critically and solve complex design
                    challenges
                  </li>
                  <li className="font-normal text-[18px] text-neutral-dark-1 md:text-neutral-dark-2">
                    Knowledge of HTML, CSS, and JavaScript is a plus
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-5 self-start xl:ml-[6rem] ">
          <div className="flex flex-col items-start justify-start border border-stroke-colors-stroke rounded-sm px-6 py-6 max-w-[282px] sm:max-w-full ">
            <h5 className="text-[20px] font-semibold text-neutral-dark-1  md:md:text-neutral-dark-2 mb-1 ">
              About the job
            </h5>
            <div className="flex flex-col mb-1">
              <p className="text-[16px] text-neutral-dark-1  md:text-neutral-dark-2">Deadline</p>
              <p className="text-lg md:text-neutral-dark-2">July 19th, 2024</p>
            </div>
            <div className="flex flex-col mb-1">
              <p className="text-[16px] text-neutral-dark-1 md:text-neutral-dark-2">Work mode</p>
              <p className="text-lg md:text-neutral-dark-2">On-site</p>
            </div>
            <div className="flex flex-col mb-1">
              <p className="text-[16px] text-neutral-dark-1 md:text-neutral-dark-2">Job-type</p>
              <p className="text-lg md:text-neutral-dark-2">Internship</p>
            </div>
            <div className="flex flex-col mb-1">
              <p className="text-[16px] text-neutral-dark-1 md:text-neutral-dark-2">Experience level</p>
              <p className="text-lg md:text-neutral-dark-2">2-3years</p>
            </div>
            <div className="flex flex-col mb-1">
              <p className="text-[16px] text-neutral-dark-1 md:text-neutral-dark-2">Salary</p>
              <p className="text-lg md:text-neutral-dark-2">$500k-$900k</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start border border-stroke-colors-stroke rounded-[6px] px-6 py-6 max-w-[282px] sm:max-w-full ">
            <h5 className="text-[20px] font-semibold text-neutral-dark-1  md:text-neutral-dark-2 mb-1">
              What we offer
            </h5>
            <ul className="styled-list pl-3">
              <li className="font-normal text-[18px] text-neutral-dark-1   md:text-neutral-dark-2">
                Competitive salary and benefits
              </li>
              <li className="font-normal text-[18px] text-neutral-dark-1   md:text-neutral-dark-2">
                Flexible working hours and remote work options
              </li>
              <li className="font-normal text-[18px] text-neutral-dark-1   md:text-neutral-dark-2">
                Opportunities for professional growth and development
              </li>
              <li className="font-normal text-[18px] text-neutral-dark-1   md:text-neutral-dark-2">
                A collaborative and inclusive work environment
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start border border-stroke-colors-stroke rounded-[6px] px-6 py-6 max-w-[282px] sm:max-w-full ">
            <h5 className="text-[20px] font-semibold text-neutral-dark-1  md:text-neutral-dark-2 mb-1">
              How to Apply
            </h5>
            <p className="font-normal text-[18px] text-neutral-dark-1  md:text-neutral-dark-2 ">
              Send your CV and cover letter to this email{" "}
              <span className="font-medium text-[18px] text-neutral-dark-1   md:text-neutral-dark-2">hng123@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center mb-8">
      <CustomButton
        variant="primary"
        size="lg"
        icon={!isSmallScreen ? <Plus /> : undefined}
        isLeftIconVisible={isSmallScreen}
        isDisabled={false}
        className={`w-full sm:w-auto px-28 py-2 ${isSmallScreen ? '' : 'flex items-center'}`}
      >
        Apply Now
      </CustomButton>
      </div>
    </main>
    </Layout>
  );
};

export default JobDetails;
