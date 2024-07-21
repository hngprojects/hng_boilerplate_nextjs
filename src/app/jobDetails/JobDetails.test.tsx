import { render, screen, act } from "@testing-library/react";
import { describe, it, beforeEach, expect, vi } from "vitest";
import JobDetails from "./JobDetails";

vi.mock("~/components/common/Breadcrumb", () => ({
  Breadcrumb: () => <div>Breadcrumb Mock</div>,
}));

const setWindowWidth = (width: number) => {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event("resize"));
};

describe("jobDetails Component", () => {
  beforeEach(() => {
    setWindowWidth(1024);
  });

  it("renders all content correctly", () => {
    act(() => {
      setWindowWidth(1024);
    });
    render(<JobDetails />);
    expect(screen.getByText("Product Designer")).toBeInTheDocument();
    expect(screen.getByText("Job Description")).toBeInTheDocument();
    expect(screen.getByText("Key Responsibilities")).toBeInTheDocument();
    expect(screen.getByText("Qualifications")).toBeInTheDocument();
    expect(screen.getByText("About the job")).toBeInTheDocument();
    expect(screen.getByText("What we offer")).toBeInTheDocument();
    expect(screen.getByText("How to Apply")).toBeInTheDocument();
  });
});
