import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import HelpCenterPage from "../../../app/help-center/page";
import TooltipAccordions from "./TooltipAccordions";

// Mock FAQ data
const faqs = [
  {
    id: "item-1",
    question: "What is EcoClean?",
    answer: "Lorem ipsum dolor sit amet, consectetur elit.",
  },
  {
    id: "item-2",
    question: "How does EcoClean work?",
    answer: "Lorem ipsum dolor sit amet consectetur elit.",
  },
];

// TooltipAccordions test
describe("tooltipAccordions Component", () => {
  it("renders accordion items correctly", () => {
    expect.hasAssertions();
    render(<TooltipAccordions />);

    for (const faq of faqs) {
      const trigger = screen.getByText(faq.question);
      expect(trigger).toBeInTheDocument();
      expect(screen.queryByText(faq.answer)).not.toBeInTheDocument();
    }
  });

  it("shows and hides content when clicking the trigger", () => {
    expect.hasAssertions();
    render(<TooltipAccordions />);

    for (const faq of faqs) {
      const trigger = screen.getByText(faq.question);
      fireEvent.click(trigger);
      expect(screen.getByText(faq.answer)).toBeInTheDocument();
      fireEvent.click(trigger);
      expect(screen.queryByText(faq.answer)).not.toBeInTheDocument();
    }
  });
});

// HelpCenterPage tests
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

  // Button test
  it("triggers an alert when the Contact Us button is clicked", () => {
    expect.hasAssertions();
    const alertMock = vi.fn();
    window.alert = alertMock;

    render(<HelpCenterPage />);
    const contactButton = screen.getByText("Contact Us");
    fireEvent.click(contactButton);
    expect(alertMock).toHaveBeenCalledWith("Contact Button Click Test");
  });

  // Responsive test with snapshot
  it("renders correctly at different screen sizes", () => {
    expect.hasAssertions();
    const { container } = render(<HelpCenterPage />);

    // Test for mobile
    global.innerWidth = 320;
    global.dispatchEvent(new Event("resize"));
    expect(container).toMatchSnapshot("mobile");

    // Test for tablet
    global.innerWidth = 768;
    global.dispatchEvent(new Event("resize"));
    expect(container).toMatchSnapshot("tablet");

    // Test for desktop
    global.innerWidth = 1024;
    global.dispatchEvent(new Event("resize"));
    expect(container).toMatchSnapshot("desktop");
  });
});
