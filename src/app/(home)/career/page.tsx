import CareerCardParent from "~/components/common/CareerCard";

export default function Career() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center px-5 py-12">
      <div className="mb-10 max-w-xl text-center md:mx-auto md:mb-12 md:max-w-5xl">
        <div>
          <p className="mb-4 inline-block rounded-md bg-gray-200 px-2 py-1 text-sm text-black md:text-lg">
            Career
          </p>
        </div>
        <h2 className="mb-6 max-w-lg font-sans text-4xl font-bold leading-none tracking-tight text-gray-900 sm:text-[3.2rem] md:max-w-5xl">
          Available <span className="text-orange-500">Jobs</span> in Our company
        </h2>
        <p className="text-base text-gray-700 lg:max-w-3xl">
          Explore job opportunities across various fields that fit for your
          skills and career aspirations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <CareerCardParent key={index} />
        ))}
      </div>
    </div>
  );
}
