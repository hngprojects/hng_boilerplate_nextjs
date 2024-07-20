import Sidebar from ".";
import { fireEvent, render, screen, within } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { describe, expect, it, vi } from "vitest";

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

    expect(screen.getByText("LOGO")).toBeInTheDocument();

    const nav = screen.getByRole("navigation");
    const navItems = within(nav).getAllByRole("link");
    expect(navItems).toHaveLength(6);

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

    expect(screen.getByText("LOGO")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeVisible();

    fireEvent.click(toggleButton);
    expect(screen.getByText("LOGO")).toBeInTheDocument();

    fireEvent.click(screen.getByText("LOGO"));
    expect(screen.getByText("LOGO")).toBeInTheDocument();
  });

  it("opens sidebar when clicking on logo while closed", () => {
    expect.hasAssertions();
    vi.mocked(usePathname).mockReturnValue("/");
    render(<Sidebar />);

    fireEvent.click(screen.getByText("LOGO"));

    expect(screen.getByRole("navigation")).toBeVisible();
  });

  it("highlights the current page", () => {
    expect.hasAssertions();
    vi.mocked(usePathname).mockReturnValue("/about");
    render(<Sidebar />);

    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink.firstChild).not.toHaveClass("bg-primary");

    const aboutLink = screen.getByRole("link", { name: /about us/i });
    expect(aboutLink.firstChild).toHaveClass("bg-primary");
  });
});
