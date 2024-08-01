import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import AdditionalInquiriesForm from "./AdditionalInquiriesForm";
import * as formSubmitHelper from "./formSubmitHelper";

describe("additionalQuestionsForm Tests", () => {
  beforeEach(() => {
    // Clear mocks if any
    vi.clearAllMocks();
  });

  it("should display error messages for empty required fields", async () => {
    expect.assertions(3);
    render(<AdditionalInquiriesForm />);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
      expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    });
  });

  it("should display error message for invalid email", async () => {
    expect.assertions(1);
    render(<AdditionalInquiriesForm />);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText(/email is invalid/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should display success message on successful form submission", async () => {
    expect.hasAssertions();
    // Mock the submitForm function to return a successful response
    vi.spyOn(formSubmitHelper, "submitForm").mockResolvedValue({
      success: true,
      message: "Your question has been submitted successfully",
    });

    expect.assertions(1);
    render(<AdditionalInquiriesForm />);
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
      const successMessage = screen.getByText(
        "Your question has been submitted successfully",
      );
      expect(successMessage).toBeInTheDocument();
    });
  });

  it("should display error message on failed form submission", async () => {
    expect.hasAssertions();
    // Mock the submitForm function to return a failed response
    vi.spyOn(formSubmitHelper, "submitForm").mockResolvedValue({
      success: false,
      message: "There was an error submitting your question. Please try again.",
    });

    expect.assertions(1);
    render(<AdditionalInquiriesForm />);
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
      const errorMessage = screen.getByText(
        "There was an error submitting your question. Please try again.",
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
