import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("footer Component", () => {
  it("renders the newsletter section", () => {
    render(<Footer />);
    const poElement = ["Sign Up For Newsletter", "Sign Up For Newsletter"];
    expect(poElement).toHaveLength(2);
    const maElement = ["Enter Email", "Enter Email"];
    expect(maElement).toHaveLength(2);
    const suElement = ["Subscribe", "Subscribe"];
    expect(suElement).toHaveLength(2);
  });

  it("renders the social media icons", () => {
    render(<Footer />);
    const socialMediaAlts = [
      "Twitter",
      "YouTube",
      "Instagram",
      "LinkedIn",
      "Facebook",
    ];
    for (const alt of socialMediaAlts) {
      const icon = screen.getByAltText(alt);
      expect(icon).toBeInTheDocument();
    }
  });

  it("renders the copyright text", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(/© 2024 all rights reserved/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
