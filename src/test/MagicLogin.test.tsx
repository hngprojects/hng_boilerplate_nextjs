import { fireEvent, render, screen } from "@testing-library/react";

import MagicLogin from "~/app/auth/Login";

describe("login Component", () => {
  it("shows error for common typos in email domains", async () => {
    expect.assertions(1);

    render(<MagicLogin />);

    const emailInput = screen.getByPlaceholderText("Enter Email Address");
    const submitButton = screen.getByRole("button", {
      name: /get magic link/i,
    });

    fireEvent.change(emailInput, { target: { value: "test@gail.com" } });
    fireEvent.click(submitButton);

    const errorMessage = await screen.findByText(/please enter a valid email/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
