import { cache } from "react";

import { verifySession } from "./session";

export const getCurrentUser = cache(async () => {
  const data = await verifySession();

  const user = {
    email: data?.email,
  };

  return user;
});
