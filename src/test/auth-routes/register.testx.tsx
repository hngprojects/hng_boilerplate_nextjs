import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import SignUp from "~/app/(auth-routes)/register/page"; // Adjust the path as needed

describe("signUp Component", () => {
  it("renders sign-up form", () => {
    expect.assertions(4);

    render(<SignUp />);

    expect(screen.getByText("Sign Up")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your fullname"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your email address"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your password"),
    ).toBeInTheDocument();
  });

  it("validates form inputs", async () => {
    expect.assertions(3);

    render(<SignUp />);

    fireEvent.change(screen.getByPlaceholderText("Enter your fullname"), {
      target: { value: "A" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your email address"), {
      target: { value: "a" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "a" },
    });

    fireEvent.click(screen.getByText("Create Account"));

    await expect(
      screen.findByText("Fullname must be at least 2 characters."),
    ).resolves.toBeInTheDocument();
    await expect(
      screen.findByText("Email must be at least 2 characters."),
    ).resolves.toBeInTheDocument();
    await expect(
      screen.findByText("Password must be at least 2 characters."),
    ).resolves.toBeInTheDocument();
  });

  it("opens dialog on form submit", async () => {
    expect.assertions(1);

    render(<SignUp />);

    fireEvent.change(screen.getByPlaceholderText("Enter your fullname"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your email address"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText("Create Account"));

    await expect(
      screen.findByText("Choose your sign-up method:"),
    ).resolves.toBeInTheDocument();
  });
});
