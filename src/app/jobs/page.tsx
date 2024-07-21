import JobListings from "./JobListings";

export default async function Jobs({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  const pageQuery = Number.parseInt(searchParams?.page || "");
  const page = Number.isNaN(pageQuery) ? 1 : pageQuery;

  const JobListingsComponent = await JobListings({ page });

  return (
    <div className="flex w-full flex-col items-center bg-background">
      <div className="flex w-full max-w-[1440px] flex-col items-center px-6">
        <div className="flex w-full max-w-[1197px] flex-col items-center gap-14">
          <div></div> {/* career page hero component will go here */}
          {JobListingsComponent}
        </div>
      </div>
    </div>
  );
}
