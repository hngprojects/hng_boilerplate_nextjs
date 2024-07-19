import "./globals.css";

import Footer from "~/components/layouts/Footer/Footer";
import Header from "~/components/layouts/Header/Header";
import Email from "~/emails/SubscriptionRenewalEmail";

export default function EmailSubscription() {
  return (
    <>
      <Header />
      <main className="main">
        <Email />
      </main>
      <Footer />
    </>
  );
}
