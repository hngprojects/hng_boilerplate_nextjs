export type CategoriesType = {
  name?: string;
  value: string;
  label: string;
};

export const CATEGORIES: CategoriesType[] = [
  { label: "Clothes", value: "clothes" },
  { label: "Shoes", value: "shoes" },
  { label: "Hats", value: "hats" },
  { label: "Electronics", value: "electronics" },
  { label: "Furniture", value: "furniture" },
  { label: "Books", value: "books" },
  { label: "Toys", value: "toys" },
  { label: "Accessories", value: "accessories" },
  { label: "Beauty Products", value: "beauty_products" },
  { label: "Kitchenware", value: "kitchenware" },
  { label: "Sports Equipment", value: "sports_equipment" },
  { label: "Jewelry", value: "jewelry" },
  { label: "Automobiles", value: "automobiles" },
  { label: "Garden Tools", value: "garden_tools" },
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
