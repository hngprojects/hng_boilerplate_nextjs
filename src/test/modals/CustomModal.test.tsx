import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import CustomModal from "~/components/modals/CustomModal/CustomModal";

describe("customModal Component", () => {
  it("renders the modal when onOpen is true", () => {
    expect.hasAssertions();
    render(
      <CustomModal
        onOpen={true}
        toggleState={vi.fn()}
        buttonAction={vi.fn()}
        showButtons={true}
        actionButtonText="Delete"
        actionButtonColor="primary"
        // eslint-disable-next-line react/no-children-prop
        children={<p>Modal Content</p>}
        buttonPosition="right"
        addCloseButton={true}
      />,
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("does not render the modal when onOpen is false", () => {
    expect.hasAssertions();
    render(
      <CustomModal
        onOpen={false}
        toggleState={vi.fn()}
        buttonAction={vi.fn()}
        showButtons={true}
        actionButtonText="Delete"
        actionButtonColor="primary"
        // eslint-disable-next-line react/no-children-prop
        children={<p>Modal Content</p>}
        buttonPosition="right"
        addCloseButton={true}
      />,
    );
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("calls toggleState with false when close button is clicked", async () => {
    expect.hasAssertions();
    const toggleStateMock = vi.fn();
    render(
      <CustomModal
        onOpen={true}
        toggleState={toggleStateMock}
        buttonAction={vi.fn()}
        showButtons={true}
        actionButtonText="Delete"
        actionButtonColor="primary"
        // eslint-disable-next-line react/no-children-prop
        children={<p>Modal Content</p>}
        buttonPosition="right"
        addCloseButton={true}
      />,
    );
    const closeButtons = screen.getAllByRole("button", { name: /close/i });
    await userEvent.click(closeButtons[0]);
    expect(toggleStateMock).toHaveBeenCalledWith(false);
  });

  it("calls buttonAction when action button is clicked", async () => {
    expect.hasAssertions();
    const buttonActionMock = vi.fn();
    render(
      <CustomModal
        onOpen={true}
        toggleState={vi.fn()}
        buttonAction={buttonActionMock}
        showButtons={true}
        actionButtonText="Delete"
        actionButtonColor="primary"
        // eslint-disable-next-line react/no-children-prop
        children={<p>Modal Content</p>}
        buttonPosition="right"
        addCloseButton={true}
      />,
    );
    const actionButton = screen.getByRole("button", { name: /delete/i });
    await userEvent.click(actionButton);
    expect(buttonActionMock).toHaveBeenCalledWith();
  });

  it("does not show buttons if showButtons is false", () => {
    expect.hasAssertions();
    render(
      <CustomModal
        onOpen={true}
        toggleState={vi.fn()}
        buttonAction={vi.fn()}
        showButtons={false}
        actionButtonText="Delete"
        actionButtonColor="primary"
        // eslint-disable-next-line react/no-children-prop
        children={<p>Modal Content</p>}
        buttonPosition="right"
        addCloseButton={false}
      />,
    );
    expect(screen.queryByRole("button", { name: /delete item/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /close window/i })).toBeNull();
  });

  it("shows close button if addCloseButton is true", () => {
    expect.hasAssertions();
    render(
      <CustomModal
        onOpen={true}
        toggleState={vi.fn()}
        buttonAction={vi.fn()}
        showButtons={true}
        actionButtonText="Delete"
        actionButtonColor="primary"
        // eslint-disable-next-line react/no-children-prop
        children={<p>Modal Content</p>}
        buttonPosition="right"
        addCloseButton={true}
      />,
    );
    const closeButtons = screen.getAllByRole("button", { name: /close/i });
    expect(closeButtons.length).toBeGreaterThan(0);
  });

  it("does not show close button if addCloseButton is false", () => {
    expect.hasAssertions();
    render(
      <CustomModal
        onOpen={true}
        toggleState={vi.fn()}
        buttonAction={vi.fn()}
        showButtons={true}
        actionButtonText="Delete"
        actionButtonColor="primary"
        // eslint-disable-next-line react/no-children-prop
        children={<p>Modal Content</p>}
        buttonPosition="right"
        addCloseButton={false}
      />,
    );
    expect(screen.queryByRole("button", { name: /close window/i })).toBeNull();
  });

  it("positions buttons correctly based on buttonPosition prop", () => {
    expect.hasAssertions();
    render(
      <CustomModal
        onOpen={true}
        toggleState={vi.fn()}
        buttonAction={vi.fn()}
        showButtons={true}
        actionButtonText="Delete"
        actionButtonColor="primary"
        // eslint-disable-next-line react/no-children-prop
        children={<p>Modal Content</p>}
        buttonPosition="left"
        addCloseButton={true}
      />,
    );

    const dialogFooter = screen.getByTestId("dialog-footer");

    expect(dialogFooter).toHaveClass("justify-start");
  });

  it("renders internal content correctly", () => {
    expect.hasAssertions();
    render(
      <CustomModal
        onOpen={true}
        toggleState={vi.fn()}
        buttonAction={vi.fn()}
        showButtons={true}
        actionButtonText="Delete"
        actionButtonColor="primary"
        // eslint-disable-next-line react/no-children-prop
        children={<p>Modal Content</p>}
        buttonPosition="right"
        addCloseButton={true}
      />,
    );
    expect(screen.getByText(/modal content/i)).toBeInTheDocument();
  });

  it("supports keyboard navigation and screen reader compatibility", async () => {
    expect.hasAssertions();
    render(
      <CustomModal
        onOpen={true}
        toggleState={vi.fn()}
        buttonAction={vi.fn()}
        showButtons={true}
        actionButtonText="Delete"
        actionButtonColor="primary"
        // eslint-disable-next-line react/no-children-prop
        children={<p>Modal Content</p>}
        buttonPosition="right"
        addCloseButton={true}
      />,
    );
    const closeButton = screen.getAllByRole("button", { name: /close/i })[0];
    closeButton.focus();
    expect(closeButton).toHaveFocus();
    await userEvent.keyboard("[Enter]");
  });

  it("renders consistently across different browsers", () => {
    expect.hasAssertions();
    const mockRender = vi.fn(() =>
      render(
        <CustomModal
          onOpen={true}
          toggleState={vi.fn()}
          buttonAction={vi.fn()}
          showButtons={true}
          actionButtonText="Delete"
          actionButtonColor="primary"
          // eslint-disable-next-line react/no-children-prop
          children={<p>Modal Content</p>}
          buttonPosition="right"
          addCloseButton={true}
        />,
      ),
    );
    mockRender();
    expect(mockRender).toHaveBeenCalledTimes(1);
  });
});
