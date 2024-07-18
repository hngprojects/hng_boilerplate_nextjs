import { fireEvent, render, screen } from "@testing-library/react";

import {
  INTEGRATION_CARD_IMAGE_TEST_ID,
  INTEGRATION_CARD_TEST_ID,
  IntegrationCard,
  TOGGLE_BTN_TEST_ID,
} from "../components/common/IntegrationCard";

describe("IntegrationCard Component", () => {
  it("Renders the Integration Card Component", async () => {
    render(
      <IntegrationCard
        heading="Drive"
        description="Store, share, and collaborate on documents and files securely"
        logoURL="https://cdn.worldvectorlogo.com/logos/next-js.svg"
      />,
    );
    const Card = screen.getByTestId(INTEGRATION_CARD_TEST_ID);
    expect(Card).toBeInTheDocument();
  });
  it("The Toggle Active Functionality works", async () => {
    render(
      <IntegrationCard
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
  it("The Image is displayed", async () => {
    render(
      <IntegrationCard
        heading="Drive"
        description="Store, share, and collaborate on documents and files securely"
        logoURL="https://example.com/logo.png"
      />,
    );
    const image = screen.getByTestId(INTEGRATION_CARD_IMAGE_TEST_ID);
    expect(image).toBeInTheDocument();
  });
});
