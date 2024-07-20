import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, Mock, vi } from "vitest";

import AdditionalQuestionsForm from "./AdditionalQuestionsForm";

// Mock the fetch API
global.fetch = vi.fn() as Mock;

describe("additionalQuestionsForm Tests", () => {
  // eslint-disable-next-line vitest/no-hooks
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Validation Tests
  it("should display error messages for empty required fields", () => {
    expect.assertions(3);
    render(<AdditionalQuestionsForm />);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.click(submitButton);

    expect(screen.getByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
  });

  it("should display error message for invalid email", async () => {
    expect.assertions(1);
    render(<AdditionalQuestionsForm />);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByText(/submit/i);

    fireEvent.change(emailInput, { target: { value: "exampleemail." } });

    fireEvent.click(submitButton);
    const errorMessage = await screen.findByText((content, element) => {
      return (
        element?.tagName?.toLowerCase() === "span" &&
        /email is invalid/i.test(content)
      );
    });

    expect(errorMessage).toBeInTheDocument();
  });

  // API Integration Tests
  it("should display success message on successful form submission", async () => {
    expect.assertions(2);
    (fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: "Success" }),
    } as Response);

    render(<AdditionalQuestionsForm />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "This is a test message" },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/your question has been submitted successfully/i),
      ).toBeInTheDocument();
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("should display error message on failed form submission", async () => {
    expect.assertions(2);
    (fetch as Mock).mockResolvedValueOnce({ ok: false } as Response);

    render(<AdditionalQuestionsForm />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(messageInput, {
      target: { value: "This is a test message" },
    });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText(/there was an error submitting your question/i),
      ).toBeInTheDocument();
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  // Responsiveness Tests
  it("should render correctly on mobile devices", () => {
    expect.assertions(1);
    window.innerWidth = 320;
    render(<AdditionalQuestionsForm />);
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveClass("py-[.75rem]");
  });

  it("should render correctly on desktop devices", () => {
    expect.assertions(1);
    window.innerWidth = 1024;
    render(<AdditionalQuestionsForm />);
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveClass("md:py-[1.25rem]");
  });
});
