import { render, screen } from "@testing-library/react";

import Badge, { BadgeInterface } from "~/components/common/Badge/Badge";

describe("the badge component has the right label", () => {
  it("renders the badge component with the correct label", () => {
    expect.assertions(3);

    render(<Badge label={"label"} variant={"default"} />);
    const badgeLabel = screen.getByText("label");
    expect(badgeLabel).toBeInTheDocument();

    render(<Badge label={"labeltest"} variant={"default"} />);
    const badgeLabel2 = screen.getByText("labeltest");
    expect(badgeLabel2).toBeInTheDocument();

    const badgeProperties: BadgeInterface = {
      label: "newlabel",
      variant: "error",
      icon: <span>&larr;</span>,
    };
    render(<Badge {...badgeProperties} />);
    const badgeLabel3 = screen.getByText("newlabel");
    expect(badgeLabel3).toBeInTheDocument();
  });
});
