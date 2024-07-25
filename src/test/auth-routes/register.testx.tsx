import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";

import SignUp from "~/app/(auth-routes)/register/page";

describe("signUp Component", () => {
  it("renders sign-up form", async () => {
    expect.assertions(4);

    render(<SignUp />);

    await waitFor(() => {
      expect(screen.getByText("Sign Up")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText("Enter your fullname"),
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText("Enter your email address"),
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByPlaceholderText("Enter your password"),
      ).toBeInTheDocument();
    });
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

    await waitFor(() => {
      expect(
        screen.getByText("Fullname must be at least 2 characters."),
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText("Email must be at least 2 characters."),
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText("Password must be at least 2 characters."),
      ).toBeInTheDocument();
    });
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

    await waitFor(() => {
      expect(
        screen.getByText("Choose your sign-up method:"),
      ).toBeInTheDocument();
    });
  });
});
