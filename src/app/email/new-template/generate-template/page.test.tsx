import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";

import Page from "./page";

// Mocking next/navigation hooks
vi.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: vi.fn((parameter) => {
      if (parameter === "htmlContent") {
        return "true";
      }
      return;
    }),
  }),
  useRouter: () => ({
    push: vi.fn(),
  }),
}));

describe("page Component Tests", () => {
  it("renders the breadcrumbs", () => {
    expect.assertions(3);
    render(<Page />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("New Template")).toBeInTheDocument();
    expect(screen.getByText("Generate with HTML")).toBeInTheDocument();
  });

  it("renders the HTML content textarea when not in preview mode", () => {
    expect.hasAssertions();
    vi.mock("next/navigation", () => ({
      useSearchParams: () => ({
        get: vi.fn((parameter) => {
          if (parameter === "htmlContent") {
            return;
          }
          return;
        }),
      }),
      useRouter: () => ({
        push: vi.fn(),
      }),
    }));

    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: vi.fn().mockReturnValue("<h1>Hello World</h1>"),
        setItem: vi.fn(),
        clear: vi.fn(),
      },
      writable: true,
    });

    expect.assertions(1);
    render(<Page />);
    expect(
      screen.getByPlaceholderText("Enter your link here"),
    ).toBeInTheDocument();
  });

  it("renders the generate button when not in preview mode", () => {
    expect.hasAssertions();
    vi.mock("next/navigation", () => ({
      useSearchParams: () => ({
        get: vi.fn((parameter) => {
          if (parameter === "htmlContent") {
            return;
          }
          return;
        }),
      }),
      useRouter: () => ({
        push: vi.fn(),
      }),
    }));

    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: vi.fn().mockReturnValue("<h1>Hello World</h1>"),
        setItem: vi.fn(),
        clear: vi.fn(),
      },
      writable: true,
    });

    expect.assertions(1);
    render(<Page />);
    expect(screen.getByText("Generate")).toBeInTheDocument();
  });

  it("shows error message when HTML content is empty and in non-preview mode", async () => {
    expect.hasAssertions();
    vi.mock("next/navigation", () => ({
      useSearchParams: () => ({
        get: vi.fn((parameter) => {
          if (parameter === "htmlContent") {
            return;
          }
          return;
        }),
      }),
      useRouter: () => ({
        push: vi.fn(),
      }),
    }));

    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: vi.fn().mockReturnValue("<h1>Hello World</h1>"),
        setItem: vi.fn(),
        clear: vi.fn(),
      },
      writable: true,
    });

    expect.assertions(1);
    render(<Page />);
    fireEvent.click(screen.getByText("Generate"));

    await waitFor(() => {
      expect(screen.getByText("This field is required")).toBeInTheDocument();
    });
  });

  it("renders tips on acceptable HTML content when not in preview mode", () => {
    expect.hasAssertions();
    vi.mock("next/navigation", () => ({
      useSearchParams: () => ({
        get: vi.fn((parameter) => {
          if (parameter === "htmlContent") {
            return;
          }
          return;
        }),
      }),
      useRouter: () => ({
        push: vi.fn(),
      }),
    }));

    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: vi.fn().mockReturnValue("<h1>Hello World</h1>"),
        setItem: vi.fn(),
        clear: vi.fn(),
      },
      writable: true,
    });

    expect.assertions(3);
    render(<Page />);
    expect(
      screen.getByText("Ensure the HTML contains the complete email template."),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Use static HTML that does not include dynamic content or scripts.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Ensure the HTML content is well-structured and valid."),
    ).toBeInTheDocument();
  });
});
