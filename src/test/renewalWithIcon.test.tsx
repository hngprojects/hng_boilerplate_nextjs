import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import RenewalWithIcon from "~/components/subscriptionRenewalFailed/renewalWithIcon";

const properties = {
  title: "Subscription Renewal Failed",
  name: "John Doe",
  image: "/images/payment-error.svg",
  renewalPeriod: "Bi-monthly",
  updatePaymentLink: "https://example.com/update-payment",
  faqsLink: "https://example.com/faqs",
  supportEmail: "help@boilerplate.com",
  unsubscribeLink: "https://example.com/unsubscribe",
};

describe("renewalWithIcon", () => {
  it("renders the component with provided properties", () => {
    render(<RenewalWithIcon {...properties} />);

    expect(screen.getByText("Subscription Renewal Failed")).toBeInTheDocument();
    expect(screen.getByText("Hi John Doe,")).toBeInTheDocument();
    expect(screen.getByText("Bi-monthly Features")).toBeInTheDocument();
    expect(
      screen.getByText("Your payment card has been blocked by your bank."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Your payment card has expired."),
    ).toBeInTheDocument();
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
    expect(screen.getByText(/faqs/i).closest("a")).toHaveAttribute(
      "href",
      "https://example.com/faqs",
    );
    expect(screen.getByText(/email us at/i)).toBeInTheDocument();
    expect(
      screen.getByText(/help@boilerplate.com/i).closest("a"),
    ).toHaveAttribute("href", "mailto:help@boilerplate.com");
    expect(
      screen.getByText(
        /to unsubscribe from future subscription renewal reminders,/i,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/click here/i).closest("a")).toHaveAttribute(
      "href",
      "https://example.com/unsubscribe",
    );
  });

  it("renders the image with the correct src and alt text", () => {
    render(<RenewalWithIcon {...properties} />);

    const image = screen.getByAltText("Payment Error");
    expect(image).toHaveAttribute("src", "/images/payment-error.svg");
  });

  it("contains a link to update payment details", () => {
    render(<RenewalWithIcon {...properties} />);

    const link = screen.getByText("Update Payment Details").closest("a");
    expect(link).toHaveAttribute("href", "https://example.com/update-payment");
  });

  it("contains a link to FAQs", () => {
    render(<RenewalWithIcon {...properties} />);

    const link = screen.getByText("FAQs").closest("a");
    expect(link).toHaveAttribute("href", "https://example.com/faqs");
  });

  it("contains a malito link to the support email", () => {
    render(<RenewalWithIcon {...properties} />);

    const link = screen.getByText("help@boilerplate.com").closest("a");
    expect(link).toHaveAttribute("href", "mailto:help@boilerplate.com");
  });

  it("contains an unsubscribe link", () => {
    render(<RenewalWithIcon {...properties} />);
    const unsubscribeLink = screen.getByText("click here").closest("a");
    expect(unsubscribeLink).toHaveAttribute(
      "href",
      "https://example.com/unsubscribe",
    );
  });
});
