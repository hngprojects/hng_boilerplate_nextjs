export type CategoriesType = {
  value: string;
  label: string;
};

export const CATEGORIES: CategoriesType[] = [
  { value: "breakfast", label: "Breakfast" },
  { value: "electronics", label: "Electronics" },
  { value: "launch", label: "Launch" },
  { value: "monitor", label: "Monitor" },
  { value: "audio", label: "Audio" },
];
export const STOCKS_SELECT: CategoriesType[] = [
  { value: "in_stock", label: "In Stock" },
  { value: "low_on_stock", label: "Low on Stock" },
  { value: "out_of_stock", label: "Out of Stock" },
];
