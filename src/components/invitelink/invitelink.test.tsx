// src/components/link/InviteLink.test.tsx

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import "@testing-library/jest-dom";

import { afterEach, describe, expect, it, vi } from "vitest";

import InviteLink from "./invitelink";

// Create a mock response for the fetch API
const mockFetchResponse = {
  json: () =>
    Promise.resolve([{ url: "https://dummyjson.com/c/cbbb-72ae-4ab0-b987" }]),
  ok: true,
  status: 200,
  statusText: "OK",
  headers: new Headers(),
  redirected: false,
  type: "default" as ResponseType,
  url: "",
  clone: () => mockFetchResponse,
  body: undefined,
  bodyUsed: false,
  arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
  blob: () => Promise.resolve(new Blob()),
  formData: () => Promise.resolve(new FormData()),
  text: () => Promise.resolve(""),
};

vi.spyOn(global, "fetch").mockResolvedValue(mockFetchResponse as Response);

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: undefined,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe("inviteLink Component", () => {
  /* eslint-disable vitest/no-hooks */
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders Invite Link component", () => {
    expect.assertions(1);
    render(<InviteLink />);
    expect(screen.getByText("Invite Link")).toBeInTheDocument();
  });

  it("enables and disables the link input", () => {
    expect.assertions(2);
    render(<InviteLink />);
    const toggle = screen.getByRole("checkbox");
    fireEvent.click(toggle);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    fireEvent.click(toggle);
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });

  it("fetches a new link when enabled", async () => {
    expect.assertions(1);
    render(<InviteLink />);
    const toggle = screen.getByRole("checkbox");
    fireEvent.click(toggle);
    await waitFor(() =>
      expect(screen.getByRole("textbox")).toHaveValue(
        "https://dummyjson.com/c/cbbb-72ae-4ab0-b987",
      ),
    );
  });

  it("copies the link to clipboard", async () => {
    expect.assertions(2);
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(() => {}),
      },
    });

    render(<InviteLink />);
    const toggle = screen.getByRole("checkbox");
    fireEvent.click(toggle);
    await waitFor(() =>
      expect(screen.getByRole("textbox")).toHaveValue(
        "https://dummyjson.com/c/cbbb-72ae-4ab0-b987",
      ),
    );
    const copyButton = screen.getByText("CopyLink");
    fireEvent.click(copyButton);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
      "https://dummyjson.com/c/cbbb-72ae-4ab0-b987",
    );
  });

  it("refreshes the link when refresh icon is clicked", async () => {
    expect.assertions(1);
    render(<InviteLink />);
    const toggle = screen.getByRole("checkbox");
    fireEvent.click(toggle);
    await waitFor(() =>
      expect(screen.getByRole("textbox")).toHaveValue(
        "https://dummyjson.com/c/cbbb-72ae-4ab0-b987",
      ),
    );
    const refreshIcon = screen.getByRole("img", { hidden: true });
    fireEvent.click(refreshIcon);
    await waitFor(() =>
      expect(screen.getByRole("textbox")).toHaveValue(
        "https://dummyjson.com/c/cbbb-72ae-4ab0-b987",
      ),
    );
  });
});
