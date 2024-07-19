import { render, screen, fireEvent, within } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import UserForm from '~/components/layouts/WaitListForm/UserForm';

describe('UserForm Component', () => {
  it('renders the form with initial state', () => {
    render(<UserForm />);
    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByText(/Join the Waitlist/i)).toBeInTheDocument();
  });

  it('validates form inputs and shows error messages', () => {
    render(<UserForm />);
    fireEvent.click(screen.getByText(/Join the Waitlist/i));
    expect(screen.getByText(/Your name is required here/i)).toBeInTheDocument();
    // expect(screen.getByText(/Email is required/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'invalid-email' },
    });
    fireEvent.click(screen.getByText(/Join the Waitlist/i));
    expect(screen.getByText(/Please enter a valid email address/i)).toBeInTheDocument();
  });

  it('submits the form and shows success message on valid input', () => {
    render(<UserForm />);
    fireEvent.change(screen.getByLabelText(/Name/i), {
      target: { value: 'Meghan Grace' },
    });
    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'meghangrace@example.com' },
    });
    fireEvent.click(screen.getByText(/Join the Waitlist/i));
    expect(screen.queryByText(/Your name is required here/i)).toBeNull();
    expect(screen.queryByText(/Email is required/i)).toBeNull();
    expect(screen.queryByText(/Please enter a valid email address/i)).toBeNull();
    expect(screen.getByText(/You're all signed up!/i)).toBeInTheDocument();
  });

  it('renders form elements correctly for responsive design', () => {
    // Render the component
    render(<UserForm />);
    
    // Check default viewport size (usually for desktop)
    let nameInput = screen.getByLabelText(/Name/i);
    let emailInput = screen.getByLabelText(/Email/i);
    expect(nameInput).toHaveClass('w-full');
    expect(emailInput).toHaveClass('w-full');

    // Simulate a smaller viewport size (e.g., mobile)
    global.innerWidth = 480; // You may need to adjust this value based on your design
    global.dispatchEvent(new Event('resize'));

    // Re-render the component to reflect the resized viewport
    render(<UserForm />);
    
    // Check responsiveness again
    nameInput = screen.getByLabelText(/Name/i);
    emailInput = screen.getByLabelText(/Email/i);
    expect(nameInput).toHaveClass('w-full');
    expect(emailInput).toHaveClass('w-full');
  });
});
