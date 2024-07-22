// import { fireEvent, render, screen, waitFor } from "@testing-library/react";
// import { describe, expect, it, vi } from "vitest";

// import MediaUpload from "../components/MediaUpload/index";

// // Ensure global.URL.createObjectURL is defined
// if (!global.URL.createObjectURL) {
//   global.URL.createObjectURL = () => `blob:http://localhost/test-blob`;
// }

// // Ensure global.URL.revokeObjectURL is defined
// if (!global.URL.revokeObjectURL) {
//   global.URL.revokeObjectURL = () => {};
// }

// describe("mediaUpload", () => {
//   it("renders and allows files to be added", async () => {
//     expect.hasAssertions();
//     const onFilesAdded = vi.fn();
//     const onFileDeleted = vi.fn();

//     render(
//       <MediaUpload
//         onFilesAdded={onFilesAdded}
//         onFileDeleted={onFileDeleted}
//         label="Upload your media"
//       />,
//     );

//     // Simulate file input change
//     const fileInput = screen.getByLabelText(/upload new/i) as HTMLInputElement;
//     const file = new File(["dummy content"], "example.png", {
//       type: "image/png",
//     });
//     fireEvent.change(fileInput, { target: { files: [file] } });

//     // Wait for files to be added and the component to update
//     await waitFor(() => {
//       expect(onFilesAdded).toHaveBeenCalledWith([file]);
//     });
//   });

//   it("allows files to be deleted", async () => {
//     expect.hasAssertions();
//     const onFilesAdded = vi.fn();
//     const onFileDeleted = vi.fn();

//     render(
//       <MediaUpload
//         onFilesAdded={onFilesAdded}
//         onFileDeleted={onFileDeleted}
//         label="Upload your media"
//       />,
//     );

//     // Simulate file input change
//     const fileInput = screen.getByLabelText(/upload new/i) as HTMLInputElement;
//     const file = new File(["dummy content"], "example.png", {
//       type: "image/png",
//     });
//     fireEvent.change(fileInput, { target: { files: [file] } });

//     // Wait for files to be added
//     await waitFor(() => {
//       expect(onFilesAdded).toHaveBeenCalledWith([file]);
//     });

//     // Simulate delete button click outside of waitFor
//     const deleteButton = screen.getByRole("button", { name: /delete file/i });
//     fireEvent.click(deleteButton);

//     // Wait for file to be deleted and the component to update
//     await waitFor(() => {
//       expect(onFileDeleted).toHaveBeenCalledWith(file);
//     });
//   });
// });

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import MediaUpload from "../components/MediaUpload/index";

describe("mediaUpload", () => {
  it("renders correctly with no files", () => {
    expect.hasAssertions();
    render(
      <MediaUpload
        onFilesAdded={vi.fn()}
        onFileDeleted={vi.fn()}
        label="Upload your media"
      />,
    );

    expect(screen.getByText(/upload your media/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/upload new/i)).toBeInTheDocument();
  });

  it("allows files to be added via file input", async () => {
    expect.hasAssertions();
    const onFilesAdded = vi.fn();
    render(
      <MediaUpload
        onFilesAdded={onFilesAdded}
        onFileDeleted={vi.fn()}
        label="Upload your media"
      />,
    );

    const fileInput = screen.getByLabelText(/upload new/i) as HTMLInputElement;
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(onFilesAdded).toHaveBeenCalledWith([file]);
    });
  });

  it("allows files to be added via drag and drop", async () => {
    expect.hasAssertions();
    const onFilesAdded = vi.fn();
    render(
      <MediaUpload
        onFilesAdded={onFilesAdded}
        onFileDeleted={vi.fn()}
        label="Upload your media"
      />,
    );

    const dropArea = screen.getByTestId("drop-area");

    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);

    fireEvent.dragOver(dropArea);
    fireEvent.drop(dropArea, { dataTransfer });

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

    const fileInput = screen.getByLabelText(/upload new/i) as HTMLInputElement;
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(onFilesAdded).toHaveBeenCalledWith([file]);
    });

    const deleteButton = screen.getByRole("button", { name: /delete file/i });
    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(onFileDeleted).toHaveBeenCalledWith(file);
    });
  });

  it("renders with a custom button", () => {
    expect.hasAssertions();
    const CustomButton = ({ onClick }: { onClick: () => void }) => (
      <button onClick={onClick}>Custom Upload Button</button>
    );

    render(
      <MediaUpload
        onFilesAdded={vi.fn()}
        onFileDeleted={vi.fn()}
        label="Upload your media"
        CustomButton={CustomButton}
      />,
    );

    expect(screen.getByText(/custom upload button/i)).toBeInTheDocument();
  });

  it("revokes object URLs when component unmounts", async () => {
    expect.hasAssertions();
    const onFilesAdded = vi.fn();
    const onFileDeleted = vi.fn();
    const { unmount } = render(
      <MediaUpload
        onFilesAdded={onFilesAdded}
        onFileDeleted={onFileDeleted}
        label="Upload your media"
      />,
    );

    const fileInput = screen.getByLabelText(/upload new/i) as HTMLInputElement;
    const file = new File(["dummy content"], "example.png", {
      type: "image/png",
    });
    fireEvent.change(fileInput, { target: { files: [file] } });

    await waitFor(() => {
      expect(onFilesAdded).toHaveBeenCalledWith([file]);
    });

    unmount();

    // Check if revokeObjectURL was called
    expect(URL.revokeObjectURL).toHaveBeenCalledWith();
  });
});
