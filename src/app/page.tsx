import Navbar from "~/components/layouts/Navbar";
import RenewalWithIcon from "~/components/subscriptionRenewalFailed";

export default function Home() {
  return (
    <main>
      <Navbar />
      <RenewalWithIcon
        title="Subscription Renewal Failed"
        name="John Doe"
        image="/images/payment-error.svg"
        renewalPeriod="Bi-monthly"
        updatePaymentLink="https://example.com/update-payment"
        faqsLink="https://example.com/faqs"
        supportEmail="help@boilerplate.com"
        unsubscribeLink="https://example.com/unsubscribe"
      />
    </main>
  );
}
