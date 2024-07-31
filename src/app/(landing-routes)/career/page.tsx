"use client";

import { useEffect, useState } from "react";

import CareerCardParent from "~/components/common/CareerCard";
import { Job } from "~/components/common/CareerCard/Jobs";
import Pagination from "~/components/layouts/pagination/Pagination";
import { useToast } from "~/components/ui/use-toast";
import { getApiUrl } from "~/utils/getApiUrl";

export default function Career() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalJobs, setTotalJobs] = useState(0);
  const { toast } = useToast();
  const [apiUrl, setApiUrl] = useState("");
  const pageSize = 6;

  useEffect(() => {
    const fetchApiUrl = async () => {
      try {
        const url = await getApiUrl();
        setApiUrl(url);
        console.log(apiUrl);
        console.log("here");
      } catch {
        toast({
          title: "Error",
          description: "Failed to fetch API URL",
          variant: "destructive",
        });
      }
    };

    fetchApiUrl();
  }, []);

  // useEffect(() => {
  //   const fetchJobs = async () => {
  //     setIsLoading(true);
  //     try {
  //       console.log(
  //         "Fetching jobs from:",
  //         `${apiUrl}/api/v1/jobs?page=${currentPage}&limit=${pageSize}`,
  //       );
  //       const response = await fetch(
  //         `${apiUrl}/api/v1/jobs?page=${currentPage}&limit=${pageSize}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         },
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       console.log("API response:", data);

  //       if (Array.isArray(data)) {
  //         setJobs(data);
  //         setTotalJobs(data.length);
  //       } else if (data && typeof data === "object") {
  //         const jobsData = data.items || data.jobs || data.data || [];
  //         setJobs(jobsData);
  //         setTotalJobs(data.totalItems || data.total || jobsData.length);
  //       } else {
  //         setJobs([]);
  //         setTotalJobs(0);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching jobs:", error);
  //       setJobs([]);
  //       setTotalJobs(0);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchJobs();
  // }, [currentPage]);

  // const handlePageChange = (page: number) => {
  //   setCurrentPage(page);
  // };

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10">
      <div className="mb-10 text-center md:mx-auto md:mb-12">
        <p className="mb-6 inline-block rounded-md bg-gray-200 px-2 py-1 text-sm text-black md:text-lg">
          Career
        </p>

        <h2 className="font-inter mb-6 text-center text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-[3.2rem]">
          Available <span className="text-orange-500">Jobs</span> in Our company
        </h2>
        <p className="text-1xl md-text-xl text-base text-gray-700">
          Explore job opportunities across various fields that fit for your
          skills and career aspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {isLoading ? (
          // Show loading skeleton
          Array.from({ length: pageSize }).map((_, index) => (
            <CareerCardParent key={index} isLoading={true} job={{} as Job} />
          ))
        ) : jobs && jobs.length > 0 ? (
          jobs.map((job) => (
            <CareerCardParent
              key={job.id}
              isLoading={false}
              job={job}
              location={job.location}
              description={job.description}
              amount={job.salary_range}
              company={job.company_name}
            />
          ))
        ) : (
          <p>No jobs found.</p>
        )}
      </div>

      <div className="text-1xl my-5 text-right">
        {jobs.length > 0
          ? `Showing ${jobs.length} of ${totalJobs}`
          : "No jobs to display"}
      </div>

      <div className="my-20">
        {totalJobs > pageSize && (
          <Pagination
            total={totalJobs}
            pageSize={pageSize}
            currentPage={currentPage}
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
