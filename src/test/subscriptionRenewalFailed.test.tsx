import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import SubscriptionRenewalFailed from "~/email/templates/subscriptionRenewalFailed/with-image";

const properties = {
  title: "Subscription Renewal Failed",
  name: "John Doe",
  image: "/images/subscription-payment-error.svg",
  renewalPeriod: "Bi-monthly",
  updatePaymentLink: "https://example.com/update-payment",
  faqsLink: "https://example.com/faqs",
  supportEmail: "help@boilerplate.com",
  unsubscribeLink: "https://example.com/unsubscribe",
};

describe("renewalWithIcon", () => {
  it("renders the component with provided properties", () => {
    expect.assertions(5);
    render(<SubscriptionRenewalFailed {...properties} />);

    expect(screen.getByText("Subscription Renewal Failed")).toBeInTheDocument();
    expect(screen.getByText("Hi John Doe,")).toBeInTheDocument();
    expect(screen.getByText("Bi-monthly Features")).toBeInTheDocument();
    expect(
      screen.getByText("Your payment card has been blocked by your bank."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Your payment card has expired."),
    ).toBeInTheDocument();
  });

  it("renders more texts with provided properties", () => {
    expect.assertions(5);
    render(<SubscriptionRenewalFailed {...properties} />);

    expect(
      screen.getByText("You have insufficient funds in your account."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /to keep enjoying your bi-monthly features, please check your bank or update your payment details/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Regards,")).toBeInTheDocument();
    expect(screen.getByText("Boilerplate")).toBeInTheDocument();
    expect(
      screen.getByText(/if you have questions, please visit our/i),
    ).toBeInTheDocument();
  });

  it("contains correct links and email", () => {
    expect.assertions(4);
    render(<SubscriptionRenewalFailed {...properties} />);

    const faqsLink = screen.getByRole("link", { name: /faqs/i });
    expect(faqsLink).toHaveAttribute("href", "https://example.com/faqs");

    const emailLink = screen.getByRole("link", {
      name: /help@boilerplate.com/i,
    });
    expect(emailLink).toHaveAttribute("href", "mailto:help@boilerplate.com");

    const unsubscribeLink = screen.getByRole("link", { name: /click here/i });
    expect(unsubscribeLink).toHaveAttribute(
      "href",
      "https://example.com/unsubscribe",
    );

    const updatePaymentLink = screen.getByRole("link", {
      name: /update payment details/i,
    });
    expect(updatePaymentLink).toHaveAttribute(
      "href",
      "https://example.com/update-payment",
    );
  });

  it("renders the image with the correct src and alt text", () => {
    expect.assertions(1);
    render(<SubscriptionRenewalFailed {...properties} />);

    const image = screen.getByAltText("Payment Error");
    expect(image).toHaveAttribute(
      "src",
      "/images/subscription-payment-error.svg",
    );
  });
});
