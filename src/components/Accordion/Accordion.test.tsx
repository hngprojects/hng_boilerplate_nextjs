import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { AccordionComponent } from "./Accordion";

const expectContentVisibility = (
  content: HTMLElement | null,
  visibility: boolean,
) => {
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
    expect.assertions(3);
    render(<AccordionComponent />);
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
    expect.assertions(3);
    render(<AccordionComponent />);

    const firstHeader = screen.getByText("What payment methods do you accept?");
    let firstContent = screen.queryByText("Answer to question 1.");

    expect(firstContent).not.toBeInTheDocument();

    fireEvent.click(firstHeader);
    firstContent = screen.getByText("Answer to question 1.");
    expect(firstContent).toBeVisible();

    fireEvent.click(firstHeader);
    firstContent = screen.queryByText("Answer to question 1.");
    expect(firstContent).not.toBeInTheDocument();
  });

  it("does not allow more than one item to be expanded", () => {
    expect.assertions(5);
    render(<AccordionComponent />);

    const firstHeader = screen.getByText("What payment methods do you accept?");
    const secondHeader = screen.getByText(
      "Is there a discount for annual subscriptions?",
    );

    expect(screen.queryByText("Answer to question 1.")).not.toBeInTheDocument();
    expect(screen.queryByText("Answer to question 2.")).not.toBeInTheDocument();

    fireEvent.click(firstHeader);
    expect(screen.getByText("Answer to question 1.")).toBeVisible();

    fireEvent.click(secondHeader);
    const firstContent = screen.queryByText("Answer to question 1.");
    const secondContent = screen.getByText("Answer to question 2.");

    expectContentVisibility(firstContent, false);

    expectContentVisibility(secondContent, true);
  });
});
