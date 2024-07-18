import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { vi } from 'vitest';
import DeleteModal from '~/components/common/DeleteModal';
import { useDeleteModal } from '~/hooks/useDeleteModal';

vi.mock('~/hooks/useDeleteModal');

describe('DeleteModal', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('should display the modal correctly', () => {
    (useDeleteModal as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ isVisible: true, closeDeleteModal: vi.fn() });

    render(<DeleteModal />);

    expect(screen.getByText('Delete Member')).toBeInTheDocument();
    expect(screen.getByText('Are you sure you want to delete Chad Bosewick? All of your data will be permanently removed. This action cannot be undone')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('should close the modal when clicking Cancel button', () => {
    const closeDeleteModal = vi.fn();
    (useDeleteModal as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ isVisible: true, closeDeleteModal });

    render(<DeleteModal />);

    fireEvent.click(screen.getByText('Cancel'));

    expect(closeDeleteModal).toHaveBeenCalled();
  });

  it('should close the modal when clicking Delete button', () => {
    const closeDeleteModal = vi.fn();
    (useDeleteModal as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ isVisible: true, closeDeleteModal });

    render(<DeleteModal />);

    fireEvent.click(screen.getByText('Delete'));

    expect(closeDeleteModal).toHaveBeenCalled();
  });

  it('should close the modal when clicking outside the modal', () => {
    const closeDeleteModal = vi.fn();
    (useDeleteModal as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ isVisible: true, closeDeleteModal });

    render(<DeleteModal />);

    fireEvent.click(screen.getByRole('main'));

    expect(closeDeleteModal).toHaveBeenCalled();
  });

  it('should apply overlay opacity correctly', () => {
    (useDeleteModal as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ isVisible: true, closeDeleteModal: vi.fn() });

    render(<DeleteModal />);

    const overlay = screen.getByRole('main');
    expect(overlay).toHaveClass('bg-opacity-[15%]');
  });

  it('should not render the modal if it is not visible', () => {
    (useDeleteModal as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ isVisible: false, closeDeleteModal: vi.fn() });

    render(<DeleteModal />);

    expect(screen.queryByText('Delete Member')).not.toBeInTheDocument();
  });
});
