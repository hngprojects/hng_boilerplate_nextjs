import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Contact from "~/app/(landing-routes)/contact-us/page";

describe("contact Page tests", () => {
  const originalEnvironment = process.env;

  beforeEach(() => {
    process.env = {
      ...originalEnvironment,
      API_URL: "test.com",
    };
  });

  afterEach(() => {
    process.env = originalEnvironment;
  });

  it("should render the Contact Us form and content card correctly", () => {
    expect.assertions(4);
    render(<Contact />);

    expect(screen.getByRole("form")).toBeInTheDocument();

    expect(screen.getByText("Contact Us")).toBeInTheDocument();

    expect(screen.getByText(/business hours/i)).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /faq/i })).toBeInTheDocument();
  });

  it("should validate the form inputs correctly", async () => {
    expect.assertions(1);
    render(<Contact />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "invalid-email@gmail" },
    });
    fireEvent.submit(screen.getByRole("form"));

    await waitFor(() => {
      expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
    });
  });

  it("should be responsive", () => {
    expect.assertions(2);
    render(<Contact />);

    window.innerWidth = 320;
    window.dispatchEvent(new Event("resize"));
    expect(screen.getByRole("form")).toBeInTheDocument();

    window.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});
