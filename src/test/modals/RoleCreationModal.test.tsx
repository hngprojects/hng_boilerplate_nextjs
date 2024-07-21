import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import RoleCreationModal from "~/components/modals/RoleCreationModal";

describe("roleCreationModal", () => {
  it('should render the "Trigger RC Dialog" button', () => {
    expect.assertions(1);
    render(<RoleCreationModal show={false} onClose={() => {}} />);
    const triggerButton = screen.getByText("Trigger RC Dialog");
    expect(triggerButton).toBeInTheDocument();
  });

  it('should open the modal when the "Trigger RC Dialog" button is clicked', async () => {
    expect.assertions(1);
    const { rerender } = render(
      <RoleCreationModal show={false} onClose={() => {}} />,
    );
    const triggerButton = screen.getByText("Trigger RC Dialog");
    await userEvent.click(triggerButton);

    rerender(<RoleCreationModal show={true} onClose={() => {}} />);

    const modalTitle = screen.getByText("Create Role", { selector: "h2" });
    expect(modalTitle).toBeInTheDocument();
  });

  it('should close the modal when the "Cancel" button is clicked', async () => {
    expect.assertions(1);
    const handleClose = vi.fn();
    render(<RoleCreationModal show={true} onClose={handleClose} />);
    const cancelButton = screen.getByText("Cancel");
    await userEvent.click(cancelButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("should display role name and description input fields", () => {
    expect.assertions(2);
    render(<RoleCreationModal show={true} onClose={() => {}} />);
    const roleNameInput = screen.getByPlaceholderText("e.g: IT Staff");
    const descriptionInput = screen.getByPlaceholderText("describe role");

    expect(roleNameInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
  });

  it('should render "Create Role" and "Cancel" buttons inside the modal', () => {
    expect.assertions(2);
    render(<RoleCreationModal show={true} onClose={() => {}} />);
    const createRoleButtons = screen.getAllByText("Create Role");
    const cancelButton = screen.getByText("Cancel");

    expect(createRoleButtons[1]).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });
});
