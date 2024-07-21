import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Form } from "./page";

describe("form", () => {
  const handleSubmit = vi.fn();

  it("should render the form fields", () => {
    expect.hasAssertions();
    render(<Form onSubmit={handleSubmit} />);

    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Create Account" }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText("Full Name")).toHaveAttribute("type", "text");
    expect(screen.getByLabelText("Email Address")).toHaveAttribute(
      "type",
      "email",
    );
    expect(screen.getByLabelText("Password")).toHaveAttribute(
      "type",
      "password",
    );
  });

  it("should not submit the form if required fields are empty", async () => {
    expect.hasAssertions();
    render(<Form onSubmit={handleSubmit} />);

    await userEvent.click(
      screen.getByRole("button", { name: "Create Account" }),
    );
    expect(handleSubmit).not.toHaveBeenCalled();
  });

  it("should submit the form with correct values", async () => {
    expect.hasAssertions();
    render(<Form onSubmit={handleSubmit} />);

    await userEvent.type(screen.getByLabelText("Full Name"), "John Doe");
    await userEvent.type(
      screen.getByLabelText("Email Address"),
      "johndoe@example.com",
    );
    await userEvent.type(screen.getByLabelText("Password"), "securepassword");
    await userEvent.click(
      screen.getByRole("button", { name: "Create Account" }),
    );

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith({
      fullName: "John Doe",
      email: "johndoe@example.com",
      password: "securepassword",
    });
  });
});
