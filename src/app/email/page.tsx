import "./email.css";

import Footer from "~/components/layouts/Footer/Footer";
import Header from "~/components/layouts/Header/Header";
import Email from "~/email/templates/subscription-renewal/SubscriptionEmail";

export default function EmailSubscription() {
  return (
    <>
      <Header />
      <main className="flex justify-center">
        <Email
          title="Subscription Renewal Reminder"
          name="John Doe"
          imageUrl="/pana.svg"
          renewalDate="17th September, 2024"
          renewalPrice="$20.89"
          renewalPeriod="Bi-monthly"
          reviewUrl="/"
          renewUrl="/"
          companyName="Boilerplate"
          faqUrl="/"
          helpUrl="/"
          unsubscribeUrl="/"
        />
      </main>
      <Footer />
    </>
  );
}
