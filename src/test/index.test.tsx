import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import MediaUpload from "../components/MediaUpload/index";

/* eslint-disable vitest/prefer-spy-on */
/* eslint-disable vitest/prefer-expect-assertions */
/* eslint-disable prettier/prettier */
/* eslint-disable vitest/prefer-lowercase-title */
// Add this mock to your test setup file or at the top of your test file
global.URL.createObjectURL = vi.fn(() => 'blob:http://localhost/test-blob');
global.URL.revokeObjectURL = vi.fn();


describe('MediaUpload', () => {
  it('renders and allows files to be added', async () => {
    const onFilesAdded = vi.fn();
    const onFileDeleted = vi.fn();

    render(
      <MediaUpload
        onFilesAdded={onFilesAdded}
        onFileDeleted={onFileDeleted}
        label="Upload your media"
      />
    );

    // Simulate file input change
    const fileInput = screen.getByLabelText(/upload new/i) as HTMLInputElement;
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Wait for files to be added and the component to update
    await waitFor(() => {
      expect(onFilesAdded).toHaveBeenCalledWith([file]);
    });
  });

  it('allows files to be deleted', async () => {
    const onFilesAdded = vi.fn();
    const onFileDeleted = vi.fn();

    render(
      <MediaUpload
        onFilesAdded={onFilesAdded}
        onFileDeleted={onFileDeleted}
        label="Upload your media"
      />
    );

    // Simulate file input change
    const fileInput = screen.getByLabelText(/upload new/i) as HTMLInputElement;
    const file = new File(['dummy content'], 'example.png', { type: 'image/png' });
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Wait for files to be added
    await waitFor(() => {
      // Simulate delete button click
      const deleteButton = screen.getByRole('button', { name: /delete file/i });
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.click(deleteButton);

      expect(onFileDeleted).toHaveBeenCalledWith(file);
    });
  });
});
