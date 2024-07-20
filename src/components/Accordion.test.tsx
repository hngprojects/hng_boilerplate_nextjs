import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Accordion from "./Accordion";

const items = [
  {
    header: "What payment methods do you accept?",
    content: "Answer to question 1.",
  },
  {
    header: "Is there a discount for annual subscriptions?",
    content: "Answer to question 2.",
  },
  { header: "Do you offer a free trial?", content: "Answer to question 3." },
];

describe("accordion Component", () => {
  it("renders without crashing", () => {
    render(<Accordion items={items} />);
    expect(
      screen.getByText("What payment methods do you accept?"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Is there a discount for annual subscriptions?"),
    ).toBeInTheDocument();
    expect(screen.getByText("Do you offer a free trial?")).toBeInTheDocument();
  });

  it("expands and collapses content on click", () => {
    render(<Accordion items={items} />);
    const firstItemHeader = screen.getByText(
      "What payment methods do you accept?",
    );
    const firstItemContent = screen.queryByText("Answer to question 1.");

    // Initially content should not be visible
    expect(firstItemContent).not.toBeVisible();

    // After clicking, content should be visible
    fireEvent.click(firstItemHeader);
    expect(firstItemContent).toBeVisible();

    // After clicking again, content should not be visible
    fireEvent.click(firstItemHeader);
    expect(firstItemContent).not.toBeVisible();
  });

  it("only one item is expanded at a time", () => {
    render(<Accordion items={items} />);
    const firstItemHeader = screen.getByText(
      "What payment methods do you accept?",
    );
    const secondItemHeader = screen.getByText(
      "Is there a discount for annual subscriptions?",
    );
    const firstItemContent = screen.queryByText("Answer to question 1.");
    const secondItemContent = screen.queryByText("Answer to question 2.");

    // Expand first item
    fireEvent.click(firstItemHeader);
    expect(firstItemContent).toBeVisible();

    // Expand second item and first item should collapse
    fireEvent.click(secondItemHeader);
    expect(firstItemContent).not.toBeVisible();
    expect(secondItemContent).toBeVisible();
  });
});
