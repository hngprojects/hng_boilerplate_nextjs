"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import CareerCardParent from "~/components/common/CareerCard";
import Pagination from "~/components/layouts/pagination/Pagination";

const PAGE_SIZE = 6; // Number of items per page

export default function Career() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobData, setJobData] = useState([
    {
      id: "",
      title: "",
      location: "",
      description: "",
      salary: "",
    },
  ]);

  const [paginationData, setPaginationData] = useState({
    current_page: 1,
    page_size: PAGE_SIZE,
    total_items: 0,
    total_pages: 0,
  });

  // Function to handle page change
  const handlePageChange = async (page: number) => {
    setPaginationData((previousData) => ({
      ...previousData,
      current_page: page,
    }));

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://deployment.api-php.boilerplate.hng.tech/api/v1/jobs?page=${page}&pageSize=${PAGE_SIZE}`,
      );
      const data = await response.json();
      setJobData(data?.data || []);
      setPaginationData({
        current_page: data?.pagination.current_page || 1,
        page_size: data?.pagination.page_size || PAGE_SIZE,
        total_items: data?.pagination.total_items || 0,
        total_pages: data?.pagination.total_pages || 0,
      });
      setIsLoading(false);
    } catch (error) {
      // Handle error appropriately
      return `error: ${error}`;
    }
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  const fetchJobData = async () => {
    try {
      const response = await fetch(
        `https://deployment.api-php.boilerplate.hng.tech/api/v1/jobs?page=${paginationData.current_page}&pageSize=${PAGE_SIZE}`,
      );
      const data = await response.json();
      setJobData(data?.data || []);
      setPaginationData({
        current_page: data?.pagination.current_page || 1,
        page_size: data?.pagination.page_size || PAGE_SIZE,
        total_items: data?.pagination.total_items || 0,
        total_pages: data?.pagination.total_pages || 0,
      });
      setIsLoading(false);
    } catch (error) {
      return `error: ${error}`;
      // Handle error appropriately
    }
  };

  const currentPageData = jobData.slice(
    (paginationData.current_page - 1) * PAGE_SIZE,
    paginationData.current_page * PAGE_SIZE,
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 lg:px-10 xl:px-10">
      {jobData ? (
        <>
          <div className="mb-10 text-center md:mx-auto md:mb-12">
            <p className="mb-6 inline-block rounded-md bg-gray-200 px-2 py-1 text-sm text-black md:text-lg">
              Career
            </p>

            <h2 className="font-inter mb-6 text-center text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-[3.2rem]">
              Available <span className="text-primary">Jobs</span> in Our
              Company
            </h2>
            <p className="text-1xl text-base text-gray-700 md:text-xl">
              Explore job opportunities across various fields that fit your
              skills and career aspirations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {currentPageData.map((data) => (
              // eslint-disable-next-line react/jsx-key
              <CareerCardParent
                id={data.id}
                isLoading={isLoading}
                jobTitle={data.title}
                location={data.location}
                description={data.description}
                amount={data.salary}
              />
            ))}
          </div>

          <div className="text-1xl my-5 text-right">
            Showing {(paginationData.current_page - 1) * PAGE_SIZE + 1} -{" "}
            {Math.min(
              paginationData.current_page * PAGE_SIZE,
              paginationData.total_items,
            )}{" "}
            of {paginationData.total_items}
          </div>

          <div className="my-20">
            <Pagination
              total={paginationData.total_items}
              pageSize={paginationData.page_size}
              currentPage={paginationData.current_page}
              onChange={handlePageChange}
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/Group 2.svg"
            alt="No Jobs Available"
            className="mb-5 w-full max-w-md"
          />
          <p className="text-center text-lg text-gray-700">
            No available Jobs at the moment
          </p>
          <p>Come back later!</p>
        </div>
      )}
    </div>
  );
}
