/* eslint-disable prettier/prettier */
/* eslint-disable no-console */
// import Link from "next/link";
import CurrentPlan from "./_components/currentPlan";
import FreePlan from "./_components/freePlan";
// import { Button } from "~/components/ui/button";

const PaymentInformation = () => {
  console.log("here");
  return (
      <div>
        <CurrentPlan />
        <FreePlan />
      </div>
  );
};

export default PaymentInformation;
