import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

import WaitlistCard, {
  WaitlistCardProperties,
} from "~/components/common/Waitlist/WaitlistCard";

const cardProperty: WaitlistCardProperties = {
  cardTitle: "Easy Customization",
  cardDescription: "Hello there!",
  cardIcon: "../../../public/Wailtist/vector-icon.svg",
};

describe("waitlistCard", () => {
  it("renders the WaitlistCard properly", () => {
    expect.assertions(0);
    render(<WaitlistCard {...cardProperty} />);
  });

  it("image must have alt text", () => {
    expect.assertions(1);
    render(<WaitlistCard {...cardProperty} />);
    expect(screen.getByRole("image")).toHaveAttribute("alt");
  });
});

describe("waitlist card component props", () => {
  it("renders the component with the card title", () => {
    expect.assertions(1);
    render(<WaitlistCard {...cardProperty} />);
    const cardTitleRole = screen.getByRole("cardTitle");
    expect(cardTitleRole).toBeInTheDocument();
  });

  it("renders the component with the card description", () => {
    expect.assertions(1);
    render(<WaitlistCard {...cardProperty} />);
    const cardDescriptionRole = screen.getByRole("cardTitle");
    expect(cardDescriptionRole).toBeInTheDocument();
  });

  it("renders the component with the card icon", () => {
    expect.assertions(1);
    render(<WaitlistCard {...cardProperty} />);
    const cardIconRole = screen.getByRole("image");
    expect(cardIconRole).toBeInTheDocument();
  });
});
