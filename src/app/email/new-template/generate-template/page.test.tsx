import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Page from "./page";

describe("page Component Tests", () => {
  it("renders the breadcrumbs", () => {
    expect.assertions(1);
    render(<Page />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("New Template")).toBeInTheDocument();
    expect(screen.getByText("Generate with HTML")).toBeInTheDocument();
  });

  it("renders the HTML content textarea", () => {
    expect.assertions(1);
    render(<Page />);
    expect(
      screen.getByPlaceholderText("Enter your link here"),
    ).toBeInTheDocument();
  });

  it("renders the generate button", () => {
    expect.assertions(1);
    render(<Page />);
    expect(screen.getByText("Generate")).toBeInTheDocument();
  });

  it("shows error message when HTML content is empty", async () => {
    expect.assertions(1);
    render(<Page />);
    fireEvent.click(screen.getByText("Generate"));

    await waitFor(() => {
      expect(screen.getByText("This field is required")).toBeInTheDocument();
    });
  });

  it("shows preview when HTML content is provided", async () => {
    expect.assertions(1);
    render(<Page />);
    const textarea = screen.getByPlaceholderText("Enter your link here");
    fireEvent.change(textarea, { target: { value: "<h1>Hello World</h1>" } });
    fireEvent.click(screen.getByText("Generate"));

    await waitFor(() => {
      expect(
        screen.getByText("Preview Your Generated Template"),
      ).toBeInTheDocument();
    });
  });

  it("renders tips on acceptable HTML content", () => {
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

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Page from "./page";
import { describe, expect, it } from "vitest/dist";

describe("page Component Tests", () => {
  it("renders the breadcrumbs", () => {
    expect.assertions(1);
    render(<Page />);
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("New Template")).toBeInTheDocument();
    expect(screen.getByText("Generate with HTML")).toBeInTheDocument();
  });

  it("renders the HTML content textarea", () => {
    expect.assertions(1);
    render(<Page />);
    expect(
      screen.getByPlaceholderText("Enter your link here"),
    ).toBeInTheDocument();
  });

  it("renders the generate button", () => {
    expect.assertions(1);
    render(<Page />);
    expect(screen.getByText("Generate")).toBeInTheDocument();
  });

  it("shows error message when HTML content is empty", async () => {
    expect.assertions(1);
    render(<Page />);
    fireEvent.click(screen.getByText("Generate"));

    await waitFor(() => {
      expect(screen.getByText("This field is required")).toBeInTheDocument();
    });
  });

  it("shows preview when HTML content is provided", async () => {
    expect.assertions(1);
    render(<Page />);
    const textarea = screen.getByPlaceholderText("Enter your link here");
    fireEvent.change(textarea, { target: { value: "<h1>Hello World</h1>" } });
    fireEvent.click(screen.getByText("Generate"));

    await waitFor(() => {
      expect(
        screen.getByText("Preview Your Generated Template"),
      ).toBeInTheDocument();
    });
  });

  it("renders tips on acceptable HTML content", () => {
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
