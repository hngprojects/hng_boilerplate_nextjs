import Sidebar from "~/components/common/sidebar";
import { fireEvent, render, screen } from "~/test/utils";

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

    // After click, profile part should be visible
    const profileHeader = screen.getByText("Profile");
    expect(profileHeader).toBeInTheDocument();

    // Click again to hide profile part
    fireEvent.click(settingsHeader);

    // Profile part should not be in the document after click
    expect(profileHeader).not.toBeInTheDocument();
  });

  it("activates correct link and highlights when clicked", () => {
    expect.hasAssertions(), render(<Sidebar />);

    // Assuming "Roles and permissions" is initially active
    const rolesLink = screen.getByText("Roles and permissions");
    expect(rolesLink).toHaveClass("bg-primary text-background");

    // Click on "Integrations" link
    const integrationsLink = screen.getByText("Integrations");
    fireEvent.click(integrationsLink);

    // Check if "Integrations" link is now active
    expect(integrationsLink).toHaveClass("bg-[#F97316] text-white");
  });
});
