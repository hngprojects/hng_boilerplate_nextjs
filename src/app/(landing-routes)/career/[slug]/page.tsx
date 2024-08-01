"use client";

import axios from "axios";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

import { Breadcrumb } from "~/components/common/breadcrumb";
import CustomButton from "~/components/common/common-button/common-button";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { useToast } from "~/components/ui/use-toast";
import { getApiUrl } from "~/utils/getApiUrl";

export interface Job {
  id: string;
  title: string;
  salary: string;
  job_type: string;
  work_mode: string;
  deadline: string;
  location: string;
  how_to_apply: string;
  experience: string;
  job_benefits: string;
  company_name: string;
  description: string;
  key_responsibilities: string;
  qualifications: string;
  created_at: string;
  updated_at: string;
}

const JobDetails = ({ params }: { params: { slug: string } }) => {
  const [loading, setLoading] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [job, setJob] = useState<Job | null>();
  const { toast } = useToast();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchJob = async () => {
      setLoading(true);
      try {
        const url = await getApiUrl();
        const response = await axios.get(`${url}/api/v1/jobs/${params.slug}`);
        setJob(response.data.data);
        setLoading(false);
      } catch {
        toast({
          title: "Error",
          description: "An error occurred while fetching job details",
          variant: "destructive",
        });
        setLoading(false);
      }
    };

    fetchJob();
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

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 md:px-10 lg:px-10 xl:px-10">
      <Breadcrumb pages={pages} maxPages={isSmallScreen ? 2 : 3} />

      {loading ? (
        <span className="flex h-10 items-center gap-x-2 text-center">
          <span className="animate-pulse">Getting Job Description...</span>{" "}
          <LoadingSpinner className="size-4 animate-spin sm:size-5" />
        </span>
      ) : (
        <>
          <div className="mb-4 mt-8 mt-[60px] grid w-full auto-rows-min grid-cols-1 pb-2 md:grid-cols-3">
            <div className="col-span-1 mb-6 sm:col-span-2 md:mr-16 xl:mr-40">
              <div className="flex flex-col justify-start">
                <h1 className="mb-3 text-3xl font-bold text-neutral-dark-2 md:text-[38px]">
                  {job?.title}
                </h1>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-2">
                    <h3 className="mt-4 text-[16px] font-bold text-neutral-dark-1 md:text-[25px] md:text-neutral-dark-2">
                      Job Description
                    </h3>
                    <p className="text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                      {job?.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] font-bold text-neutral-dark-1 md:text-[25px] md:text-neutral-dark-2">
                      Key Responsibilities
                    </h3>
                    {job?.key_responsibilities ? (
                      <ul className="styled-list list-disc pl-8">
                        {job.key_responsibilities
                          .split(",")
                          .map((responsibility: string) => (
                            <li
                              key={responsibility.trim()}
                              className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2"
                            >
                              {responsibility.trim()}{" "}
                            </li>
                          ))}
                      </ul>
                    ) : (
                      <p className="text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                        No key responsibilities listed.
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[16px] font-bold text-neutral-dark-1 md:text-[25px] md:text-neutral-dark-2">
                      Qualifications
                    </h3>
                    <ul className="styled-list list-disc pl-8">
                      <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                        {job?.qualifications}
                      </li>
                      <li className="mb-3 text-[16px] font-normal leading-relaxed text-neutral-dark-1 md:text-neutral-dark-2">
                        {job?.experience}
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
                    {job &&
                      new Date(job.deadline).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                  </p>
                </div>

                <div className="mb-2 flex flex-col">
                  <p className="text-[14px] text-neutral-dark-1 md:text-neutral-dark-2">
                    <b>Work mode</b>
                  </p>
                  <p className="text-[14px] md:text-neutral-dark-2">
                    {job?.work_mode}
                  </p>
                </div>

                <div className="mb-2 flex flex-col">
                  <p className="text-[14px] text-neutral-dark-1 md:text-neutral-dark-2">
                    <b>Company</b>
                  </p>
                  <p className="text-[14px] md:text-neutral-dark-2">
                    {job?.company_name}
                  </p>
                </div>

                <div className="mb-2 flex flex-col">
                  <p className="text-[14px] text-neutral-dark-1 md:text-neutral-dark-2">
                    <b>Job-type</b>
                  </p>
                  <p className="text-[14px] md:text-neutral-dark-2">
                    {job?.job_type}
                  </p>
                </div>

                <div className="mb-2 flex flex-col">
                  <p className="text-[14px] text-neutral-dark-1 md:text-neutral-dark-2">
                    <b>Experience level</b>
                  </p>
                  <p className="text-[14px] md:text-neutral-dark-2">
                    {job?.experience}
                  </p>
                </div>

                <div className="mb-2 flex flex-col">
                  <p className="text-[14px] text-neutral-dark-1 md:text-neutral-dark-2">
                    <b>Salary</b>
                  </p>
                  <p className="text-[14px] md:text-neutral-dark-2">
                    {job?.salary}
                  </p>
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
                  {job?.how_to_apply}
                </p>
              </div>
            </div>
          </div>

          <div className="my-10 mb-40 mb-8 flex flex-row items-center justify-center">
            <CustomButton
              variant="primary"
              size="lg"
              icon={isSmallScreen ? undefined : <Plus />}
              isLeftIconVisible={isSmallScreen}
              isDisabled={false}
              className={`h-[50px] w-[250px]`}
            >
              Apply Now
            </CustomButton>
          </div>
        </>
      )}
    </main>
  );
};

export default JobDetails;
