import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { AccordionDemo } from "../Accordion";

describe("accordion Component", () => {
  it("renders the headers correctly", () => {
    render(<AccordionDemo />);
    const faqItems = [
      "What payment methods do you accept?",
      "Is there a discount for annual subscriptions?",
      "Do you offer a free trial?",
    ];
    for (const header of faqItems) {
      expect(screen.getByText(header)).toBeInTheDocument();
    }
  });

  it("toggles content visibility when headers are clicked", () => {
    render(<AccordionDemo />);

    const firstHeader = screen.getByText("What payment methods do you accept?");
    const firstContent = screen.queryByText("Answer to question 1.");

    // Initially, content should not be visible
    expect(firstContent).not.toBeInTheDocument();

    // After clicking, content should be visible
    fireEvent.click(firstHeader);
    expect(screen.getByText("Answer to question 1.")).toBeVisible();

    // After clicking again, content should not be visible
    fireEvent.click(firstHeader);
    expect(screen.queryByText("Answer to question 1.")).not.toBeInTheDocument();
  });

  it("does not allow more than one item to be expanded", () => {
    render(<AccordionDemo />);

    const firstHeader = screen.getByText("What payment methods do you accept?");
    const secondHeader = screen.getByText(
      "Is there a discount for annual subscriptions?",
    );
    const firstContent = screen.queryByText("Answer to question 1.");
    const secondContent = screen.queryByText("Answer to question 2.");

    // Expand first item
    fireEvent.click(firstHeader);
    expect(screen.getByText("Answer to question 1.")).toBeVisible();

    // Expand second item and first item should collapse
    fireEvent.click(secondHeader);
    expect(screen.queryByText("Answer to question 1.")).not.toBeInTheDocument();
    expect(screen.getByText("Answer to question 2.")).toBeVisible();
  });
});
