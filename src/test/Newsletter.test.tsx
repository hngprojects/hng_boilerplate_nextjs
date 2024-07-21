import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Newsletter from "../email/templates/newsletter/Newsletter";

describe("newsletter Component", () => {
  it("renders with default props", () => {
    expect.assertions(4); // Number of assertions in this test

    render(<Newsletter />);

    // Check if the default title is rendered
    expect(
      screen.getByText("Stay Ahead: Exclusive Offer on Cutting-Edge Tech!"),
    ).toBeInTheDocument();

    // Check if the default name "John Doe" is rendered
    expect(screen.getByText("Hi John Doe,")).toBeInTheDocument();

    // Check if the Learn More button is rendered
    expect(screen.getByText("Learn More")).toBeInTheDocument();

    // Check if the default email link is rendered
    expect(screen.getByText("support@boilerplate.com")).toBeInTheDocument();
  });

  it("renders with custom props", () => {
    expect.assertions(5); // Number of assertions in this test

    render(
      <Newsletter
        title="Custom Title"
        name="Jane Doe"
        content={() => <div>Custom Content</div>}
        learnMoreUrl="https://custom-url.com"
        image={true}
      />,
    );

    // Check if the custom title is rendered
    expect(screen.getByText("Custom Title")).toBeInTheDocument();

    // Check if the custom name is rendered
    expect(screen.getByText("Hi Jane Doe,")).toBeInTheDocument();

    // Check if the custom content is rendered
    expect(screen.getByText("Custom Content")).toBeInTheDocument();

    // Check if the Learn More button with custom URL is rendered
    expect(screen.getByRole("link", { name: "Learn More" })).toHaveAttribute(
      "href",
      "https://custom-url.com",
    );

    // Check if the specific image is rendered
    expect(screen.getByAltText("Newsletter Image")).toBeInTheDocument();
  });

  it("does not render the specific image when image prop is false", () => {
    expect.assertions(1); // Number of assertions in this test

    render(
      <Newsletter
        title="No Image"
        name="John Smith"
        content={() => <div>No Image Content</div>}
        learnMoreUrl="https://no-image-url.com"
        image={false} // assuming false means image should not be displayed
      />,
    );
    const imageElement = screen.getByAltText("Newsletter Image");
    expect(imageElement).toHaveClass("hidden");
  });
});
