import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Main from "~/components/layouts/Legal/Terms&Conditions/Main";

vi.mock("~/components/layouts/Legal/Terms&Conditions/UserObligations", () => ({
  default: () => <div data-testid="mock-user-obligations">UserObligations</div>,
}));
vi.mock("~/components/layouts/Legal/Terms&Conditions/AcceptableUse", () => ({
  default: () => <div data-testid="mock-acceptable-use">AcceptableUse</div>,
}));
vi.mock(
  "~/components/layouts/Legal/Terms&Conditions/IntellectualProperty",
  () => ({
    default: () => (
      <div data-testid="mock-intellectual-property">IntellectualProperty</div>
    ),
  }),
);
vi.mock("~/components/layouts/Legal/Terms&Conditions/Disclaimer", () => ({
  default: () => <div data-testid="mock-disclaimer">Disclaimer</div>,
}));
vi.mock("~/components/layouts/Legal/Terms&Conditions/GoverningLaws", () => ({
  default: () => <div data-testid="mock-governing-laws">GoverningLaws</div>,
}));
vi.mock("~/components/layouts/Legal/Terms&Conditions/TableOfContents", () => ({
  default: () => (
    <div data-testid="mock-table-of-contents">TableOfContents</div>
  ),
}));
vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} data-testid="mock-link">
      {children}
    </a>
  ),
}));

describe("main component", () => {
  it("renders first set of sub-components", () => {
    expect.assertions(3);
    render(<Main />);
    expect(screen.getByTestId("mock-user-obligations")).toBeInTheDocument();
    expect(screen.getByTestId("mock-acceptable-use")).toBeInTheDocument();
    expect(
      screen.getByTestId("mock-intellectual-property"),
    ).toBeInTheDocument();
  });

  it("renders second set of sub-components", () => {
    expect.assertions(3);
    render(<Main />);
    expect(screen.getByTestId("mock-disclaimer")).toBeInTheDocument();
    expect(screen.getByTestId("mock-governing-laws")).toBeInTheDocument();
    expect(screen.getByTestId("mock-table-of-contents")).toBeInTheDocument();
  });

  it("renders the Introduction section", () => {
    expect.assertions(2);
    render(<Main />);
    expect(screen.getByText("Introduction")).toBeInTheDocument();
    expect(screen.getByText(/Welcome to Boilerplate Hng/)).toBeInTheDocument();
  });

  it("renders the Changes to Terms section", () => {
    expect.assertions(2);
    render(<Main />);
    expect(screen.getByText("Changes to Terms")).toBeInTheDocument();
    expect(
      screen.getByText(/We reserve the right to modify/),
    ).toBeInTheDocument();
  });

  it("renders the Contact Information section", () => {
    expect.assertions(2);
    render(<Main />);
    expect(screen.getByText("Contact Information")).toBeInTheDocument();
    expect(
      screen.getByText(/For any questions or concerns/),
    ).toBeInTheDocument();
  });

  it("renders the Last Updated section", () => {
    expect.assertions(2);
    render(<Main />);
    expect(screen.getByText("Last Updated")).toBeInTheDocument();
    expect(
      screen.getByText(/These Terms and Conditions were last updated/),
    ).toBeInTheDocument();
  });

  it("renders the correct last updated date", () => {
    expect.assertions(1);
    render(<Main />);
    const expectedDate = "20th July, 2024";
    expect(screen.getByText(new RegExp(expectedDate))).toBeInTheDocument();
  });

  it("renders the Privacy Policy link", () => {
    expect.assertions(2);
    render(<Main />);
    const link = screen.getByTestId("mock-link");
    expect(link).toHaveTextContent("Privacy Policy page.");
    expect(link).toHaveAttribute("href", "/legal/privacy-policy");
  });
});
