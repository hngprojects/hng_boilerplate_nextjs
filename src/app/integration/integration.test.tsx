import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { cardData } from "./data/data";
import Integration from "./page";

describe("integration Component", () => {
  it("renders Integration component correctly", () => {
    render(<Integration />);

    expect(screen.getByText("Integration")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Supercharge your workflow and handle repetitive tasks with apps you use everyday",
      ),
    ).toBeInTheDocument();
  });

  it("filters cards correctly based on filter selection", () => {
    render(<Integration />);

    const activeFilter = screen.getByText("Active");
    const inactiveFilter = screen.getByText("Inactive");

    expect(screen.getByText(cardData[0].heading)).toBeInTheDocument();
    expect(screen.getByText(cardData[1].heading)).toBeInTheDocument();

    fireEvent.click(activeFilter);
    for (const card of cardData) {
      if (card.isActive) {
        expect(screen.getByText(card.heading)).toBeInTheDocument();
      } else {
        expect(screen.queryByText(card.heading)).not.toBeInTheDocument();
      }
    }

    fireEvent.click(inactiveFilter);
    for (const card of cardData) {
      if (card.isActive) {
        expect(screen.queryByText(card.heading)).not.toBeInTheDocument();
      } else {
        expect(screen.getByText(card.heading)).toBeInTheDocument();
      }
    }
  });

  it("changes filter styles correctly when clicked", () => {
    render(<Integration />);

    const allFilter = screen.getByText("All");
    const activeFilter = screen.getByText("Active");
    const inactiveFilter = screen.getByText("Inactive");

    fireEvent.click(activeFilter);
    expect(activeFilter).toHaveClass("bg-gray-300");
    expect(allFilter).not.toHaveClass("bg-gray-300");
    expect(inactiveFilter).not.toHaveClass("bg-gray-300");

    fireEvent.click(inactiveFilter);
    expect(inactiveFilter).toHaveClass("bg-gray-300");
    expect(allFilter).not.toHaveClass("bg-gray-300");
    expect(activeFilter).not.toHaveClass("bg-gray-300");
  });
});
