import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import DeleteModal from '../components/common/DeleteModal'; 
import { useDeleteModal } from '~/hooks/useDeleteModal';

vi.mock('~/hooks/useDeleteModal', () => ({
  useDeleteModal: vi.fn(),
}));

describe('DeleteModal', () => {
  test('should display the modal correctly when visible', () => {
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: true,
      closeDeleteModal: vi.fn(),
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal />);
    const modalContainer = screen.getByTestId('modal-container');
    expect(modalContainer).toBeInTheDocument();
  });

  test('should not display the modal when not visible', () => {
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: false,
      closeDeleteModal: vi.fn(),
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal />);
    const modalContainer = screen.queryByTestId('modal-container');
    expect(modalContainer).toBeNull();
  });

  test('should have correct alignment for heading, message, and buttons', () => {
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: true,
      closeDeleteModal: vi.fn(),
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal />);
    const modalContent = screen.getByTestId('modal-content');
    expect(modalContent).toHaveClass('absolute lg:left-[32.2%] lg:top-[425px] lg:w-[512px]');
  });

  test('should be responsive across all screens', () => {
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: true,
      closeDeleteModal: vi.fn(),
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal />);
    const modalContent = screen.getByTestId('modal-content');
    expect(modalContent).toHaveClass('absolute lg:left-[32.2%]');
  });

  test('should close the modal when clicking Delete button', () => {
    const handleClose = vi.fn();
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: true,
      closeDeleteModal: handleClose,
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal />);
    const deleteButton = screen.getByText('Delete');
    fireEvent.click(deleteButton);
    expect(handleClose).toHaveBeenCalled();
  });

  test('should close the modal when clicking Cancel button', () => {
    const handleClose = vi.fn();
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: true,
      closeDeleteModal: handleClose,
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal />);
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    expect(handleClose).toHaveBeenCalled();
  });

  test('should close the modal when clicking outside of the modal content', () => {
    const handleClose = vi.fn();
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: true,
      closeDeleteModal: handleClose,
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal />);
    fireEvent.mouseDown(document.body);
    expect(handleClose).toHaveBeenCalled();
  });

  test('should have correct overlay opacity', () => {
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: true,
      closeDeleteModal: vi.fn(),
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal />);
    const overlay = screen.getByTestId('modal-container');
    expect(overlay).toHaveStyle('opacity: 25%');
  });
});
