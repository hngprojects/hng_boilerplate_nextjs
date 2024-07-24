import { PasswordInput } from "~/components/common/PasswordInput";
import { fireEvent, render, screen } from "./utils";

describe("passwordInput Component", () => {
  const mockOnPasswordChange = vi.fn();

  const setup = () => {
    render(
      <PasswordInput
        password="testPassword"
        onPasswordChange={mockOnPasswordChange}
        name="password"
        id="password"
        placeholder="Enter your password"
      />,
    );
  };

  it("should render the component", () => {
    expect.assertions(1);
    setup();
    const input = screen.getByPlaceholderText("Enter your password");
    expect(input).toBeInTheDocument();
  });

  it("should toggle password visibility", () => {
    expect.assertions(4);
    setup();
    const toggleButton = screen.getByRole("button", { name: /show password/i });
    const input = screen.getByPlaceholderText("Enter your password");

    expect(input).toHaveAttribute("type", "password");

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "text");
    expect(toggleButton).toHaveAttribute("aria-label", "Hide password");

    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "password");
  });

  it("should call onPasswordChange when input changes", () => {
    expect.assertions(2);
    setup();
    const input = screen.getByPlaceholderText("Enter your password");

    fireEvent.change(input, { target: { value: "newPassword" } });
    expect(mockOnPasswordChange).toHaveBeenCalledTimes(1);
    expect(mockOnPasswordChange).toHaveBeenCalledWith("newPassword");
  });

  it("should have appropriate ARIA roles and labels for accessibility", () => {
    expect.assertions(2);
    setup();
    const toggleButton = screen.getByRole("button", { name: /show password/i });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute("aria-label", "Show password");
  });
});
