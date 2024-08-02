import WaitlistDialog from "~/components/waitList/WaitlistDialog";
import WaitlistForm from "~/components/waitList/WaitListForm";
import WaitlistJoin from "~/components/waitList/WaitlistJoin";
import WaitlistPayment from "~/components/waitList/WaitlistPayment";

const WaitlistPage = () => {
  return (
    <div>
      <WaitlistJoin />
      <WaitlistDialog />
      <WaitlistPayment />
      <WaitlistForm />
    </div>
  );
};

export default WaitlistPage;
