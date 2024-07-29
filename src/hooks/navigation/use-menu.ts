import { create } from "zustand";

type MenuProperties = {
  isOpen: boolean;
  updateOpen: (open: boolean) => void;
};

export const useMenu = create<MenuProperties>()((set) => ({
  isOpen: false,
  updateOpen: (open) => set({ isOpen: open }),
}));
