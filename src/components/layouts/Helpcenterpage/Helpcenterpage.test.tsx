import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import HelpCenterPage from "../../../app/help-center/page";

describe("helpCenterPage", () => {
  it("renders Help Center title", () => {
    expect.hasAssertions();
    render(<HelpCenterPage />);
    const titleElement = screen.getByText("Help Center");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the main heading", () => {
    expect.hasAssertions();
    render(<HelpCenterPage />);
    const headingElement = screen.getByText("How can we help You?");
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the search input placeholder", () => {
    expect.hasAssertions();
    render(<HelpCenterPage />);
    const inputElement = screen.getByPlaceholderText("Search on any topic...");
    expect(inputElement).toBeInTheDocument();
  });

  it("renders Browse by topics section", () => {
    expect.hasAssertions();
    render(<HelpCenterPage />);
    const browseTitleElement = screen.getByText("Browse by topics");
    expect(browseTitleElement).toBeInTheDocument();
  });

  it("renders Frequently Asked Questions section", () => {
    expect.hasAssertions();
    render(<HelpCenterPage />);
    const faqTitleElement = screen.getByText("Frequently Asked Questions");
    expect(faqTitleElement).toBeInTheDocument();
  });

  it("renders Contact Us button", () => {
    expect.hasAssertions();
    render(<HelpCenterPage />);
    const contactButton = screen.getByText("Contact Us");
    expect(contactButton).toBeInTheDocument();
  });

  // Screen reader accessibility tests
  it("announces the Help Center section for screen readers", () => {
    expect.hasAssertions();
    render(<HelpCenterPage />);
    const helpCenterSection = screen.getByLabelText("Help Center");
    expect(helpCenterSection).toBeInTheDocument();
  });

  it("announces the main heading for screen readers", () => {
    expect.hasAssertions();
    render(<HelpCenterPage />);
    const mainHeading = screen.getByRole("heading", {
      level: 1,
      name: "How can we help You?",
    });
    expect(mainHeading).toBeInTheDocument();
  });

  it("announces the Browse by topics section for screen readers", () => {
    expect.hasAssertions();
    render(<HelpCenterPage />);
    const browseTopicsSection = screen.getByLabelText("Browse by topics");
    expect(browseTopicsSection).toBeInTheDocument();
  });

  it("announces the Frequently Asked Questions section for screen readers", () => {
    expect.hasAssertions();
    render(<HelpCenterPage />);
    const faqSection = screen.getByRole("heading", {
      level: 1,
      name: "Frequently Asked Questions",
    });
    expect(faqSection).toBeInTheDocument();
  });

  it("announces the search input for screen readers", () => {
    expect.hasAssertions();
    render(<HelpCenterPage />);
    const searchInput = screen.getByRole("textbox", {
      name: "Search on any topic",
    });
    expect(searchInput).toBeInTheDocument();
  });
});
