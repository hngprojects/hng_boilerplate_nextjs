import { fireEvent, render, screen } from "@testing-library/react";
import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { afterEach, describe, expect, it, vi } from "vitest";

import Navbar from "../components/layouts/Navbar/index";

import "@testing-library/jest-dom";

// Mock the necessary modules
vi.mock("next-auth/react", () => ({
  useSession: vi.fn(),
  signIn: vi.fn(),
}));

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

vi.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

// vi.mock("next/image", () => ({
//   __esModule: true,
//   default: ({ src, alt }: { src: string; alt: string }) => (
//     <img src={src} alt={alt} />
//   ),
// }));

describe("navbar component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders desktop navbar correctly when user is not signed in", () => {
    expect.assertions(5);

    (useSession as vi.Mock).mockReturnValue({ data: null });
    (usePathname as vi.Mock).mockReturnValue("/home");

    render(<Navbar />);

    // Assertions for logo and title
    const headings = screen.getAllByText("HNG Boilerplate");
    expect(headings[0]).toBeInTheDocument(); // Adjust based on your requirements

    // Assertions for navigation links
    expect(screen.getByText("Home")).toHaveClass("text-primary");
    expect(screen.getByText("Pricing")).toHaveClass("text-neutral-dark-2");
    expect(screen.getByText("Career")).toHaveClass("text-neutral-dark-2");

    // Additional assertion for login button
    expect(screen.getByText("Log in")).toBeInTheDocument();
  });

  it("renders desktop navbar correctly when user is signed in", () => {
    expect.assertions(1);

    (useSession as vi.Mock).mockReturnValue({
      data: { user: { name: "User" } },
    });
    (usePathname as vi.Mock).mockReturnValue("/home");

    render(<Navbar />);

    // Assertions for notification icon and profile button
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("renders tablet navbar correctly when user is not signed in", () => {
    expect.assertions(1);

    (useSession as vi.Mock).mockReturnValue({ data: null });
    (usePathname as vi.Mock).mockReturnValue("/home");

    render(<Navbar />);

    // Assertions for logo and title
    const headings = screen.getAllByText("HNG Boilerplate");
    expect(headings[0]).toBeInTheDocument(); // Adjust based on your requirements
  });

  it("renders tablet navbar correctly when user is signed in", () => {
    expect.assertions(0);

    (useSession as vi.Mock).mockReturnValue({
      data: { user: { name: "User" } },
    });
    (usePathname as vi.Mock).mockReturnValue("/home");

    render(<Navbar />);
  });

  it("renders mobile navbar correctly when user is not signed in", () => {
    expect.assertions(1);

    (useSession as vi.Mock).mockReturnValue({ data: null });
    (usePathname as vi.Mock).mockReturnValue("/home");

    render(<Navbar />);

    // Assertions for logo and title
    const headings = screen.getAllByText("HNG Boilerplate");
    expect(headings[0]).toBeInTheDocument(); // Adjust based on your requirements
  });

  it("renders mobile navbar correctly when user is signed in", () => {
    expect.assertions(0);

    (useSession as vi.Mock).mockReturnValue({
      data: { user: { name: "User" } },
    });
    (usePathname as vi.Mock).mockReturnValue("/home");

    render(<Navbar />);
  });

  it("calls signIn function when Log in button is clicked", () => {
    expect.assertions(1);

    (useSession as vi.Mock).mockReturnValue({ data: null });
    render(<Navbar />);

    const loginButton = screen.getByText("Log in");
    fireEvent.click(loginButton);

    expect(signIn).toHaveBeenCalledWith();
  });
});
