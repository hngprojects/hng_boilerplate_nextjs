import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useRouter, useSearchParams } from "next/navigation";
import { vi } from "vitest";

import Page from "./page";

// Mocking the next/navigation module
vi.mock("next/navigation", () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

function setupMocks() {
  const mockPush = vi.fn();
  (useRouter as jest.Mock).mockReturnValue({
    push: mockPush,
  });
  return { mockPush };
}

describe("generate Template Page", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("renders the form and allows input", () => {
    expect.hasAssertions();
    setupMocks();
    render(<Page />);

    const textarea = screen.getByPlaceholderText("Enter your link here");
    expect(textarea).toBeInTheDocument();

    fireEvent.change(textarea, { target: { value: "<h1>Hello World</h1>" } });
    expect(textarea).toHaveValue("<h1>Hello World</h1>");
  });

  it("displays validation error if textarea is empty", async () => {
    expect.hasAssertions();
    setupMocks();
    render(<Page />);

    const button = screen.getByText("Generate");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("This field is required")).toBeInTheDocument();
    });
  });

  it("saves HTML content to localStorage and redirects", async () => {
    expect.hasAssertions();
    const { mockPush } = setupMocks();
    render(<Page />);

    const textarea = screen.getByPlaceholderText("Enter your link here");
    fireEvent.change(textarea, { target: { value: "<h1>Hello World</h1>" } });

    const button = screen.getByText("Generate");
    fireEvent.click(button);

    await waitFor(() => {
      expect(localStorage.getItem("htmlContent")).toBe("<h1>Hello World</h1>");
    });

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("?htmlContent=true");
    });
  });

  it("renders the preview when contentPreview is true", () => {
    expect.hasAssertions();
    (useSearchParams as unknown as jest.Mock).mockReturnValue(
      new URLSearchParams("?htmlContent=true"),
    );

    render(<Page />);

    const previewHeading = screen.getByText("Preview Your Generated Template");
    expect(previewHeading).toBeInTheDocument();

    const iframe = screen.getByTitle("Generated Email Template");
    expect(iframe).toBeInTheDocument();
  });
});
