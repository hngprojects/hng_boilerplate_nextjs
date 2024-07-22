import { fireEvent, render, screen } from "@testing-library/react";

import Sidebar from "~/components/common/sidebar";

describe("sidebar component", () => {
  it("renders Settings header initially visible", () => {
    expect.hasAssertions(), render(<Sidebar />);

    const settingsHeader = screen.getByText("Settings");
    expect(settingsHeader).toBeInTheDocument();
  });

  it("toggles hidden state on click", () => {
    expect.hasAssertions(), render(<Sidebar />);

    const settingsHeader = screen.getByText("Settings");
    fireEvent.click(settingsHeader);

    const profileHeader = screen.getByText("Profile");
    expect(profileHeader).toBeInTheDocument();

    fireEvent.click(settingsHeader);

    expect(profileHeader).not.toBeInTheDocument();
  });
});
