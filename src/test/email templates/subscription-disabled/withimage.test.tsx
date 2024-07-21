import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import EmailTemplate from "~/email/templates/subscription-disabled/Withimage";

describe("emailTemplate", () => {
  const properties = {
    title: "Subscription Renewal Disabled",
    name: "John Doe",
    image: true,
    date: "17th August, 2024",
    plan: "Bi-monthly Features",
    reactivateLink: "Reactivate Subscription",
    upgradeLink: "Upgrade Plan",
  };

  it("renders the email title", () => {
    expect.hasAssertions();
    render(<EmailTemplate {...properties} />);
    expect(
      screen.getByText("Subscription Renewal Disabled"),
    ).toBeInTheDocument();
  });

  it("renders the user name", () => {
    expect.hasAssertions();
    render(<EmailTemplate {...properties} />);
    expect(screen.getByText("Hi John Doe,")).toBeInTheDocument();
  });

  it("renders the subscription plan", () => {
    expect.hasAssertions();
    render(<EmailTemplate {...properties} />);
    expect(screen.getByText("Bi-monthly Features")).toBeInTheDocument();
  });

  it("renders the subscription date", () => {
    expect.hasAssertions();
    render(<EmailTemplate {...properties} />);
    expect(screen.getByText("17th August, 2024")).toBeInTheDocument();
  });

  it("renders the Reactivate Subscription button", () => {
    expect.hasAssertions();
    render(<EmailTemplate {...properties} />);
    expect(screen.getByText("Reactivate Subscription")).toBeInTheDocument();
  });

  it("renders the Upgrade Plan button", () => {
    expect.hasAssertions();
    render(<EmailTemplate {...properties} />);
    expect(screen.getByText("Upgrade Plan")).toBeInTheDocument();
  });

  it("renders the correct image", () => {
    expect.hasAssertions();
    render(<EmailTemplate {...properties} />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "https://i.ibb.co/4T072wz/banner.png");
  });
});
