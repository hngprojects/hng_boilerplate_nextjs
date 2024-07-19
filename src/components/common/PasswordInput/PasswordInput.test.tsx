import { screen, fireEvent } from '@testing-library/react';
import { render } from "../../../test/utils";
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { PasswordInput } from '.';

describe('PasswordInput Component', () => {
    const mockOnPasswordChange = vi.fn();

    const setup = () => {
        render(
            <PasswordInput
                password="testPassword"
                onPasswordChange={mockOnPasswordChange}
                name="password"
                id="password"
                placeholder="Enter your password"
            />
        );
    };

    it('should render the component', () => {
        setup();
        const input = screen.getByPlaceholderText('Enter your password');
        expect(input).toBeInTheDocument();
    });

    it('should toggle password visibility', () => {
        setup();
        const toggleButton = screen.getByRole('button', { name: /show password/i });
        const input = screen.getByPlaceholderText('Enter your password');

        // Password should be hidden initially
        expect(input).toHaveAttribute('type', 'password');

        // Click to show the password
        fireEvent.click(toggleButton);
        expect(input).toHaveAttribute('type', 'text');
        expect(toggleButton).toHaveAttribute('aria-label', 'Hide password');

        // Click to hide the password again
        fireEvent.click(toggleButton);
        expect(input).toHaveAttribute('type', 'password');
        expect(toggleButton).toHaveAttribute('aria-label', 'Show password');
    });

    it('should call onPasswordChange when input changes', () => {
        setup();
        const input = screen.getByPlaceholderText('Enter your password');

        fireEvent.change(input, { target: { value: 'newPassword' } });
        expect(mockOnPasswordChange).toHaveBeenCalledTimes(1);
        expect(mockOnPasswordChange).toHaveBeenCalledWith('newPassword');
    });

    it('should have appropriate ARIA roles and labels for accessibility', () => {
        setup();
        const toggleButton = screen.getByRole('button', { name: /show password/i });
        expect(toggleButton).toBeInTheDocument();
        expect(toggleButton).toHaveAttribute('aria-label', 'Show password');
    });
});
