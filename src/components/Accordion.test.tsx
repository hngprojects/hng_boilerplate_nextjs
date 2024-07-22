import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { AccordionDemo } from "./Accordion";

const expectContentVisibility = (content, visibility) => {
  if (visibility) {
    expect(content).toBeVisible();
  } else {
    if (content) {
      expect(content).not.toBeVisible();
    } else {
      expect(content).toBeNull();
    }
  }
};

describe("accordion Component", () => {
  it("renders the headers correctly", () => {
    expect.assertions(3); // Ensure the correct number of assertions
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
    expect.assertions(3); // Ensure the correct number of assertions
    render(<AccordionDemo />);

    const firstHeader = screen.getByText("What payment methods do you accept?");
    let firstContent = screen.queryByText("Answer to question 1.");

    // Initially, content should not be in the document
    expect(firstContent).not.toBeInTheDocument();

    // After clicking, content should be visible
    fireEvent.click(firstHeader);
    firstContent = screen.getByText("Answer to question 1.");
    expect(firstContent).toBeVisible();

    // After clicking again, content should not be in the document
    fireEvent.click(firstHeader);
    firstContent = screen.queryByText("Answer to question 1.");
    expect(firstContent).not.toBeInTheDocument();
  });

  it("does not allow more than one item to be expanded", () => {
    expect.assertions(5); // Update to match the actual number of assertions
    render(<AccordionDemo />);

    const firstHeader = screen.getByText("What payment methods do you accept?");
    const secondHeader = screen.getByText(
      "Is there a discount for annual subscriptions?",
    );

    // Initially, no content should be visible
    expect(screen.queryByText("Answer to question 1.")).not.toBeInTheDocument();
    expect(screen.queryByText("Answer to question 2.")).not.toBeInTheDocument();

    // Expand first item
    fireEvent.click(firstHeader);
    expect(screen.getByText("Answer to question 1.")).toBeVisible();

    // Expand second item and first item should collapse
    fireEvent.click(secondHeader);
    const firstContent = screen.queryByText("Answer to question 1.");
    const secondContent = screen.getByText("Answer to question 2.");

    // Ensure the first content is not visible (collapsed)
    expectContentVisibility(firstContent, false);
    // Ensure the second content is visible
    expectContentVisibility(secondContent, true);
  });
});
