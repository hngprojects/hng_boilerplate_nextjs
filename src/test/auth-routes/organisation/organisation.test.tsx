// Organisation.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Organisation from "~/app/(auth-routes)/register/organisation/page"; // Adjust the path as needed

describe("organisation Component", () => {
  it("renders the form and handles submission correctly", () => {
    expect.assertions(3); // Ensure that at least 3 assertions are called

    render(<Organisation />);

    // Check if the form fields are rendered
    expect(
      screen.getByPlaceholderText("Enter your company name"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your email address"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your company address"),
    ).toBeInTheDocument();

    // Simulate form input
    fireEvent.change(screen.getByPlaceholderText("Enter your company name"), {
      target: { value: "My Company" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your email address"), {
      target: { value: "company@example.com" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Enter your company address"),
      {
        target: { value: "123 Main St" },
      },
    );

    // Simulate form submission
    fireEvent.submit(screen.getByText("Create Account"));
  });
});
