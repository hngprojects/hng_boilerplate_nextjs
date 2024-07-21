/* eslint-disable unicorn/numeric-separators-style */

import RevenueCard from "./RevenueCard";

function RevenueDashboard() {
  return (
    <div className="container mx-auto gap-16 rounded-lg bg-white px-4 py-8 shadow-sm">
      <div className="-mx-2 flex flex-wrap items-center">
        <div className="w-full p-2 sm:w-1/2 md:w-1/3">
          <RevenueCard
            title="Total Revenue"
            revenue={45000}
            performanceIndex="+20% from last month"
            currency="USD"
          />
        </div>
        <div className="w-full p-2 sm:w-1/2 md:w-1/3">
          <RevenueCard
            title="Total Revenue"
            revenue={45000}
            performanceIndex="+20% from last month"
            currency="USD"
          />
        </div>
        <div className="w-full p-2 sm:w-1/2 md:w-1/3">
          <RevenueCard
            title="Total Revenue"
            revenue={45000}
            performanceIndex="+20% from last month"
            currency="USD"
          />
        </div>
      </div>
    </div>
  );
}

export default RevenueDashboard;
