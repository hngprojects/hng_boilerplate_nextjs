import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import FaqAccordion from "../FaqAccordion/index";
import { FAQACCORDION } from "./types";

const faqs: FAQACCORDION[] = [
  {
    question: "What is the purpose of this application?",
    content:
      "This application is designed to help users manage their tasks efficiently by providing tools for scheduling, tracking progress, and setting reminders.",
  },
  {
    question: "How do I reset my password?",
    content:
      "To reset your password, go to the login page and click on the 'Forgot Password' link. Follow the instructions to receive a password reset email and create a new password.",
  },
  {
    question: "Can I use this application on multiple devices?",
    content:
      "Yes, the application is accessible from multiple devices including desktops, tablets, and smartphones. Your data will be synced across all devices, ensuring a seamless experience.",
  },
];

describe("faqAccordion", () => {
  it("renders correctly with given FAQ data", () => {
    expect.hasAssertions();
    render(<FaqAccordion faqs={faqs} />);

    for (const faq of faqs) {
      expect(screen.getByText(faq.question)).toBeInTheDocument();
    }
  });

  it("renders correctly for different screen sizes", () => {
    expect.hasAssertions();
    render(
      <FaqAccordion
        faqs={faqs}
        containerClassName="p-6 bg-neutral-50 w-full md:w-96 rounded-xl"
      />,
    );

    const container = screen.getByRole("region");
    expect(container).toHaveClass("w-full");
    expect(container).toHaveClass("md:max-w-[590px]");
  });
});
