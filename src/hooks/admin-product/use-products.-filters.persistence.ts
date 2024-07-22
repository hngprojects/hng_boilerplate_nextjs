import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

interface FilterType {
  label: string;
  value: string;
}

const initialFilters = [
  { label: "All", value: "all" },
  { label: "In Stock", value: "in_stock" },
  {
    label: "Low on Stock",
    value: "low_on_stock",
  },
  {
    label: "Out of Stock",
    value: "out_of_stock",
  },
];

type ProductsStateProperties = {
  filters: FilterType[];
  active_filter: string;
  updateFilter: (label: string) => void;
};

const storage: PersistStorage<ProductsStateProperties> = {
  getItem: (name) => {
    const string_ = localStorage.getItem(name);
    if (!string_) return;
    return JSON.parse(string_);
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => localStorage.removeItem(name),
};

export const useProductsFilters = create<ProductsStateProperties>()(
  persist(
    (set) => ({
      filters: initialFilters,
      active_filter: "all",
      updateFilter: (label) => set({ active_filter: label }),
    }),
    { name: "admin_products_filters", storage },
  ),
);
