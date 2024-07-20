import { fireEvent, render, screen } from "@testing-library/react";

import UserForm from "../components/common/WaitListForm/UserForm";

// Utility function to set window size
const setWindowSize = (width: number, height: number) => {
  window.innerWidth = width;
  window.innerHeight = height;
  window.dispatchEvent(new Event("resize"));
};

describe("userForm component", () => {
  beforeAll(() => {
    // Save original window size to restore later
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: window.innerWidth,
    });
    Object.defineProperty(window, "innerHeight", {
      writable: true,
      configurable: true,
      value: window.innerHeight,
    });
  });

  afterAll(() => {
    // Restore original window size
    setWindowSize(1024, 768); // Or your original size
  });

  it("renders the form with initial state", () => {
    expect.assertions(3);
    render(<UserForm />);
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/join the waitlist/i)).toBeInTheDocument();
  });

  it("validates form inputs and shows error messages", () => {
    render(<UserForm />);
    fireEvent.submit(screen.getByText(/join the waitlist/i));
    expect(screen.getByText(/your name is required here/i)).toBeInTheDocument();
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "invalid-email" },
    });
    fireEvent.submit(screen.getByText(/join the waitlist/i));
    expect(
      screen.getByText(/please enter a valid email address/i),
    ).toBeInTheDocument();
  });

  it("is responsive to small screen sizes", () => {
    setWindowSize(375, 667); // iPhone 6/7/8 size

    render(<UserForm />);

    // Check for mobile specific elements or styles
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/join the waitlist/i)).toBeInTheDocument();
    // Add more assertions as needed to verify responsiveness
  });

  it("is responsive to large screen sizes", () => {
    setWindowSize(1440, 900); // Desktop size

    render(<UserForm />);

    // Check for desktop specific elements or styles
    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/email/i)).toBeInTheDocument();
    expect(screen.getByText(/join the waitlist/i)).toBeInTheDocument();
    // Add more assertions as needed to verify responsiveness
  });
});
