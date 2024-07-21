import CareerCardParent from "~/components/common/CareerCard";
import CareerListPagination from "~/components/common/PaginationButton/CareerListPagination";

type JobListingsProperties = {
  page: number;
};

type JobFetchResponse = {
  ok: boolean;
  data: {
    page: number;
    limit: number;
    total: number;
    jobs: Array<unknown>;
  };
};

async function getData({ page, limit }: { page: number; limit: number }) {
  const response = await new Promise<JobFetchResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        data: {
          page,
          limit,
          total: 30,
          jobs: Array.from({ length: limit }),
        },
      });
    }, 1000);
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.data;
}

export default async function JobListings({ page }: JobListingsProperties) {
  const limit = 6;

  // simulate data fetching
  const jobsData = await getData({ page, limit });
  return jobsData.jobs ? (
    <div className="flex flex-col items-center gap-6 pb-[134px]">
      <div className="flex flex-col items-center gap-8">
        <div
          data-testid="job-listings"
          className="grid grid-cols-1 gap-y-5 md:grid-cols-2"
        >
          {jobsData.jobs.map((_, index) => (
            <CareerCardParent key={index} />
          ))}
        </div>
        <div className="flex w-full items-center justify-end px-5">
          <p className="text-lg">{`Showing ${limit} of ${jobsData.total} jobs`}</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <CareerListPagination page={page} total={jobsData.total} />
      </div>
    </div>
  ) : (
    // career page error component will go here
    <></>
  );
}
