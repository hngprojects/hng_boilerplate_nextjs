// contact.test.tsx
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Contact from "./page"; // Adjust the import based on your actual file structure

describe("contact Page tests", () => {
  // Test for rendering the Contact Us form and content card
  it("should render the Contact Us form and content card correctly", () => {
    expect.assertions(4); // Ensure the test has at least 4 assertions
    render(<Contact />);

    // Check for the Contact Us form
    expect(screen.getByRole("form")).toBeInTheDocument();

    // Check for the Contact Us page heading
    expect(screen.getByText("Contact Our Team")).toBeInTheDocument();

    // Check for the business hours section
    expect(screen.getByText(/business hours/i)).toBeInTheDocument();

    // Check for the FAQ section
    expect(screen.getByRole("heading", { name: /faq/i })).toBeInTheDocument();
  });

  // Test for form validation
  it("should validate the form inputs correctly", async () => {
    expect.assertions(1); // Ensure the test has at least 1 assertion
    render(<Contact />);

    // Interact with form elements
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "invalid-email" },
    });
    fireEvent.submit(screen.getByRole("form"));

    // Check if validation error is shown
    await waitFor(() => {
      expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
    });
  });

  // Test for form API integration
  it("should handle API integration correctly", async () => {
    expect.assertions(1); // Ensure the test has at least 1 assertion

    // Create a fetch mock within the test case
    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    // Set up fetch mock to resolve with a success response
    fetchMock.mockResolvedValueOnce(
      new Response(
        JSON.stringify({ message: "Form submitted successfully!" }),
        {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/json" },
        },
      ),
    );

    render(<Contact />);

    // Fill the form with valid data and submit
    fireEvent.change(screen.getByPlaceholderText("Enter full name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter email address"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter phone number"), {
      target: { value: "+1234567890" },
    });
    fireEvent.change(screen.getByPlaceholderText("Message..."), {
      target: { value: "Hello!" },
    });
    fireEvent.click(screen.getByText("Send"));

    // Wait for fetch to be called and verify the request
    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        "https://test.gracefilledcollege.com/public/api/v1/contact",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "John Doe",
            email: "john@example.com",
            phone: "+1234567890",
            message: "Hello!",
          }),
        }),
      );
    });
  });

  // Test for responsiveness
  it("should be responsive", () => {
    expect.assertions(2); // Ensure the test has at least 2 assertions
    render(<Contact />);

    // Check mobile responsiveness
    window.innerWidth = 320; // Mobile width
    window.dispatchEvent(new Event("resize"));
    expect(screen.getByRole("form")).toBeInTheDocument();

    // Check desktop responsiveness
    window.innerWidth = 1024; // Desktop width
    window.dispatchEvent(new Event("resize"));
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});
