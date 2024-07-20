import Link from "next/link";

import CareerCardParent from "~/components/common/CareerCard";
import PaginationButton from "~/components/common/PaginationButton/PaginationButton";
import { BackAngleBracket, ForwardAngleBracket } from "./svgs";

type SearchParams = {
  page?: string;
};

export default async function Jobs({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const pageQuery = parseInt(searchParams.page || "");
  const page = Number.isNaN(pageQuery) ? 1 : pageQuery;
  const limit = 6;

  const jobsData = {
    page,
    limit,
    total: 200,
    jobs: Array.from({ length: limit }),
  };

  return (
    <div className="flex w-full flex-col items-center bg-background">
      <div className="flex w-full max-w-[1440px] flex-col items-center px-6">
        <div className="flex w-full max-w-[1197px] flex-col items-center gap-14">
          <div className="flex min-h-[225px] w-full flex-col items-center justify-center gap-6 py-3 text-center">
            <div>
              <div className="rounded-xl bg-secondary p-3">
                <p className="text-xl font-normal">Career</p>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                  <span>{"Available "}</span>
                  <span className="text-primary">{"Jobs "}</span>
                  <span>{"in Our Company"}</span>
                </h1>
              </div>
            </div>
            <div>
              <p className="text-xl font-normal">
                Explore job opportunities across various fields that fit for
                your skills and career aspirations.
              </p>
            </div>
          </div>
          {jobsData.jobs ? (
            <div className="flex flex-col items-center gap-6 pb-[134px]">
              <div className="flex flex-col items-center gap-8">
                <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2">
                  {jobsData.jobs.map((_, index) => (
                    <CareerCardParent />
                  ))}
                </div>
                <div className="flex w-full items-center justify-end px-5">
                  <p className="text-lg">{`Showing ${limit} of ${jobsData.total} jobs`}</p>
                </div>
              </div>
              <div className="flex w-full items-center justify-center">
                <div>
                  <Link
                    href={`?${new URLSearchParams({ page: (page - 1).toString() })}`}
                  >
                    <button
                      disabled={page === 1}
                      className={`${page === 1 ? "text-stroke-colors-stroke" : ""} flex items-center justify-center py-2 pl-3 pr-4 text-center`}
                    >
                      <span>
                        <BackAngleBracket />
                      </span>
                      <span className="text-xl font-semibold">Previous</span>
                    </button>
                  </Link>
                </div>
                <div className="flex items-center justify-center gap-1">
                  {page > 2 && (
                    <div className="flex h-5 items-center justify-center">
                      <p>...</p>
                    </div>
                  )}
                  <PaginationButton
                    text={
                      page === 1
                        ? page
                        : page > jobsData.total / limit
                          ? page - 2
                          : page - 1
                    }
                    isCurrent={page === 1}
                  />
                  <PaginationButton
                    text={
                      page > jobsData.total / limit
                        ? page - 1
                        : page > 1
                          ? page
                          : page + 1
                    }
                    isCurrent={page > 1 && page < jobsData.total / limit}
                  />
                  <PaginationButton
                    text={
                      page >= jobsData.total / limit
                        ? page
                        : page === 1
                          ? page + 2
                          : page + 1
                    }
                    isCurrent={page >= jobsData.total / limit}
                  />
                  {(page < 4 || page < jobsData.total / limit) && (
                    <div className="flex h-5 items-center justify-center">
                      <p>...</p>
                    </div>
                  )}
                </div>
                <div>
                  <Link
                    href={`?${new URLSearchParams({ page: (page + 1).toString() })}`}
                  >
                    <button
                      disabled={page > jobsData.total / limit}
                      className={`${page > jobsData.total / limit ? "text-stroke-colors-stroke" : ""} flex items-center justify-center py-2 pl-3 pr-4 text-center`}
                    >
                      <span className="text-xl font-semibold">Next</span>
                      <span>
                        <ForwardAngleBracket />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            // someone working on the no jobs display will update this
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
