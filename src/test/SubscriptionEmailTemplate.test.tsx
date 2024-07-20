import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import SubscriptionRenewalEmail from "~/email/templates/subscription-renewal-reminder/Subscription";

describe("subscriptionEmail Component", () => {
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
    const { container } = render(<SubscriptionRenewalEmail {...properties} />);
    expect(container.innerHTML).toContain(properties.title);
    expect(container.innerHTML).toContain(`Hi ${properties.name},`);
    expect(container.innerHTML).toContain(properties.renewalDate);
    expect(container.innerHTML).toContain(
      `${properties.renewalPrice}/${properties.renewalPeriod} features`,
    );
    expect(container.innerHTML).toContain(properties.companyName);
  });

  it("renders links correctly", () => {
    expect.hasAssertions();
    render(<SubscriptionRenewalEmail {...properties} />);
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
