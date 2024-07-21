"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface StateContextProperties {
  showUpdatedModal: boolean;
  setShowUpdatedModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StateContext = createContext({} as StateContextProperties);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [showUpdatedModal, setShowUpdatedModal] = useState<boolean>(false);

  const anyModalOpen = showUpdatedModal;

  useEffect(() => {
    if (anyModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    // eslint-disable-next-line unicorn/prevent-abbreviations
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowUpdatedModal(false);
      }
    };

    document.addEventListener("keyup", handleKeyDown);

    return () => {
      document.removeEventListener("keyup", handleKeyDown);
    };
  }, [anyModalOpen]);

  const value = useMemo(
    () => ({
      showUpdatedModal,
      setShowUpdatedModal,
    }),
    [showUpdatedModal],
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error("useStateCtx must be used within a StateContextProvider");
  }
  return context;
};

export default StateContextProvider;
