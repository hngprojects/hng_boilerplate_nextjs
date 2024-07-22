import { fireEvent, render, screen } from "@testing-library/react";
import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import Navbar from "../components/layouts/Navbar/Navbar";

import "@testing-library/jest-dom";

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

describe("navbar component", () => {
  // afterEach(() => {
  // });

  it("renders desktop navbar correctly when user is not signed in", () => {
    expect.assertions(5);

    (useSession as vi.Mock).mockReturnValue({ data: undefined });
    (usePathname as vi.Mock).mockReturnValue("/home");

    render(<Navbar />);

    const headings = screen.getAllByText("HNG Boilerplate");
    expect(headings[0]).toBeInTheDocument();

    vi.clearAllMocks();

    expect(screen.getByText("Home")).toHaveClass("text-primary");
    expect(screen.getByText("Pricing")).toHaveClass("text-neutral-dark-2");
    expect(screen.getByText("Career")).toHaveClass("text-neutral-dark-2");

    expect(screen.getByText("Log in")).toBeInTheDocument();
  });

  it("renders desktop navbar correctly when user is signed in", () => {
    expect.assertions(1);

    (useSession as vi.Mock).mockReturnValue({
      data: { user: { name: "User" } },
    });
    (usePathname as vi.Mock).mockReturnValue("/home");

    render(<Navbar />);

    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  it("renders tablet navbar correctly when user is not signed in", () => {
    expect.assertions(1);

    (useSession as vi.Mock).mockReturnValue({ data: undefined });
    (usePathname as vi.Mock).mockReturnValue("/home");

    render(<Navbar />);

    const headings = screen.getAllByText("HNG Boilerplate");
    expect(headings[0]).toBeInTheDocument();
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

    (useSession as vi.Mock).mockReturnValue({ data: undefined });
    (usePathname as vi.Mock).mockReturnValue("/home");

    render(<Navbar />);

    const headings = screen.getAllByText("HNG Boilerplate");
    expect(headings[0]).toBeInTheDocument();
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

    (useSession as vi.Mock).mockReturnValue({ data: undefined });
    render(<Navbar />);

    const loginButton = screen.getByText("Log in");
    fireEvent.click(loginButton);

    expect(signIn).toHaveBeenCalledWith();
  });
});
