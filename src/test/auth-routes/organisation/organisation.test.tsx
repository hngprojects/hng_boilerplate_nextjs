// Organisation.test.tsx
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { z } from "zod";

import Organisation from "~/app/(auth-routes)/register/organisation/page"; // Adjust the import based on your file structure

// Mocking the formSchema
const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

describe("organisation Component", () => {
  it("renders the form and handles submission correctly", async () => {
    const { getByPlaceholderText, getByText } = render(<Organisation />);

    // Check if the form fields are rendered
    expect(getByPlaceholderText("Enter your company name")).toBeInTheDocument();
    expect(
      getByPlaceholderText("Enter your email address"),
    ).toBeInTheDocument();
    expect(
      getByPlaceholderText("Enter your company address"),
    ).toBeInTheDocument();

    // Simulate form input
    fireEvent.change(getByPlaceholderText("Enter your company name"), {
      target: { value: "My Company" },
    });
    fireEvent.change(getByPlaceholderText("Enter your email address"), {
      target: { value: "company@example.com" },
    });
    fireEvent.change(getByPlaceholderText("Enter your company address"), {
      target: { value: "123 Main St" },
    });

    // Simulate form submission
    fireEvent.submit(getByText("Create Account"));
  });
});
