export type CategoriesType = {
  name: string;
  value: string;
  label: string;
};

export const CATEGORIES: CategoriesType[] = [
  {
    value: "breakfast",
    label: "Breakfast",
    name: "",
  },
  {
    value: "electronics",
    label: "Electronics",
    name: "",
  },
  {
    value: "launch",
    label: "Launch",
    name: "",
  },
  {
    value: "monitor",
    label: "Monitor",
    name: "",
  },
  {
    value: "audio",
    label: "Audio",
    name: "",
  },
];
export const STOCKS_SELECT: CategoriesType[] = [
  {
    value: "in_stock",
    label: "In Stock",
    name: "",
  },
  {
    value: "low_on_stock",
    label: "Low on Stock",
    name: "",
  },
  {
    value: "out_of_stock",
    label: "Out of Stock",
    name: "",
  },
];
