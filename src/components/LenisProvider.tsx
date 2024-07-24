"use client";

import { ReactLenis } from "lenis/react";

function LenisProvider({ children }: { children: React.ReactNode }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default LenisProvider;
