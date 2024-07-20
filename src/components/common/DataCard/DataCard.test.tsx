import { render, screen } from "@testing-library/react";

import DataCard, { ContentProperties, HeadingProperties } from "./DataCard";

const mockHeading: HeadingProperties = {
  title: "Test Title",
  icon: <svg data-testid="test-icon" />,
};

const mockContent: ContentProperties = {
  amount: "$100",
  subtext: "Test Subtext",
};

describe("dataCard component", () => {
  it("renders correctly with all required elements", () => {
    expect.assertions(4);
    render(<DataCard heading={mockHeading} content={mockContent} />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();

    expect(screen.getByTestId("test-icon")).toBeInTheDocument();

    expect(screen.getByText("$100")).toBeInTheDocument();

    expect(screen.getByText("Test Subtext")).toBeInTheDocument();
  });

  it("is responsive", () => {
    expect.assertions(4);

    render(<DataCard heading={mockHeading} content={mockContent} />);

    global.innerWidth = 600;
    global.dispatchEvent(new Event("resize"));

    expect(screen.getAllByText("Test Title")).toHaveLength(1);
    expect(screen.getAllByText("$100")).toHaveLength(1);

    global.innerWidth = 1200;
    global.dispatchEvent(new Event("resize"));

    expect(screen.getAllByText("Test Title")).toHaveLength(1);
    expect(screen.getAllByText("$100")).toHaveLength(1);
  });
});
