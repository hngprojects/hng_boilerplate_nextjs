"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = () => {
  return (
    <ProgressBar
      style="style"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

export default Providers;
