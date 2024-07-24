import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  AcceptableUsePolicy,
  Contents,
  Disclaimers,
  GoverningLaw,
  IntellectualPropertyRight,
  Obligations,
} from "~/components/layouts/Legal/Terms&Conditions/constants/constant";
import Main from "~/components/layouts/Legal/Terms&Conditions/Main";

describe("array mapped for the components", () => {
  it("has the expected number of items", () => {
    expect.hasAssertions();
    expect(AcceptableUsePolicy).toHaveLength(5),
      expect(Disclaimers).toHaveLength(4),
      expect(GoverningLaw).toHaveLength(3),
      expect(IntellectualPropertyRight).toHaveLength(4),
      expect(Obligations).toHaveLength(6);
  });

  it("has the expected number of items", () => {
    expect.hasAssertions();
    expect(Contents).toHaveLength(9);
  });

  it("items should have the right properties", () => {
    expect.hasAssertions();
    for (const value of AcceptableUsePolicy) {
      expect(value).toHaveProperty("title"),
        expect(value).toHaveProperty("value");
    }
    for (const value of Disclaimers) {
      expect(value).toHaveProperty("title"),
        expect(value).toHaveProperty("value");
    }
    for (const value of GoverningLaw) {
      expect(value).toHaveProperty("title"),
        expect(value).toHaveProperty("value");
    }
    for (const value of IntellectualPropertyRight) {
      expect(value).toHaveProperty("title"),
        expect(value).toHaveProperty("value");
    }
    for (const value of Obligations) {
      expect(value).toHaveProperty("title"),
        expect(value).toHaveProperty("value");
    }
  });

  it("content items should have the right properties", () => {
    expect.hasAssertions();
    for (const item of Contents) {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("text");
      expect(typeof item.id).toBe("string");
      expect(typeof item.text).toBe("string");
    }
  });

  it("contains expected sections", () => {
    expect.hasAssertions();
    const expectedSections = [
      "Introduction",
      "User Obligations",
      "Acceptable Use Policy",
      "Intellectual Property Right",
      "Disclaimer and Limitation of Liability",
      "Governing Law and Dispute Resolution",
      "Changes to Terms",
      "Contact Information",
      "Last Updated Date",
    ];

    for (const section of expectedSections) {
      expect(Contents.some((item) => item.text === section)).toBeTruthy();
    }
  });
});

describe("main component", () => {
  // Helper function to render the component before each test
  const renderComponent = () => render(<Main />);

  it("renders introduction and main sections", async () => {
    expect.hasAssertions();
    renderComponent();

    expect(
      screen.getByRole("heading", { name: /Introduction/ }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Welcome to Boilerplate Hng/)).toBeInTheDocument();
  });

  it("renders the changes to terms section", () => {
    expect.hasAssertions();
    renderComponent();

    expect(
      screen.getByRole("heading", { name: /Changes to Terms/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /We reserve the right to modify these Terms and Conditions/,
      ),
    ).toBeInTheDocument();
  });

  it("renders the last updated section", () => {
    expect.hasAssertions();
    renderComponent();

    expect(
      screen.getByRole("heading", { name: /Last Updated/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/These Terms and Conditions were last updated/),
    ).toBeInTheDocument();
    expect(screen.getByText(/20th July, 2024/)).toBeInTheDocument();
  });

  it("renders the contact information section", () => {
    expect.hasAssertions();
    renderComponent();

    expect(
      screen.getByRole("heading", { name: /Contact Information/ }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/For any questions or concerns regarding/),
    ).toBeInTheDocument();
  });

  it("renders the Privacy Policy link", () => {
    expect.hasAssertions();
    renderComponent();

    const link = screen.getByText("Privacy Policy page.");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/legal/privacy-policy");
  });

  it("should render all required components", () => {
    expect.hasAssertions();
    renderComponent();

    const userObligationsElement = screen.getByTestId("user-obligations");
    expect(userObligationsElement).toBeInTheDocument();

    const intellectualProperty = screen.getByTestId("intellectual-property");
    expect(intellectualProperty).toBeInTheDocument();

    const governingLaws = screen.getByTestId("governing-laws");
    expect(governingLaws).toBeInTheDocument();

    const disclaimer = screen.getByTestId("disclaimer");
    expect(disclaimer).toBeInTheDocument();

    const acceptableUse = screen.getByTestId("acceptable-use");
    expect(acceptableUse).toBeInTheDocument();
  });
});
