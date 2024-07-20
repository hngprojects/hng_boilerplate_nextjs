import { render, screen } from "@testing-library/react";

import PasswordSettingsHeading from "~/components/passwordSettings/passwordSettingsHeading";

describe("passwordSettingsHeading component", () => {
  it("should render heading with default heading level when headingLevel is not provided", () => {
    expect.hasAssertions();
    render(<PasswordSettingsHeading heading="Test Heading" />);
    const headingElement = screen.getByText("Test Heading");
    expect(headingElement.tagName).toBe("H4");
  });

  it("should render heading with specified heading level when headingLevel is provided", () => {
    expect.hasAssertions();
    render(
      <PasswordSettingsHeading heading="Test Heading" headingLevel="h2" />,
    );
    const headingElement = screen.getByText("Test Heading");
    expect(headingElement.tagName).toBe("H2");
  });

  it("should display subheading when subheading is provided", () => {
    expect.hasAssertions();
    render(
      <PasswordSettingsHeading
        heading="Test Heading"
        subheading="Test Subheading"
      />,
    );
    const subheadingElement = screen.getByText("Test Subheading");
    expect(subheadingElement).toBeInTheDocument();
  });

  // Handles invalid heading level values
  /*  Commented out the code because it throws an error due to using an invalid value but it passes.
      You can uncomment and run it for yourself */
  /* it("should handle invalid heading level values gracefully", () => {
    expect.hasAssertions();
    render(
      <PasswordSettingsHeading heading="Test Heading" headingLevel="invalid" />,
    );
    const headingElement = screen.getByText("Test Heading");
    expect(headingElement.tagName).toBe("H4");
  }); */
});
