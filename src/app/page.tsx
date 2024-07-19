import Navbar from "~/components/layouts/Navbar";
import RenewalWithIcon from "~/components/subscriptionRenewalFailed/renewalWithIcon";
import RenewalWithoutIcon from "~/components/subscriptionRenewalFailed/renewalWithoutIcon";

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <RenewalWithIcon />
      <RenewalWithoutIcon />
    </main>
  );
}
