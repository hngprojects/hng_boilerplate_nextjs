"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import CareerCardParent from "~/components/common/CareerCard";
import { Job } from "~/components/common/CareerCard/Jobs";
import Heading from "~/components/layouts/heading";
import Pagination from "~/components/layouts/pagination/Pagination";
import JobSkeleton from "~/components/skeleton/jobskeleton";
import { getApiUrl } from "~/utils/getApiUrl";
import Nojobs from "./Nojobs";

export default function Career() {
  const [allJobs, setAllJobs] = useState<Job[]>([]);
  const [displayedJobs, setDisplayedJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const router = useRouter();

  useEffect(() => {
    const fetchCarrers = async () => {
      try {
        const apiUrl = await getApiUrl();
        const response = await axios.get(`${apiUrl}/api/v1/jobs`);
        setAllJobs(response.data.data);
      } catch {
        console.log("Failed to fetch jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchCarrers();
  }, []);

  useEffect(() => {
    // Calculate the jobs to display based on the current page
    const startIndex = (currentPage - 1) * pageSize;
    const newDisplayedJobs = allJobs.slice(startIndex, startIndex + pageSize);
    setDisplayedJobs(newDisplayedJobs);
  }, [allJobs, currentPage]);

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
        title="Available {{Jobs}} in Our Company"
        content="Explore job opportunities across various fields that fit for your skills and career aspirations."
      />

      <div className="flex items-center justify-center">
        <div className="flex w-full items-center justify-center">
          {loading ? (
            <JobSkeleton />
          ) : (
            <div className="w-full grid grid-cols-1 gap-8 md:grid-cols-2">
              {displayedJobs.map((job) => (
                <CareerCardParent
                  key={job.id}
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

        {!loading && allJobs?.length === 0 && (
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
        {displayedJobs.length > 0 &&
          `Showing ${(currentPage - 1) * pageSize + displayedJobs.length} of ${allJobs.length}`}
      </div>

      <div className="my-20">
        {allJobs?.length > pageSize && (
          <Pagination
            total={allJobs.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onChange={(page) => setCurrentPage(page)}
          />
        )}
      </div>
    </div>
  );
}
