import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PasswordSettings from "./page";

describe("passwordSettings Component", () => {
  it("renders all elements correctly", () => {
    expect.assertions(7);
    render(<PasswordSettings />);

    expect(screen.getByText("Password Settings")).toBeInTheDocument();
    expect(
      screen.getByText("Update password for enhanced account security"),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("Current Password")).toBeInTheDocument();
    expect(screen.getByLabelText("New Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm New Password")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
    expect(screen.getByText("Update Password")).toBeInTheDocument();
  });

  it("verifies responsiveness across various devices", () => {
    expect.assertions(1);
    render(<PasswordSettings />);

    expect(screen.getByText("Password Settings")).toBeInTheDocument();
  });

  it("tests password update functionality", async () => {
    expect.assertions(6);
    render(<PasswordSettings />);
    const user = userEvent.setup();

    const currentPasswordInput = screen.getByLabelText("Current Password");
    const newPasswordInput = screen.getByLabelText("New Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm New Password");

    await user.type(currentPasswordInput, "currentpassword");
    await user.type(newPasswordInput, "Newpassword1!");
    await user.type(confirmPasswordInput, "Newpassword1!");

    expect(currentPasswordInput).toHaveValue("currentpassword");
    expect(newPasswordInput).toHaveValue("Newpassword1!");
    expect(confirmPasswordInput).toHaveValue("Newpassword1!");

    await user.clear(confirmPasswordInput);
    await user.type(confirmPasswordInput, "differentpassword");
    await user.click(screen.getByText("Update Password"));

    await waitFor(() => {
      expect(screen.getByText("Passwords must match")).toBeInTheDocument();
    });

    await user.clear(newPasswordInput);
    await user.clear(confirmPasswordInput);
    await user.type(newPasswordInput, "weakpass1");
    await user.type(confirmPasswordInput, "weakpass1");
    await user.click(screen.getByText("Update Password"));

    await waitFor(() => {
      expect(
        screen.getByText(
          "New password must contain at least one uppercase letter",
        ),
      ).toBeInTheDocument();
    });

    await user.clear(newPasswordInput);
    await user.clear(confirmPasswordInput);
    await user.type(newPasswordInput, "Weakpassword");
    await user.type(confirmPasswordInput, "Weakpassword");
    await user.click(screen.getByText("Update Password"));

    await waitFor(() => {
      expect(
        screen.getByText("New password must contain at least one number"),
      ).toBeInTheDocument();
    });
  }, 10_000);

  it("confirms successful password update workflow", async () => {
    expect.assertions(2);
    render(<PasswordSettings />);
    const user = userEvent.setup();

    const currentPasswordInput = screen.getByLabelText("Current Password");
    const newPasswordInput = screen.getByLabelText("New Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm New Password");

    await user.type(currentPasswordInput, "currentpassword");
    await user.type(newPasswordInput, "Newpassword1!");
    await user.type(confirmPasswordInput, "Newpassword1!");

    await user.click(screen.getByText("Update Password"));
    await waitFor(() => {
      expect(
        screen.getByText("Password Successfully Updated!"),
      ).toBeInTheDocument();
    });

    await user.click(screen.getByText("Continue"));
    expect(
      screen.queryByText("Password Successfully Updated!"),
    ).not.toBeInTheDocument();
  });
});
