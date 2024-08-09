// stores/productStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

import { ProductTableProperties } from "~/types/admin-product.types";
import { addProductService } from "./services";

type ProductsStateProperties = {
  products: ProductTableProperties[] | undefined;
  addProduct: (
    product: ProductTableProperties,
    accessToken: string,
  ) => Promise<void>;
};

export const useProducts = create<ProductsStateProperties>()(
  persist(
    (set) => ({
      products: undefined,

      addProduct: async (product, accessToken) => {
        const newProduct = await addProductService(product, accessToken);
        set((state) => ({
          products: [...(state?.products ?? []), newProduct],
        }));
      },
    }),
    { name: "admin_products" },
  ),
);
