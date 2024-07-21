import CookieFooter from ".";
import { render, screen } from "@testing-library/react";

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
    const settingsButton = screen.getByText(/cookies settings/i);
    expect(acceptButton).toBeInTheDocument();
    expect(rejectButton).toBeInTheDocument();
    expect(settingsButton).toBeInTheDocument();
  });
});
