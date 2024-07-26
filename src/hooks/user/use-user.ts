import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

type UserProperties = {
  name: string | undefined;
  email: string | undefined;
};

type ProductsStateProperties = {
  user: UserProperties;

  updateUser: (user: UserProperties) => void;
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

export const useUser = create<ProductsStateProperties>()(
  persist(
    (set) => ({
      user: {
        name: undefined,
        email: undefined,
      },
      updateUser: (user) => set({ user }),
    }),
    { name: "user_session", storage },
  ),
);
