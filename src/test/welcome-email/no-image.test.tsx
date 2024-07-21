import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import WelcomeEmail from "~/email/templates/welcome/no-image";

describe("welcome Email Template", () => {
  const properties = {
    companyName: "Boilerplate",
    receiverName: "John Doe",
    offers: [
      {
        title: "Exclusive Offers",
        description:
          "Enjoy special promotions and discounts available only to our members",
      },
      {
        title: "Exclusive Offers",
        description:
          "Enjoy special promotions and discounts available only to our members",
      },
      {
        title: "Exclusive Offers",
        description:
          "Enjoy special promotions and discounts available only to our members",
      },
    ],
    baseUrl: "http://localhost:3000",
    mainHeading: "Welcome to Boilerplate",
    subHeading: "Thanks for signing up",
    welcomeMessage:
      "We're thrilled to have you join us. Experience quality and innovation like never before. Our product is made to fit your needs and make your life easier.",
    socialLinks: [
      {
        type: "twitter",
        url: "https://twitter.com",
        img: {
          src: "twitter-icon.png",
          width: "24",
          height: "24",
        },
      },
      {
        type: "instagram",
        url: "https://instagram.com",
        img: {
          src: "instagram-icon.png",
          width: "24",
          height: "24",
        },
      },
      {
        type: "tiktok",
        url: "https://tiktok.com",
        img: {
          src: "tiktok-icon.png",
          width: "24",
          height: "24",
        },
      },
      {
        type: "reddit",
        url: "https://reddit.com",
        img: {
          src: "reddit-icon.png",
          width: "24",
          height: "24",
        },
      },
      {
        type: "linkedin",
        url: "https://linkedin.com",
        img: {
          src: "linkedin-icon.png",
          width: "24",
          height: "24",
        },
      },
    ],
    customerSupportLink: "http://localhost:3000",
    updatePreferencesLink: "http://localhost:3000",
    unsubscribeLink: "http://localhost:3000",
  };

  it("renders main heading", () => {
    expect.assertions(1);
    render(<WelcomeEmail {...properties} />);
    expect(screen.getByText("Welcome to Boilerplate")).toBeInTheDocument();
  });

  it("renders subheading", () => {
    expect.assertions(1);
    render(<WelcomeEmail {...properties} />);
    expect(screen.getByText("Thanks for signing up")).toBeInTheDocument();
  });

  it("renders personalized greeting", () => {
    expect.assertions(1);
    render(<WelcomeEmail {...properties} />);
    expect(
      screen.getByText(`Hi, ${properties.receiverName},`),
    ).toBeInTheDocument();
  });

  it("renders welcome message and brief product description", () => {
    expect.assertions(1);
    render(<WelcomeEmail {...properties} />);
    expect(screen.getByText(properties.welcomeMessage)).toBeInTheDocument();
  });

  it("renders call-to-action button with correct tracking link", () => {
    expect.assertions(1);
    render(<WelcomeEmail {...properties} />);
    const button = screen.getByRole("link", { name: /learn more about us/i });
    const expectedUrl = `${properties.baseUrl}?utm_source=email&utm_medium=welcome&utm_campaign=onboarding`;
    expect(button).toHaveAttribute("href", expectedUrl);
  });

  it("renders sign-off and company name", () => {
    expect.assertions(2);
    render(<WelcomeEmail {...properties} />);
    expect(screen.getByText("Regards,")).toBeInTheDocument();
    expect(screen.getByText(properties.companyName)).toBeInTheDocument();
  });

  it("renders social media links", () => {
    expect.assertions(5);
    render(<WelcomeEmail {...properties} />);
    for (const socialLink of properties.socialLinks) {
      const link = screen.getByRole("link", {
        name: `${socialLink.type} icon`,
      });
      expect(link).toHaveAttribute("href", socialLink.url);
    }
  });

  it("renders customer support link", () => {
    expect.assertions(1);
    render(<WelcomeEmail {...properties} />);
    const link = screen.getByRole("link", {
      name: /contact our customer support/i,
    });
    expect(link).toHaveAttribute("href", properties.customerSupportLink);
  });

  it("renders update preferences link", () => {
    expect.assertions(1);
    render(<WelcomeEmail {...properties} />);
    const link = screen.getByRole("link", { name: /update your preferences/i });
    expect(link).toHaveAttribute("href", properties.updatePreferencesLink);
  });

  it("renders unsubscribe link", () => {
    expect.assertions(1);
    render(<WelcomeEmail {...properties} />);
    const link = screen.getByRole("link", {
      name: /unsubscribe from this list/i,
    });
    expect(link).toHaveAttribute("href", properties.unsubscribeLink);
  });
});
