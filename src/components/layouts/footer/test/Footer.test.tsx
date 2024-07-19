import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import Footer from "../Footer";

describe.only("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it.only("renders BoilerPlate section", () => {
    const boilerplateHeadings = screen.getAllByText(/BoilerPlate/i);
    expect(boilerplateHeadings).toHaveLength(2); 
    boilerplateHeadings.forEach((heading) => expect(heading).toBeInTheDocument());
  });

  it.only("renders Navigation section", () => {
    const navigationHeading = screen.getByText(/Navigation/i);
    expect(navigationHeading).toBeInTheDocument();

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About Us/i)).toBeInTheDocument();
    expect(screen.getByText(/Job Listing/i)).toBeInTheDocument();
    expect(screen.getByText(/Feature Updates/i)).toBeInTheDocument();
    expect(screen.getByText(/Blog/i)).toBeInTheDocument();
  });

  it.only("renders Support section", () => {
    const supportHeading = screen.getByText(/Support/i);
    expect(supportHeading).toBeInTheDocument();

    expect(screen.getByText(/Help Center/i)).toBeInTheDocument();
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
    expect(screen.getByText(/Waiting List/i)).toBeInTheDocument();
    expect(screen.getByText(/Pricing Experience/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  it.only("renders Legal section", () => {
    const legalHeading = screen.getByText(/Legal/i);
    expect(legalHeading).toBeInTheDocument();

    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms and Conditions/i)).toBeInTheDocument();
  });

  it.only("renders Sign Up For Newsletter section and handles input", () => {
    const newsletterHeading = screen.getByText(/Sign Up For Newsletter/i);
    expect(newsletterHeading).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText(/Enter Email/i);
    expect(emailInput).toBeInTheDocument();

    const subscribeButton = screen.getByText(/Subscribe/i);
    expect(subscribeButton).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput).toHaveValue("test@example.com");
    fireEvent.click(subscribeButton);
  });

  it.only("renders social media icons", () => {
    const twitterIcons = screen.getAllByAltText(/Twitter/i);
    expect(twitterIcons).toHaveLength(2); 
    twitterIcons.forEach((icon) => expect(icon).toBeInTheDocument());

    expect(screen.getByAltText(/YouTube/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Instagram/i)).toBeInTheDocument();
    expect(screen.getByAltText(/LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Facebook/i)).toBeInTheDocument();
  });

  it.only("renders copyright information", () => {
    const copyrightText = screen.getByText(/© 2024 All Rights Reserved/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
