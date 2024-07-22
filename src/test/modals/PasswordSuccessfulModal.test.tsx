import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PasswordSuccessfulModal from "~/components/modals/PasswordSuccessfulModal";

describe("testimonials Component", () => {
  it("renders the modal when show is true", () => {
    expect.assertions(2);

    render(<PasswordSuccessfulModal show={true} onClose={() => {}} />);
    expect(
      screen.getByText("Password Successfully Updated!"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Your password has been successfully updated! You can now log in with your new password.",
      ),
    ).toBeInTheDocument();
  });

  it("close the modal when continue is clicked", async () => {
    expect.assertions(1);
    const user = userEvent.setup();
    let modalClosed = false;
    const handleClose = () => {
      modalClosed = true;
    };
    render(<PasswordSuccessfulModal show={true} onClose={handleClose} />);

    await user.click(screen.getByText("Continue"));

    expect(modalClosed).toBeTruthy();
  });

  it("close the modal when outside the modal is clicked", async () => {
    expect.assertions(1);
    const user = userEvent.setup();
    let modalClosed = false;
    const handleClose = () => {
      modalClosed = true;
    };
    render(<PasswordSuccessfulModal show={true} onClose={handleClose} />);

    await user.click(screen.getByTestId("overlay"));

    expect(modalClosed).toBeTruthy();
  });
});
