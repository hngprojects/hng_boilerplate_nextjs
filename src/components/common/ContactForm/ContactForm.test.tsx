import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import { describe, expect, it, vi } from "vitest";

import ContactForm from "./index"; // ContactForm section is in index.tsx in the parent directory

vi.mock("axios");

describe("contactForm", () => {
  it("renders correctly", () => {
    expect.assertions(5); // Declare the number of assertions expected
    render(<ContactForm />);
    expect(screen.getByPlaceholderText(/enter full name/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter email address/i),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter phone number/i),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/message.../i)).toBeInTheDocument();
    expect(screen.getByText(/send/i)).toBeInTheDocument();
  });

  it("shows validation errors for required fields", async () => {
    expect.assertions(3); // Declare the number of assertions expected
    render(<ContactForm />);
    fireEvent.click(screen.getByText(/send/i));

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it("shows invalid email error", async () => {
    expect.assertions(1); // Declare the number of assertions expected
    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText(/enter email address/i), {
      target: { value: "invalid-email" },
    });
    fireEvent.click(screen.getByText(/send/i));

    await waitFor(() => {
      expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
    });
  });

  it("submits form successfully", async () => {
    expect.assertions(1); // Declare the number of assertions expected
    (axios.post as vi.Mock).mockResolvedValue({ data: {} });

    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText(/enter full name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter email address/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/message.../i), {
      target: { value: "Hello" },
    });
    fireEvent.click(screen.getByText(/send/i));

    await waitFor(() => {
      expect(
        screen.getByText(/form submitted successfully!/i),
      ).toBeInTheDocument();
    });
  });

  it("shows error message when submission fails", async () => {
    expect.assertions(1); // Declare the number of assertions expected
    (axios.post as vi.Mock).mockRejectedValue(new Error("Submission failed"));

    render(<ContactForm />);
    fireEvent.change(screen.getByPlaceholderText(/enter full name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/enter email address/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/message.../i), {
      target: { value: "Hello" },
    });
    fireEvent.click(screen.getByText(/send/i));

    await waitFor(() => {
      expect(
        screen.getByText(/failed to submit the form/i),
      ).toBeInTheDocument();
    });
  });
});
