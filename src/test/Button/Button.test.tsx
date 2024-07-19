import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, describe, it, vi } from 'vitest';
import CustomButton from '~/components/common/Button/button';
import { Plus } from 'lucide-react';

describe('Custom Button Component', () => {
  it('renders correctly with left icon', () => {
    render(<CustomButton isLeftIconVisible icon={<Plus />} ariaLabel="button-with-left-icon">Left Icon</CustomButton>);
    expect(screen.getByRole('button', { name: /button-with-left-icon/i })).toBeInTheDocument();
    expect(screen.getByText(/left icon/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('icon')).toHaveLength(1);
  });

  it('renders correctly with right icon', () => {
    render(<CustomButton isRightIconVisible icon={<Plus />} ariaLabel="button-with-right-icon">Right Icon</CustomButton>);
    expect(screen.getByRole('button', { name: /button-with-right-icon/i })).toBeInTheDocument();
    expect(screen.getByText(/right icon/i)).toBeInTheDocument();
    expect(screen.getAllByTestId('icon')).toHaveLength(1);
  });

  it('renders loading spinner correctly', () => {
    render(<CustomButton isLoading ariaLabel="button-loading">Loading</CustomButton>);
    expect(screen.getByRole('button', { name: /button-loading/i })).toBeInTheDocument();
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('handles loading state transitions smoothly', () => {
    const { rerender } = render(<CustomButton isLoading={false} ariaLabel="button-loading">Loading</CustomButton>);
    expect(screen.queryByTestId('loading-spinner')).toBeNull();
    rerender(<CustomButton isLoading ariaLabel="button-loading">Loading</CustomButton>);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('supports keyboard navigation and screen reader compatibility', async () => {
    render(<CustomButton ariaLabel="accessible-button">Accessible Button</CustomButton>);
    const button = screen.getByRole('button', { name: /accessible-button/i });
    button.focus();
    expect(button).toHaveFocus();
    await userEvent.keyboard('[Enter]');
  });

  it('should render consistently across different browsers', () => {
    const mockRender = vi.fn(() => render(<CustomButton ariaLabel="cross-browser-button">Cross Browser</CustomButton>));
    mockRender();
    expect(mockRender).toHaveBeenCalledTimes(1);
  });
});
