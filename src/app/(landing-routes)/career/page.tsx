"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CareerCardParent from "~/components/common/CareerCard";
import { Job } from "~/components/common/CareerCard/Jobs";
import Pagination from "~/components/layouts/pagination/Pagination";
import { getApiUrl } from "~/utils/getApiUrl";
import Nojobs from "./Nojobs";
import Heading from "~/components/layouts/heading";

export default function Career() {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const router = useRouter();

  useEffect(() => {
    getApiUrl().then((url) => setBaseUrl(url));
  }, []);

  useEffect(() => {
    const fetchJobs = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${baseUrl}/api/v1/jobs`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const jobsData = Array.isArray(data)
          ? data
          : data.items || data.jobs || data.data || [];
        setAllJobs(jobsData);
      } catch {
        setAllJobs([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchJobs();
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setDisplayedJobs(allJobs.slice(startIndex, endIndex));
  }, [currentPage, allJobs]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const shouldShowNoJobs = () => {
    return !isLoading && allJobs.length === 0;
  };

  const handleViewDetails = (job: Job) => {
    const parameters = new URLSearchParams({
      id: job.id.toString(),
      title: job.title,
      company: job.company_name,
      location: job.location,
      description: job.description,
      amount: job.salary_range,
    });
    router.push(`/career/details?${parameters.toString()}`);
  };

  return (
    <div className="mx-auto max-w-7xl bg-white px-5 py-10 sm:bg-transparent md:px-10 lg:px-10 xl:px-10">
      <Heading
        tag="Career"
        title="Available {{Jobs}} in Our company"
        content="Explore job opportunities across various fields that fit for your skills and career aspirations."
      />

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          {!shouldShowNoJobs() && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {isLoading
                ? Array.from({ length: pageSize }).map((_, index) => (
                    <CareerCardParent
                      key={index}
                      isLoading={true}
                      job={{} as Job}
                      onViewDetails={() => {}}
                    />
                  ))
                : displayedJobs.map((job) => (
                    <CareerCardParent
                      key={job.id}
                      isLoading={false}
                      job={job}
                      location={job.location}
                      description={job.description}
                      amount={job.salary_range}
                      company={job.company_name}
                      onViewDetails={() => handleViewDetails(job)}
                    />
                  ))}
            </div>
          )}
        </div>
        {shouldShowNoJobs() && (
          <div className="isolate mt-10 h-[auto] sm:mb-0">
            <div className="isolate">
              <div className="reset-container">
                <Nojobs />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-1xl my-5 text-right">
        {displayedJobs.length > 0
          ? `Showing ${displayedJobs.length} of ${allJobs.length}`
          : ""}
      </div>

      <div className="my-20">
        {allJobs.length > pageSize && (
          <Pagination
            total={allJobs.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
}
