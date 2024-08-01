import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

type ProductsStateProperties = {
  view: "list" | "grid";
  updateView: (view: "list" | "grid") => void;
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

export const useProductsView = create<ProductsStateProperties>()(
  persist(
    (set) => ({
      view: "list",
      updateView: (view) => set({ view: view }),
    }),
    { name: "user_products_view", storage },
  ),
);
