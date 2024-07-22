import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import MediaUpload from "../components/MediaUpload/index";

// Ensure global.URL.createObjectURL is defined
if (!global.URL.createObjectURL) {
  global.URL.createObjectURL = () => `blob:http://localhost/test-blob`;
}

// Ensure global.URL.revokeObjectURL is defined
if (!global.URL.revokeObjectURL) {
  global.URL.revokeObjectURL = () => {};
}

describe("mediaUpload", () => {
  it("renders and allows files to be added", async () => {
    expect.hasAssertions();
    const onFilesAdded = vi.fn();
    const onFileDeleted = vi.fn();

    render(
      <MediaUpload
        onFilesAdded={onFilesAdded}
        onFileDeleted={onFileDeleted}
        label="Upload your media"
      />,
    );

    // Simulate file input change
    const fileInput = screen.getByLabelText(/upload new/i) as HTMLInputElement;
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Wait for files to be added and the component to update
    await waitFor(() => {
      expect(onFilesAdded).toHaveBeenCalledWith([file]);
    });
  });

  it("allows files to be deleted", async () => {
    expect.hasAssertions();
    const onFilesAdded = vi.fn();
    const onFileDeleted = vi.fn();

    render(
      <MediaUpload
        onFilesAdded={onFilesAdded}
        onFileDeleted={onFileDeleted}
        label="Upload your media"
      />,
    );

    // Simulate file input change
    const fileInput = screen.getByLabelText(/upload new/i) as HTMLInputElement;
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Wait for files to be added
    await waitFor(() => {
      expect(onFilesAdded).toHaveBeenCalledWith([file]);
    });

    // Simulate delete button click outside of waitFor
    const deleteButton = screen.getByRole("button", { name: /delete file/i });
    fireEvent.click(deleteButton);

    // Wait for file to be deleted and the component to update
    await waitFor(() => {
      expect(onFileDeleted).toHaveBeenCalledWith(file);
    });
  });
});
