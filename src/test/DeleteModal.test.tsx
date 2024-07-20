import { render, screen, fireEvent } from '@testing-library/react';
import DeleteModal from '../components/modals/DeleteModal'; 
import { useDeleteModal } from '~/hooks/useDeleteModal';

vi.mock('~/hooks/useDeleteModal', () => ({
  useDeleteModal: vi.fn(),
}));

describe('DeleteModal', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should display the modal correctly when visible', () => {
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: true,
      closeDeleteModal: vi.fn(),
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal closeDeleteModal={vi.fn()} />);
    const modalContainer = screen.getByTestId('modal-container');
    expect(modalContainer).toBeInTheDocument();
  });


  test('should have correct alignment for heading, message, and buttons', () => {
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: true,
      closeDeleteModal: vi.fn(),
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal closeDeleteModal={vi.fn()} />);
    const modalContent = screen.getByTestId('modal-content');
    expect(modalContent).toHaveClass('absolute lg:left-[32.2%] lg:top-[425px] lg:w-[512px] p-[24px]');
  });

  test('should be responsive across all screens', () => {
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: true,
      closeDeleteModal: vi.fn(),
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal closeDeleteModal={vi.fn()} />);
    const modalContent = screen.getByTestId('modal-content');
    expect(modalContent).toHaveClass('absolute lg:left-[32.2%] max-w-[1440px] lg:top-[425px] top-[300px] w-[95%] left-3 md:left-5 lg:right-0');
  });

  test('should close the modal when clicking Delete button', () => {
    const handleClose = vi.fn();
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: true,
      closeDeleteModal: handleClose,
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal closeDeleteModal={handleClose} />);
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
    render(<DeleteModal closeDeleteModal={handleClose} />);
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
    render(<DeleteModal closeDeleteModal={handleClose} />);
    const modalContainer = screen.getByTestId('modal-container');
    fireEvent.click(modalContainer);
    expect(handleClose).toHaveBeenCalled();
  });

  test('should have correct overlay opacity', () => {
    vi.mocked(useDeleteModal).mockReturnValue({
      isVisible: true,
      closeDeleteModal: vi.fn(),
      openDeleteModal: vi.fn(),
    });
    render(<DeleteModal closeDeleteModal={vi.fn()} />);
    const overlay = screen.getByTestId('modal-container');
    expect(overlay).toHaveStyle('opacity: 25%');
  });
});
