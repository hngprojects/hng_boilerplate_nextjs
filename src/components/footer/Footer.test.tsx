import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  test("renders BoilerPlate section", () => {
    const boilerplateHeading = screen.getByText(/BoilerPlate/i);
    expect(boilerplateHeading).toBeInTheDocument();
  });

  test("renders Navigation section", () => {
    const navigationHeading = screen.getByText(/Navigation/i);
    expect(navigationHeading).toBeInTheDocument();

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();

    const aboutUsLink = screen.getByText(/About Us/i);
    expect(aboutUsLink).toBeInTheDocument();

    const jobListingLink = screen.getByText(/Job Listing/i);
    expect(jobListingLink).toBeInTheDocument();

    const featureUpdatesLink = screen.getByText(/Feature Updates/i);
    expect(featureUpdatesLink).toBeInTheDocument();

    const blogLink = screen.getByText(/Blog/i);
    expect(blogLink).toBeInTheDocument();
  });

  test("renders Support section", () => {
    const supportHeading = screen.getByText(/Support/i);
    expect(supportHeading).toBeInTheDocument();

    const helpCenterLink = screen.getByText(/Help Center/i);
    expect(helpCenterLink).toBeInTheDocument();

    const faqLink = screen.getByText(/FAQ/i);
    expect(faqLink).toBeInTheDocument();

    const waitingListLink = screen.getByText(/Waiting List/i);
    expect(waitingListLink).toBeInTheDocument();

    const pricingExperienceLink = screen.getByText(/Pricing Experience/i);
    expect(pricingExperienceLink).toBeInTheDocument();

    const contactUsLink = screen.getByText(/Contact Us/i);
    expect(contactUsLink).toBeInTheDocument();
  });

  test("renders Legal section", () => {
    const legalHeading = screen.getByText(/Legal/i);
    expect(legalHeading).toBeInTheDocument();

    const privacyPolicyLink = screen.getByText(/Privacy Policy/i);
    expect(privacyPolicyLink).toBeInTheDocument();

    const termsAndConditionsLink = screen.getByText(/Terms and Conditions/i);
    expect(termsAndConditionsLink).toBeInTheDocument();
  });

  test("renders Sign Up For Newsletter section and handles input", () => {
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

  test("renders social media icons", () => {
    const twitterIcons = screen.getAllByAltText(/twitter/i);
    expect(twitterIcons).toHaveLength(2); 
    twitterIcons.forEach(icon => expect(icon).toBeInTheDocument());

    const youtubeIcon = screen.getByAltText(/youtube/i);
    expect(youtubeIcon).toBeInTheDocument();

    const instagramIcon = screen.getByAltText(/instagram/i);
    expect(instagramIcon).toBeInTheDocument();

    const linkedinIcon = screen.getByAltText(/linkedin/i);
    expect(linkedinIcon).toBeInTheDocument();

    const facebookIcon = screen.getByAltText(/facebook/i);
    expect(facebookIcon).toBeInTheDocument();
  });

  test("renders copyright information", () => {
    const copyrightText = screen.getByText(/© 2024 All Rights Reserved/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
