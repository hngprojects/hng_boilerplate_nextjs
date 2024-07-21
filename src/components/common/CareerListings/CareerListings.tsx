import CareerCardParent from "~/components/common/CareerCard";
import EmptyList from "~/components/common/Empty List/EmptyList";
import CareerListingsPagination from "../CareerListingsPagination/CareerListingsPagination";

type CareerListingsProperties = {
  page: number;
};

type CareerFetchResponse = {
  ok: boolean;
  data: {
    page: number;
    limit: number;
    total: number;
    careers: Array<unknown>;
  };
};

async function getData({ page, limit }: { page: number; limit: number }) {
  const response = await new Promise<CareerFetchResponse>((resolve) => {
    setTimeout(() => {
      resolve({
        ok: true,
        data: {
          page,
          limit,
          total: 30,
          careers: Array.from({ length: limit }),
        },
      });
    }, 1000);
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.data;
}

export default async function CareerListings({
  page,
}: CareerListingsProperties) {
  const limit = 6;

  // simulate data fetching
  const careerData = await getData({ page, limit });
  return (
    <>
      {!careerData ||
      !careerData.careers ||
      !Array.isArray(careerData.careers) ||
      careerData.careers.length === 0 ? (
        <EmptyList
          image="/images/no-jobs.svg"
          mainText="No available Jobs at the moment"
          subText="Come back later!"
        />
      ) : (
        <div className="flex flex-col items-center gap-6 pb-[134px]">
          <div className="flex flex-col items-center gap-8">
            <div
              data-testid="job-listings"
              className="grid grid-cols-1 gap-y-5 sm:grid-cols-2"
            >
              {careerData.careers.map((_, index) => (
                <CareerCardParent key={index} />
              ))}
            </div>
            <div className="flex w-full items-center justify-end px-5">
              <p className="text-lg">{`Showing ${limit} of ${careerData.total} jobs`}</p>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <CareerListingsPagination page={page} total={careerData.total} />
          </div>
        </div>
      )}
    </>
  );
}
