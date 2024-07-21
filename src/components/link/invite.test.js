// tests/InviteLink.test.jsx

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, test, beforeEach, vi } from 'vitest';
import InviteLink from './invitelink'; 

// Mocking the fetch API
global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ url:'https://dummyjson.com/c/cbbb-72ae-4ab0-b987'}]),
  })
);

// Mocking the clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: vi.fn().mockImplementation(() => Promise.resolve()),
  },
});

describe('InviteLink Component', () => {
  beforeEach(() => {
    fetch.mockClear();
    navigator.clipboard.writeText.mockClear();
  });

  test('renders Invite Link component', () => {
    render(<InviteLink />);
    expect(screen.getByText('Invite Link')).toBeInTheDocument();
    expect(screen.getByText('This provides a unique URL that allows anyone to join your workspace')).toBeInTheDocument();
  });

  test('toggles the invite link feature', async () => {
    render(<InviteLink />);
    const checkbox = screen.getByRole('checkbox');

    // Initial state should be unchecked
    expect(checkbox).not.toBeChecked();

    // Click to enable
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    // Check if link input is displayed
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('fetches and displays the link on toggle and refresh', async () => {
    render(<InviteLink />);
    const checkbox = screen.getByRole('checkbox');

    // Enable the invite link feature
    fireEvent.click(checkbox);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    // Check if the link is displayed
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('https://dummyjson.com/c/cbbb-72ae-4ab0-b987');

    // Click the refresh icon
    const refreshIcon = screen.getByTestId('refresh-icon');
    fireEvent.click(refreshIcon);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(2));
    expect(input).toHaveValue('https://dummyjson.com/c/cbbb-72ae-4ab0-b987');
  });

  test('copies the link to the clipboard', async () => {
    render(<InviteLink />);
    const checkbox = screen.getByRole('checkbox');

    // Enable the invite link feature
    fireEvent.click(checkbox);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));

    // Click the copy button
    const copyButton = screen.getByText(/CopyLink/i);
    fireEvent.click(copyButton);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('https://dummyjson.com/c/cbbb-72ae-4ab0-b987');
  });
});
