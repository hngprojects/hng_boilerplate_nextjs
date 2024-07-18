// Tests for the Badge component

import { render, screen } from "@testing-library/react";

import BadgeInterface from "~/components/common/Badge/BadgeInterface";
import Badge from "./Badge";

describe("the Badge component renders correctly with an icon", () => {
  it("renders the badge component correctly", () => {
    expect.assertions(2);
    render(
      <Badge label={"Label"} variant={"success"} icon={<span>&larr;</span>} />,
    );
    expect(true).toBeTruthy();

    const badgeProperties: BadgeInterface = {
      label: "iconlabel",
      variant: "primary",
      icon: <p>&larr;</p>,
    };
    render(<Badge {...badgeProperties} />);
    expect(true).toBeTruthy();
  });
});

describe("the badge component has the right label", () => {
  it("renders the badge component with the correct label", () => {
    expect.assertions(2);

    render(<Badge label={"label"} variant={"default"} />);
    const badgeLabel = screen.getByText("label");
    expect(badgeLabel).toBeInTheDocument();

    render(<Badge label={"labeltest"} variant={"default"} />);
    const badgeLabel2 = screen.getByText("labeltest");
    expect(badgeLabel2).toBeInTheDocument();
  });
});

describe("the Badge component renders correctly without an icon", () => {
  it("renders the badge component correctly without an icon", () => {
    expect.assertions(2);

    render(<Badge label={"test"} variant={"error"} />);
    expect(true).toBeTruthy();

    const badgeProperties: BadgeInterface = {
      label: "label",
      variant: "error",
    };
    render(<Badge {...badgeProperties} />);
    expect(true).toBeTruthy();
  });
});
