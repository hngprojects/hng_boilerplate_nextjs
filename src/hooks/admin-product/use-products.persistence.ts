import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

import { ProductTableProperties } from "~/types/admin-product.types";

type ProductsStateProperties = {
  products: ProductTableProperties[] | undefined;
  addProduct: (product: ProductTableProperties) => void;
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

      addProduct: (product) =>
        set((state) => ({ products: [...state!.products!, product] })),
      updateProduct: (product) =>
        set((state) => {
          if (!state.products) return state;
          const index = state.products.findIndex(
            (item) => item.id === product.id,
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
          products: state?.products?.filter((p) => p.id !== id),
        })),
    }),
    { name: "admin_products", storage },
  ),
);
