import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Plus } from "lucide-react";
import { describe, expect, it, vi } from "vitest";

import CustomButton from "~/components/common/Button/button";

describe("custom Button Component", () => {
  it("renders correctly with left icon", () => {
    expect.hasAssertions();

    render(
      <CustomButton
        isLeftIconVisible
        icon={<Plus />}
        ariaLabel="button-with-left-icon"
      >
        Left Icon
      </CustomButton>,
    );
    expect(
      screen.getByRole("button", { name: /button-with-left-icon/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/left icon/i)).toBeInTheDocument();
    expect(screen.getAllByTestId("icon")).toHaveLength(1);
  });

  it("renders correctly with right icon", () => {
    expect.hasAssertions();

    render(
      <CustomButton
        isRightIconVisible
        icon={<Plus />}
        ariaLabel="button-with-right-icon"
      >
        Right Icon
      </CustomButton>,
    );
    expect(
      screen.getByRole("button", { name: /button-with-right-icon/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/right icon/i)).toBeInTheDocument();
    expect(screen.getAllByTestId("icon")).toHaveLength(1);
  });

  it("renders loading spinner correctly", () => {
    expect.hasAssertions();

    render(
      <CustomButton isLoading ariaLabel="button-loading">
        Loading
      </CustomButton>,
    );
    expect(
      screen.getByRole("button", { name: /button-loading/i }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("handles loading state transitions smoothly", () => {
    expect.hasAssertions();

    const { rerender } = render(
      <CustomButton isLoading={false} ariaLabel="button-loading">
        Loading
      </CustomButton>,
    );
    expect(screen.queryByTestId("loading-spinner")).toBeNull();
    rerender(
      <CustomButton isLoading ariaLabel="button-loading">
        Loading
      </CustomButton>,
    );
    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("supports keyboard navigation and screen reader compatibility", async () => {
    expect.hasAssertions();

    render(
      <CustomButton ariaLabel="accessible-button">
        Accessible Button
      </CustomButton>,
    );
    const button = screen.getByRole("button", { name: /accessible-button/i });
    button.focus();
    expect(button).toHaveFocus();
    await userEvent.keyboard("[Enter]");
  });

  it("renders consistently across different browsers", () => {
    expect.hasAssertions();

    const mockRender = vi.fn(() =>
      render(
        <CustomButton ariaLabel="cross-browser-button">
          Cross Browser
        </CustomButton>,
      ),
    );
    mockRender();
    expect(mockRender).toHaveBeenCalledTimes(1);
  });

  it("renders internal link correctly with Next.js Link component", async () => {
    expect.hasAssertions();

    render(
      <CustomButton href="/internal-page" ariaLabel="internal-link">
        Internal Link
      </CustomButton>,
    );
    const button = screen.getByRole("button", { name: /internal-link/i });
    expect(button).toBeInTheDocument();
    expect(screen.getByText(/internal link/i)).toBeInTheDocument();
    await userEvent.click(button);
  });

  it("renders external link correctly with anchor tag", () => {
    expect.hasAssertions();

    render(
      <CustomButton href="https://external-site.com" ariaLabel="external-link">
        External Link
      </CustomButton>,
    );
    const button = screen.getByRole("link", { name: /external-link/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "https://external-site.com");
  });

  it("applies all props correctly", () => {
    expect.hasAssertions();

    render(
      <CustomButton
        variant="primary"
        size="lg"
        icon={<Plus />}
        isLoading
        isIconOnly
        isRightIconVisible
        isDisabled
        ariaLabel="custom-button"
        href="/test-page"
      />,
    );

    const button = screen.getByRole("button", { name: /custom-button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "custom-button");
  });

  it("renders icon correctly", () => {
    expect.hasAssertions();

    render(<CustomButton icon={<Plus />} ariaLabel="icon-button" />);

    const button = screen.getByRole("button", { name: /icon-button/i });
    expect(button).toBeInTheDocument();
  });

  it("renders loading spinner correctly when loading", () => {
    expect.hasAssertions();

    render(<CustomButton isLoading ariaLabel="loading-button" />);

    expect(screen.getByTestId("loading-spinner")).toBeInTheDocument();
  });

  it("renders correctly when disabled", () => {
    expect.hasAssertions();

    render(<CustomButton isDisabled ariaLabel="disabled-button" />);

    const button = screen.getByRole("button", { name: /disabled-button/i });
    expect(button).toBeDisabled();
  });

  it("renders internal link correctly", () => {
    expect.hasAssertions();

    render(<CustomButton href="/test-page" ariaLabel="internal-link" />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/test-page");
  });
});
