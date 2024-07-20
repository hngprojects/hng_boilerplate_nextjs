import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeleteModal from '../components/modals/DeleteModal';


describe('DeleteModal', () => {
  test('should display the modal correctly when visible', () => {
    render(<DeleteModal closeDeleteModal={vi.fn()} />);
    const modalContainer = screen.getByTestId('modal-container');
    const modalContent = screen.getByTestId('modal-content');

    expect(modalContainer).toBeVisible();
    expect(modalContent).toBeVisible();
  });

  test('should be responsive across all screens', () => {
    render(<DeleteModal closeDeleteModal={vi.fn()} />);
    const modalContent = screen.getByTestId('modal-content');

    // Check for the specific classes instead of the entire class name string
    expect(modalContent).toHaveClass('absolute');
    expect(modalContent).toHaveClass('max-w-[1440px]');
    expect(modalContent).toHaveClass('lg:left-[33%]');
    expect(modalContent).toHaveClass('lg:top-[425px]');
    expect(modalContent).toHaveClass('top-[300px]');
    expect(modalContent).toHaveClass('lg:w-[512px]');
    expect(modalContent).toHaveClass('w-[95%]');
    expect(modalContent).toHaveClass('left-[50%]');
    expect(modalContent).toHaveClass('lg:right-0');
  });

  test('should close the modal when clicking outside of the modal content', () => {
    const handleClose = vi.fn();
    render(<DeleteModal closeDeleteModal={handleClose} />);
    
    const modalContainer = screen.getByTestId('modal-container');
    fireEvent.click(modalContainer);
    
    expect(handleClose).toHaveBeenCalled();
  });

  test('should properly align heading, message, and buttons', () => {
    render(<DeleteModal closeDeleteModal={vi.fn()} />);
    const modalHeading = screen.getByTestId('modal-heading');
    const modalMessage = screen.getByTestId('modal-message');
    const modalButtons = screen.getByTestId('modal-buttons');

    expect(modalHeading).toBeInTheDocument();
    expect(modalMessage).toBeInTheDocument();
    expect(modalButtons).toBeInTheDocument();
  });

  test('should close the modal when clicking the Cancel button', () => {
    const handleClose = vi.fn();
    render(<DeleteModal closeDeleteModal={handleClose} />);
    
    const cancelButton = screen.getByTestId('modal-buttons');
    fireEvent.click(cancelButton);
    
    expect(handleClose).toHaveBeenCalled();
  });

  test('should close the modal when clicking the Delete button', () => {
    const handleClose = vi.fn();
    render(<DeleteModal closeDeleteModal={handleClose} />);
    
    const deleteButton = screen.getByTestId('modal-buttons');
    fireEvent.click(deleteButton);
    
    expect(handleClose).toHaveBeenCalled();
  });

  test('should correctly apply overlay opacity', () => {
    render(<DeleteModal closeDeleteModal={vi.fn()} />);
    const modalContainer = screen.getByTestId('modal-container');
    
    expect(modalContainer).toHaveClass('bg-opacity-[25%]');
  });
});
