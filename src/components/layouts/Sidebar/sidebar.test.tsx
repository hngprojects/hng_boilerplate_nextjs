import Sidebar from ".";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { describe, expect, it, vi } from "vitest";

// Mock the Button component
vi.mock("~/components/ui/button", () => ({
  Button: ({
    children,
    onClick,
  }: {
    children: React.ReactNode;
    onClick?: () => void;
  }) => <button onClick={onClick}>{children}</button>,
}));

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

describe("sidebar", () => {
  it("renders correctly", () => {
    expect.hasAssertions();
    vi.mocked(usePathname).mockReturnValue("/");
    render(<Sidebar />);

    // Check for logo
    expect(screen.getByText("LOGO")).toBeInTheDocument();

    // Check for main navigation items
    const nav = screen.getByRole("navigation");
    const navItems = within(nav).getAllByRole("link");
    expect(navItems).toHaveLength(6);

    // Check for specific navigation items
    const expectedItems = [
      "Home",
      "About us",
      "Job Listing",
      "Features Updates",
      "Blog",
      "Settings",
    ];
    for (const item of expectedItems) {
      expect(within(nav).getByText(item)).toBeInTheDocument();
    }
  });

  it("toggles sidebar open/close", () => {
    expect.hasAssertions();
    vi.mocked(usePathname).mockReturnValue("/");
    render(<Sidebar />);
    const toggleButton = screen.getByRole("button");

    // Sidebar starts open
    expect(screen.getByText("LOGO")).toBeInTheDocument();

    // Close sidebar
    fireEvent.click(toggleButton);
    expect(screen.queryByText("LOGO")).not.toBeInTheDocument();

    // Open sidebar again
    fireEvent.click(toggleButton);
    expect(screen.getByText("LOGO")).toBeInTheDocument();
  });

  it("highlights the current page", () => {
    expect.hasAssertions();
    vi.mocked(usePathname).mockReturnValue("/about");
    render(<Sidebar />);

    const homeLink = screen.getByRole("link", { name: /home/i });

    expect(homeLink.firstChild).not.toHaveClass("bg-primary_color");
    //console.debug(homeLink.outerHTML);

    const aboutLink = screen.getByRole("link", { name: /about us/i });
    //console.debug(aboutLink.outerHTML);

    expect(aboutLink.firstChild).toHaveClass("bg-primary_color");
  });
});
