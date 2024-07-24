
import CareerCardParent from "~/components/common/CareerCard";
import Pagination from "~/components/layouts/pagination/Pagination";

// 

export default function Career() {
  return (
    <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-10 xl:px-10 py-20">
      <div className="mb-10 text-center md:mx-auto md:mb-12">

        <p className="mb-6 inline-block rounded-md bg-gray-200 px-2 py-1 text-sm text-black md:text-lg">
          Career
        </p>

        <h2 className="font-inter mb-6 text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-[3.2rem] text-center">
          Available <span className="text-orange-500">Jobs</span> in Our company
        </h2>
        <p className="text-base text-gray-700 text-1xl md-text-xl">
          Explore job opportunities across various fields that fit for your
          skills and career aspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <CareerCardParent key={index} />
        ))}
      </div>

      <div className="my-5 text-right text-1xl">
        Showing 50 of 500
      </div>

      <div className="my-20">
        <Pagination total={200} pageSize={10} currentPage={1} />
      </div>

    </div>
  );
}
