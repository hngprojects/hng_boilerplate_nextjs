import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import PasswordSuccessfulModal from "./PasswordSuccessfulModal";

test("renders the modal when show is true", () => {
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

test("close the modal when continue is clicked", async () => {
  const user = userEvent.setup();
  let modalClosed = false;
  const handleClose = () => {
    modalClosed = true;
  };
  render(<PasswordSuccessfulModal show={true} onClose={handleClose} />);

  await user.click(screen.getByText("Continue"));

  expect(modalClosed).toBeTruthy();
});

test("close the modal when outside the modal is clicked", async () => {
  const user = userEvent.setup();
  let modalClosed = false;
  const handleClose = () => {
    modalClosed = true;
  };
  render(<PasswordSuccessfulModal show={true} onClose={handleClose} />);

  await user.click(screen.getByTestId("overlay"));

  expect(modalClosed).toBeTruthy();
});
