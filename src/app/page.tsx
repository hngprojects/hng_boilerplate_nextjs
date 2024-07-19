import "./globals.css";

import Footer from "~/components/layouts/Footer/Footer";
import Header from "~/components/layouts/Header/Header";
import Email from "~/email/templates/subscription-renewal/SubscriptionEmail";

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
