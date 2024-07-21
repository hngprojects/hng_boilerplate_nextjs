import { render, screen } from "@testing-library/react";

import EmailSentPage from "~/pages/login/EmailSent";

describe("email Sent Component", () => {
  it("renders the header text", () => {
    expect.assertions(1);
    render(<EmailSentPage />);
    expect(screen.getByText("Sent! Check your email.")).toBeInTheDocument();
  });

  it("renders the correct email message", () => {
    expect.assertions(1);
    render(<EmailSentPage />);
    expect(
      screen.getByText(
        "We have sent an email to talk2johnsnow@gmail.com. It contains instructions on how to get started.",
      ),
    ).toBeInTheDocument();
  });

  it("renders the primary button on screens greater than 640px", () => {
    expect.assertions(2);
    render(<EmailSentPage />);
    const primaryButton = screen.getByText("Open Email", {
      selector: String.raw`button.hidden.sm\:block`,
    });
    expect(primaryButton).toBeInTheDocument();
    expect(primaryButton).toHaveClass("hidden sm:block");
  });

  it("renders the outline button on screens less than or equal to 640px", () => {
    expect.assertions(2);
    render(<EmailSentPage />);
    const outlineButton = screen.getByText("Open Email", {
      selector: String.raw`button.block.sm\:hidden`,
    });
    expect(outlineButton).toBeInTheDocument();
    expect(outlineButton).toHaveClass("block sm:hidden");
  });

  it("renders the SVG correctly", () => {
    expect.assertions(2);
    render(<EmailSentPage />);
    const svg = screen.getByTestId("success-icon");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveAttribute("xmlns", "http://www.w3.org/2000/svg");
  });
});
