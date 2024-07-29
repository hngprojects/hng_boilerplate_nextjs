import { create } from "zustand";

type ModalProperties = {
  isOpen: boolean;
  updateOpen: (open: boolean) => void;
  product_id: string;
  updateProductId: (product_id: string) => void;
  isDelete: boolean;
  setIsDelete: (isDelete: boolean) => void;
  updateFilterModal: (isOpenFilterModal: boolean) => void;
  isOpenFilterModal: boolean;
  isNewModal: boolean;
  setIsNewModal: (isNewModal: boolean) => void;
  isActionModal: boolean;
  setIsActionModal: (isActionModal: boolean) => void;
};

export const useProductModal = create<ModalProperties>()((set) => ({
  isOpen: false,
  product_id: "",
  isDelete: false,
  isOpenFilterModal: false,
  isNewModal: false,
  isActionModal: false,
  setIsActionModal: (isActionModal) => set({ isActionModal }),
  setIsNewModal: (isNewModal) => set({ isNewModal }),
  updateFilterModal: (isOpenFilterModal) =>
    set({ isOpenFilterModal: isOpenFilterModal }),
  setIsDelete: (isDelete) => set({ isDelete }),
  updateOpen: (open) => set({ isOpen: open }),
  updateProductId: (product_id) => set({ product_id }),
}));
