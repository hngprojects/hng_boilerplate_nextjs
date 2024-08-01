"use client";

import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import CareerCard from "~/components/common/CareerCard/CareerCard";
import Pagination from "~/components/layouts/pagination/Pagination";
import LoadingSpinner from "~/components/miscellaneous/loading-spinner";
import { getApiUrl } from "~/utils/getApiUrl";

interface Job {
  id: string;
  title: string;
  location: string;
  description: string;
  salary: string;
}

export default function Career() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const location = useSearchParams();

  const fetchJobs = async (page: number) => {
    try {
      setIsLoading(true);
      const url = await getApiUrl();
      const response = await axios.get(
        `${url}/api/v1/jobs?page=${page}&limit=6`,
      );
      setTotalPages(response.data.pagination[0].total_pages);
      setJobs(response.data.data);
      setIsLoading(false);
    } catch {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(currentPage);
  }, [currentPage]);

  useEffect(() => {
    const pageParameter = location.get("page");
    if (pageParameter) {
      setCurrentPage(Number.parseInt(pageParameter));
    }
  }, [location]);

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
          Explore job opportunities across various fields that fit your skills
          and career aspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {jobs.map((job) => (
          <CareerCard
            key={job.id}
            id={job.id}
            isLoading={isLoading}
            jobTitle={job.title}
            location={job.location}
            description={job.description}
            amount={job.salary}
          />
        ))}
      </div>
      {jobs.length === 0 && !isLoading && (
        <div className="mx-auto flex flex-col items-center justify-center gap-5">
          <Image
            src="/images/briefCase.svg"
            alt="no available job"
            width={300}
            height={300}
          />
          <div className="text-center">
            <h3 className="text-2xl font-semibold">
              No available Jobs at the moment
            </h3>
            <p>Come back later!</p>
          </div>
        </div>
      )}

      {isLoading && (
        <span className="flex h-10 w-full items-center justify-center gap-x-2 text-center">
          <span className="animate-pulse">Getting Jobs ...</span>{" "}
          <LoadingSpinner className="size-4 animate-spin sm:size-5" />
        </span>
      )}

      {jobs.length > 0 && (
        <div className="text-1xl my-5 text-right">
          Showing {currentPage} of {totalPages}
        </div>
      )}

      {jobs.length > 0 && (
        <div className="my-20">
          <Pagination
            total={totalPages}
            pageSize={6}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
}
