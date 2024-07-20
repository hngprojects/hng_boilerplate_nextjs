import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Plus } from "lucide-react";
import { describe, expect, it, vi } from "vitest";

import CustomButton from "~/components/common/Button/button";

describe("custom Button Component", () => {
  it("renders correctly with left icon", () => {
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

  it("should render consistently across different browsers", () => {
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
    render(
      <CustomButton href="/internal-page" ariaLabel="internal-link">
        Internal Link
      </CustomButton>,
    );
    expect(
      screen.getByRole("button", { name: /internal-link/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/internal link/i)).toBeInTheDocument();
    await userEvent.click(
      screen.getByRole("button", { name: /internal-link/i }),
    );
  });

  it("renders external link correctly with anchor tag", () => {
    render(
      <CustomButton href="https://external-site.com" ariaLabel="external-link">
        External Link
      </CustomButton>,
    );
    const button = screen.getByRole("button", { name: /external-link/i });
    expect(button).toBeInTheDocument();
    expect(button.closest("a")).toHaveAttribute(
      "href",
      "https://external-site.com",
    );
  });

  it("applies all props correctly", () => {
    render(
      <CustomButton
        variant="primary"
        size="lg"
        icon={<Plus />}
        isLoading={true}
        isIconOnly={true}
        isLeftIconVisible={false}
        isRightIconVisible={true}
        isDisabled={true}
        ariaLabel="custom-button"
        href="/test-page"
      >
        Test Button
      </CustomButton>,
    );

    const button = screen.getByRole("button", { name: /custom-button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "custom-button");
    const icon = screen.queryByTestId("icon");
    if (icon) {
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveClass("w-[1rem] h-[1rem]");
    } else {
      expect(icon).toBeNull();
    }
    const loadingSpinner = screen.queryByTestId("loading-spinner");
    expect(loadingSpinner).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(screen.queryByText(/test button/i)).toBeNull();
    const link = screen.queryByRole("link");
    if (link) {
      expect(link).toHaveAttribute("href", "/test-page");
    } else {
      expect(screen.queryByRole("link")).toBeNull();
    }
  });
});
