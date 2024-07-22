import { render, screen } from "@testing-library/react";

import CardComponent from "~/components/adminDashboard/CardComponent";
import { cardData } from "~/components/adminDashboard/cardData";

describe("cardComponent", () => {
  it("renders card with correct title, value, description, and icon", () => {
    expect.assertions(5);

    const { title, value, description, icon } = cardData[0];

    render(
      <CardComponent
        title={title}
        value={value}
        description={description}
        icon={icon}
      />,
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(value)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    const img = screen.getByAltText(title);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", icon);
  });

  it("renders multiple cards correctly", () => {
    expect.hasAssertions();

    for (const { title, value, description, icon } of cardData) {
      render(
        <CardComponent
          title={title}
          value={value}
          description={description}
          icon={icon}
        />,
      );

      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
      const descriptions = screen.getAllByText(description);
      expect(descriptions.length).toBeGreaterThan(0);
      const img = screen.getByAltText(title);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", icon);
    }
  });
});
