import { Suspense } from "react";

import Upgrade from "./upgrade";

function UpgradePage() {
  return (
    <Suspense>
      <Upgrade />
    </Suspense>
  );
}

export default UpgradePage;
