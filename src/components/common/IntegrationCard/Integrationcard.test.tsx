import { fireEvent, render, screen } from "@testing-library/react";

import {
  INTEGRATION_CARD_TEST_ID,
  IntegrationCard,
  TOGGLE_BTN_TEST_ID,
} from "./IntegrationCard";

describe("integrationCard Component", () => {
  it("renders the Integration Card Component", async () => {
    expect.hasAssertions();
    render(
      <IntegrationCard
        heading="Drive"
        description="Store, share, and collaborate on documents and files securely"
        logoURL="https://cdn.worldvectorlogo.com/logos/next-js.svg"
        isActive={false}
      />,
    );
    const Card = screen.getByTestId(INTEGRATION_CARD_TEST_ID);
    expect(Card).toBeInTheDocument();
  });
  it("the Toggle Active Functionality works", async () => {
    expect.hasAssertions();
    render(
      <IntegrationCard
        isActive={false}
        heading="Drive"
        description="Store, share, and collaborate on documents and files securely"
        logoURL="https://example.com/logo.png"
      />,
    );
    const toggleButton = screen.getByTestId(TOGGLE_BTN_TEST_ID);
    expect(toggleButton).toHaveClass("bg-[#D0D6D6]");

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveClass("bg-[#F97316]");

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveClass("bg-[#D0D6D6]");
  });
});
