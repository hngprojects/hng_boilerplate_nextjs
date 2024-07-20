import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { vi, describe, test, beforeEach, expect, Mock } from 'vitest';
import '@testing-library/jest-dom';
import AdditionalQuestionsForm from './AdditionalQuestionsForm';

// Mock the fetch API
global.fetch = vi.fn() as Mock;

describe('AdditionalQuestionsForm Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Validation Tests
  test('should display error messages for empty required fields', async () => {
    render(<AdditionalQuestionsForm />);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.click(submitButton);

    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/Message is required/i)).toBeInTheDocument();
  });

  test('should display error message for invalid email', async () => {
    render(<AdditionalQuestionsForm />);
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByText(/submit/i);

    fireEvent.change(emailInput, { target: { value: 'exampleemail.' } });

    fireEvent.click(submitButton);
    const errorMessage = await screen.findByText((content, element) => {
      return element?.tagName?.toLowerCase() === 'span' && /email is invalid/i.test(content);
    });

    expect(errorMessage).toBeInTheDocument();
  });

  // API Integration Tests
  test('should display success message on successful form submission', async () => {
    (fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Success' }),
    } as Response);
    
    render(<AdditionalQuestionsForm />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Your question has been submitted successfully/i)).toBeInTheDocument();
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test('should display error message on failed form submission', async () => {
    (fetch as Mock).mockResolvedValueOnce({ ok: false } as Response);

    render(<AdditionalQuestionsForm />);
    const nameInput = screen.getByLabelText(/name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const messageInput = screen.getByLabelText(/message/i);
    const submitButton = screen.getByRole('button', { name: /submit/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'This is a test message' } });

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/There was an error submitting your question/i)).toBeInTheDocument();
    });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  // Responsiveness Tests
  test('should render correctly on mobile devices', () => {
    window.innerWidth = 320;
    render(<AdditionalQuestionsForm />);
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveClass('py-[.75rem] ');
  });

  test('should render correctly on desktop devices', () => {
    window.innerWidth = 1024;
    render(<AdditionalQuestionsForm />);
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveClass('md:py-[1.25rem]');
  });
});
