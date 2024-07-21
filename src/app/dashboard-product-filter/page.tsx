"use client";

import { useState } from "react";

// import the productlistFilter component into your component
import ProductListFilter from "~/components/common/dashboard-product-filter/ProductListFilter";

// type definition for a single filter (please stick to this type for creating more filters)
interface FilterType {
  label: string;
  queryParameter: string;
  isActive: boolean;
}

// data for filters, feel free to add more filters (incase the design changes)
// the filter component will adjust based on this data and render the required filters
// the filter with label "In Stock" is set to being active (based on the design)
// feel free to change the isActive property to false, to start off your page unfiltered
// added a queryParameter property to enable the filter component adjust incase backend intergration is needed.
const initialFilters = [
  { label: "In Stock", queryParameter: "in-stock", isActive: true },
  {
    label: "Low on Stock",
    queryParameter: "Low-on-stock",
    isActive: false,
  },
  {
    label: "Out of Stock",
    queryParameter: "out-of-stock",
    isActive: false,
  },
];

const Page = () => {
  // state to hold the active filters. initially set to the initial filters array.
  const [filters, setFilters] = useState<FilterType[]>(initialFilters);

  // use active filters to filter through your dummy data.

  // check if a filter is active.
  const handleFilterActiveState = (label: string) => {
    // set only the clicked filter to active while deactivating any previously active filters
    const updatedFilters = initialFilters.map((filter) =>
      filter.label === label
        ? { ...filter, isActive: true }
        : { ...filter, isActive: false },
    );

    // set filters to the updated filters array
    setFilters(updatedFilters);
  };

  return (
    <div className="flex h-screen w-full items-start justify-end pr-2">
      {/* to use the filter component pass the followiing props 
      1) an array of filters that follows the FilterType interface
      2) a handleFilterActiveState function (already made one) to handle and update the filter state*/}
      <ProductListFilter
        filters={filters}
        handleFilterActiveState={handleFilterActiveState}
      />
    </div>
  );
};

export default Page;
