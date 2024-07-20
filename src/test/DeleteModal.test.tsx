import { fireEvent, render, screen } from "@testing-library/react";

import DeleteModal from "~/components/modals/DeleteModal";

describe("deleteModal", () => {
  it("renders the modal when isVisible is true", () => {
    expect.assertions(4);
    render(<DeleteModal isVisible={true} onClose={() => {}} />);

    expect(screen.getByTestId("modal-container")).toBeInTheDocument();
    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
    expect(screen.getByTestId("modal-heading")).toHaveTextContent(
      "Delete Member",
    );
    expect(screen.getByTestId("modal-message")).toHaveTextContent(
      "Are you sure you want to delete Chad Bosewick? All of your data will be permanently removed. This action cannot be undone.",
    );
  });

  it("does not render the modal when isVisible is false", () => {
    expect.assertions(1);
    render(<DeleteModal isVisible={false} onClose={() => {}} />);
    expect(screen.queryByTestId("modal-container")).not.toBeInTheDocument();
  });

  it("closes the modal when clicking the overlay", () => {
    expect.assertions(1);
    const onClickMock = vi.fn();
    render(<DeleteModal isVisible={true} onClose={onClickMock} />);
    fireEvent.click(screen.getByTestId("modal-container"));
    expect(onClickMock).toHaveBeenCalledWith();
  });

  it("closes the modal when clicking the Cancel button", () => {
    expect.assertions(1);
    const onClickMock = vi.fn();
    render(<DeleteModal isVisible={true} onClose={onClickMock} />);

    fireEvent.click(screen.getByTestId("cancel-button"));
    expect(onClickMock).toHaveBeenCalledWith();
  });

  it("closes the modal when clicking the Delete button", () => {
    expect.assertions(1);
    const onClickMock = vi.fn();
    render(<DeleteModal isVisible={true} onClose={onClickMock} />);

    fireEvent.click(screen.getByTestId("delete-button"));
    expect(onClickMock).toHaveBeenCalledWith();
  });

  it("renders correctly on different screen sizes", () => {
    expect.assertions(2);
    const { rerender } = render(
      <DeleteModal isVisible={true} onClose={() => {}} />,
    );

    window.innerWidth = 500;
    window.dispatchEvent(new Event("resize"));
    rerender(<DeleteModal isVisible={true} onClose={() => {}} />);
    expect(screen.getByTestId("modal-content")).toHaveClass("left-[50%]");

    window.innerWidth = 1200;
    window.dispatchEvent(new Event("resize"));
    rerender(<DeleteModal isVisible={true} onClose={() => {}} />);
    expect(screen.getByTestId("modal-content")).toHaveClass("lg:left-[40%]");

    window.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));
  });

  it("has correct overlay opacity", () => {
    expect.assertions(1);
    render(<DeleteModal isVisible={true} onClose={() => {}} />);
    const modalContainer = screen.getByTestId("modal-container");
    expect(modalContainer).toHaveClass("bg-opacity-[25%]");
  });
});
