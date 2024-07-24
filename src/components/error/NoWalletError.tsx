/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useWallet } from "@/context/walletProviders";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils/utils";

const NoWalletError = () => {
  const { showWalletError, setShowWalletError, walletErrorMsg } = useWallet();
  const popupDelay = 5000; // 5 seconds

  useEffect(() => {
    let timer: NodeJS.Timeout | null;
    clearTimeout(timer!);
    if (showWalletError) {
      document.body.style.setProperty("--popup_duration", popupDelay + "ms");
      timer = setTimeout(() => {
        setShowWalletError(false);
      }, popupDelay + 1500);
    } else {
      timer = null;
    }
    return () => clearTimeout(timer!);
  }, [showWalletError]);
  return (
    <AnimatePresence>
      {showWalletError && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="absolute -bottom-14 left-2 z-10 rounded-md bg-red-500/10 px-4 py-2 text-rose-700 md:-bottom-20 md:px-8 md:py-4"
        >
          <span dangerouslySetInnerHTML={{ __html: walletErrorMsg }} />
          <span
            className={cn(
              "absolute bottom-0 left-0 h-1 w-full bg-rose-700",
              showWalletError ? "no-width" : "w-full",
            )}
          />
          <button
            onClick={() => setShowWalletError(false)}
            className="absolute right-1 top-1 md:right-2 md:top-2"
          >
            <X className="size-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NoWalletError;
