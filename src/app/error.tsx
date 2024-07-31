"use client";

import { CircleAlert } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {}, [error]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <CircleAlert className="mb-2 text-4xl text-red-500" />
      <h2 className="text-3xl font-semibold text-black dark:text-white">
        Something went wrong!
      </h2>
      <button
        className="underline transition-colors duration-300 dark:text-white dark:hover:text-slate-300"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
