import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import DeactivateModal from "./DeactivateModal";

describe("DeactivateModal", () => {
  it("displays modal centered on the page", () => {
    render(
      <DeactivateModal
        isOpen={true}
        onClose={() => {}}
        onDeactivate={() => {}}
      />,
    );
    const modalOverlay = screen.getByRole("dialog").parentElement;
    const modal = screen.getByRole("dialog");

    // Check parent container styles
    expect(modalOverlay).toHaveClass("fixed");
    expect(modalOverlay).toHaveClass("inset-0");
    expect(modalOverlay).toHaveClass("flex");
    expect(modalOverlay).toHaveClass("items-center");
    expect(modalOverlay).toHaveClass("justify-center");
    expect(modalOverlay).toHaveClass("bg-opacity-50");
    expect(modalOverlay).toHaveClass("z-50");

    // Check modal styles
    expect(modal).toHaveClass("bg-[#FFFFFF]");
    expect(modal).toHaveClass("rounded-md");
    expect(modal).toHaveClass("shadow-lg");
    expect(modal).toHaveClass("p-6");
    expect(modal).toHaveClass("w-[424px]");
    expect(modal).toHaveClass("flex");
    expect(modal).toHaveClass("flex-col");
    expect(modal).toHaveClass("items-center");
    expect(modal).toHaveClass("relative");
  });

  it("does not render when closed", () => {
    render(
      <DeactivateModal
        isOpen={false}
        onClose={() => {}}
        onDeactivate={() => {}}
      />,
    );
    const modal = screen.queryByRole("dialog");
    expect(modal).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    render(
      <DeactivateModal
        isOpen={true}
        onClose={onClose}
        onDeactivate={() => {}}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /×/ }));
    expect(onClose).toHaveBeenCalled();
  });

  it("calls onDeactivate when Deactivate button is clicked", () => {
    const onDeactivate = vi.fn();
    render(
      <DeactivateModal
        isOpen={true}
        onClose={() => {}}
        onDeactivate={onDeactivate}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /Deactivate/ }));
    expect(onDeactivate).toHaveBeenCalled();
  });

  it("checks responsiveness of modal", () => {
    render(
      <DeactivateModal
        isOpen={true}
        onClose={() => {}}
        onDeactivate={() => {}}
      />,
    );
    const modal = screen.getByRole("dialog");
    expect(modal).toHaveClass("w-[424px]");
  });
});
