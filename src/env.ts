/* eslint-disable unicorn/prevent-abbreviations */
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {},
  client: {},
  //   For Next.js >= 13.4.4, you only need to destructure client variables:
  experimental__runtimeEnv: {},
});
