import {
  describe,
  fireEvent,
  it,
  render,
  screen,
} from "@testing-library/react";

import Page from "../members/page";

describe("page tests", () => {
  it("renders the search input and icon", () => {
    render(<Page />);

    expect(screen.getByTestId("search")).toBeInTheDocument();

    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("shows error message when link is empty and copy button is clicked", () => {
    render(<Page />);

    const switchButton = screen.getByRole("switch");
    fireEvent.click(switchButton);
    const copyButton = screen.getByText("Copy Link");
    fireEvent.click(copyButton);

    expect(screen.getByText("Invite link cannot be empty")).toBeInTheDocument();
  });

  it("toggles dropdown and selects an option", () => {
    render(<Page />);

    const dropdownButton = screen.getByText("All");
    fireEvent.click(dropdownButton);

    const option = screen.getByText("Admin");
    fireEvent.click(option);
    expect(screen.queryByText("Admin")).not.toBeNull();
  });
});
function expect(argument0: any) {
  throw new Error("Function not implemented.");
}
