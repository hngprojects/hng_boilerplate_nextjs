import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import MagicLinkSuccess from "./page";

type ModuleType = typeof import("./page");

vi.mock("./page", async () => {
  const actualModule: ModuleType = await vi.importActual("./page");
  return {
    default: actualModule.default,
    handleOpenEmail: vi.fn(),
  };
});

describe("magicLinkSuccess", () => {
  it("renders the success message", () => {
    expect.hasAssertions();
    render(<MagicLinkSuccess />);
    expect(screen.getByText("Sent! Check your email.")).toBeInTheDocument();
  });

  it("displays the check icon", () => {
    expect.hasAssertions();
    render(<MagicLinkSuccess />);
    const checkIcon = screen.getByTestId("check-icon");
    expect(checkIcon).toBeInTheDocument();
    expect(checkIcon).toHaveClass("h-20 w-20 text-center text-white");
  });

  it("shows the email address in the instructions", () => {
    expect.hasAssertions();
    render(<MagicLinkSuccess />);
    expect(screen.getByText(/talk2johnsnow@gmail.com/)).toBeInTheDocument();
  });

  it('renders the "Open Email" button', () => {
    expect.hasAssertions();
    render(<MagicLinkSuccess />);
    expect(
      screen.getByRole("button", { name: "Open Email" }),
    ).toBeInTheDocument();
  });
});
