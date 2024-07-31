import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Contact from "~/app/(landing-routes)/contact-us/page";

describe("contact Page tests", () => {
  // Set up the environment variable
  const originalEnvironment = process.env;

  beforeEach(() => {
    process.env = {
      ...originalEnvironment,
      NEXT_PUBLIC_BACKEND_PROBE_URL: "test.com",
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
      target: { value: "invalid-email" },
    });
    fireEvent.submit(screen.getByRole("form"));

    await waitFor(() => {
      expect(screen.getByText(/email is invalid/i)).toBeInTheDocument();
    });
  });

  it("should handle API integration correctly", async () => {
    expect.assertions(1);

    const fetchMock = vi.fn();
    global.fetch = fetchMock;

    fetchMock.mockResolvedValueOnce(
      new Response(
        JSON.stringify({ message: "Form submitted successfully!" }),
        {
          status: 200,
          statusText: "OK",
          headers: { "Content-Type": "application/json" },
        },
      ),
    );

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Enter full name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter email address"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter phone number"), {
      target: { value: "+1234567890" },
    });
    fireEvent.change(screen.getByPlaceholderText("Message..."), {
      target: { value: "Hello!" },
    });
    fireEvent.click(screen.getByText("Send"));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        `${process.env.NEXT_PUBLIC_BACKEND_PROBE_URL}/api/v1/contact`,
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "John Doe",
            email: "john@example.com",
            phone: "+1234567890",
            message: "Hello!",
          }),
        }),
      );
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
