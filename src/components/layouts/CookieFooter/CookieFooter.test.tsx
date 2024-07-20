import CookieFooter from ".";
import { fireEvent, render, screen } from "@testing-library/react";

describe("cookieFooter", () => {
  it("renders the required contents", () => {
    expect.hasAssertions();
    render(<CookieFooter />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();

    const privacyMessage = screen.getByText(/we value your privacy/i);
    expect(privacyMessage).toBeInTheDocument();

    const cookieDescription = screen.getByText(
      /our website uses cookies to enhance your browsing experience, provide personalized content, and analyze site traffic. by clicking "accept all", you consent to our use of cookies./i,
    );
    expect(cookieDescription).toBeInTheDocument();

    const acceptButton = screen.getByText(/accept all cookies/i);
    const rejectButton = screen.getByText(/reject all/i);
    const settingsButton = screen.getByText(/cookie settings/i);
    expect(acceptButton).toBeInTheDocument();
    expect(rejectButton).toBeInTheDocument();
    // eslint-disable-next-line vitest/max-expects
    expect(settingsButton).toBeInTheDocument();
  });

  it("hides the footer when any button is clicked", () => {
    expect.hasAssertions();
    render(<CookieFooter />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();

    const acceptButton = screen.getByText(/accept all cookies/i);
    fireEvent.click(acceptButton);
    expect(footerElement).not.toBeInTheDocument();

    render(<CookieFooter />);
    const rejectButton = screen.getByText(/reject all/i);
    fireEvent.click(rejectButton);
    expect(footerElement).not.toBeInTheDocument();
  });
});
