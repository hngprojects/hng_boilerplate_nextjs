import { Suspense } from "react";

import Payment from "./payment";

function PaymentPage() {
  return (
    <Suspense>
      <Payment />
    </Suspense>
  );
}

export default PaymentPage;
