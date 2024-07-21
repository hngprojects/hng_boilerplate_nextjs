# How to use filter component

- ## Import component **ProductListFilter** into your component

  ```
  import ProductListFilter from "~/components/common/dashboard-product-filter/ProductListFilter";
  ```

- ## Pass the following props to ProductListFilter
- **filters** (an array of filter objects that conforms to this type)

  ```
  interface FilterType {
    label: string;
    queryParameter: string;
    isActive: boolean;
  }
  ```

  - heres a sample filter array you can use (you can add more filter objects it won't break functionality if you follow the laid down type definitions)

  ```
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
  ```

- A function to handle filter state updates

  ```
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
  ```

- Create a state to hold filters and pass initialFilters as the initial value

  ```
  const [filters, setFilters] = useState<FilterType[]>(initialFilters);

  ```

- Your imported component should look like this

  ```
  <ProductListFilter
      filters={filters}
      handleFilterActiveState={handleFilterActiveState}
    />
  ```

- YOU CAN THEN USE THE ISACTIVE PROPERTY OF YOUR FILTERS IN YOUR COMPONENT TO FILTER THROUGH WHAT EVER DATA YOU ARE WORKING WITH

- **PS:** I added the queryParameter incase the component will be used to query APIS in the future
