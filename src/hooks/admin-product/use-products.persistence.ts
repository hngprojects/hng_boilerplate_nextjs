import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

import { ProductTableProperties } from "~/types/admin-product.types";

type ProductsStateProperties = {
  products: ProductTableProperties[] | undefined;

  addProducts: (products: ProductTableProperties[]) => void;
  updateProduct: (product: ProductTableProperties) => void;
  deleteProduct: (id: string) => void;
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

export const useProducts = create<ProductsStateProperties>()(
  persist(
    (set) => ({
      products: undefined,

      addProducts: (products) => set({ products }),
      updateProduct: (product) =>
        set((state) => {
          if (!state.products) return state;
          const index = state.products.findIndex(
            (item) => item.product_id === product.product_id,
          );
          if (index === -1) return state;
          return {
            products: [
              ...state.products.slice(0, index),
              { ...state.products[index], ...product },
              ...state.products.slice(index + 1),
            ],
          };
        }),
      deleteProduct: (id) =>
        set((state) => ({
          products: state?.products?.filter((p) => p.product_id !== id),
        })),
    }),
    { name: "admin_products", storage },
  ),
);
