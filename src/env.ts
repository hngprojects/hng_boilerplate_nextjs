/* eslint-disable unicorn/prevent-abbreviations */
import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_BACKEND_PROBE_URL: z.string().url(),
  },
  //   For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {
    NEXT_PUBLIC_BACKEND_PROBE_URL: process.env.NEXT_PUBLIC_BACKEND_PROBE_URL,
  },
});
