import "./setup";

import { render, screen } from "@testing-library/react";

import SubscriptionRenewalReminder from "~/email/templates/subscriptionRenewalReminder/with-image";

describe("subscriptionRenewalReminderEmail Component", () => {
  const properties = {
    title: "Subscription Renewal",
    name: "John Doe",
    imageUrl: "https://example.com/image.jpg",
    renewalDate: "2022-01-01",
    renewalPrice: "$9.99",
    renewalPeriod: "month",
    reviewUrl: "https://example.com/review",
    renewUrl: "https://example.com/renew",
    companyName: "Boilerplate Inc.",
    faqUrl: "https://example.com/faq",
    helpUrl: "https://example.com/help",
    unsubscribeUrl: "https://example.com/unsubscribe",
  };

  it("renders text content correctly", () => {
    expect.hasAssertions();
    render(<SubscriptionRenewalReminder {...properties} />);
    expect(screen.getByText(properties.title)).toBeInTheDocument();
    expect(screen.getByText(`Hi ${properties.name},`)).toBeInTheDocument();
    expect(screen.getByText(properties.renewalDate)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${properties.renewalPrice}/${properties.renewalPeriod} features`,
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(properties.companyName)).toBeInTheDocument();
  });

  it("renders links correctly", () => {
    expect.hasAssertions();
    render(<SubscriptionRenewalReminder {...properties} />);
    const links = [
      { name: "review subscription.", url: properties.reviewUrl },
      { name: "Renew Subscription", url: properties.renewUrl },
      { name: "FAQs", url: properties.faqUrl },
      { name: "help@boilerplate.com", url: properties.helpUrl },
      { name: "click here", url: properties.unsubscribeUrl },
    ];
    for (const link of links) {
      expect(
        screen.getByRole("link", { name: link.name }).getAttribute("href"),
      ).toBe(link.url);
    }
  });
});
