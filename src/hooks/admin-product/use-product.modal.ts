import { create } from "zustand";

type ModalProperties = {
  isOpen: boolean;
  updateOpen: (open: boolean) => void;
  product_id: string;
  updateProductId: (product_id: string) => void;
  isDelete: boolean;
  setIsDelete: (isDelete: boolean) => void;
};

export const useProductModal = create<ModalProperties>()((set) => ({
  isOpen: false,
  product_id: "",
  isDelete: false,
  setIsDelete: (isDelete) => set({ isDelete }),
  updateOpen: (open) => set({ isOpen: open }),
  updateProductId: (product_id) => set({ product_id }),
}));
