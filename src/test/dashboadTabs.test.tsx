import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import DashboardTabs from "~/components/common/UserDashboard/DashboardTabs";

describe("tabs component", () => {
  it("should render the Tabs component correctly", () => {
    expect.assertions(4);
    render(<DashboardTabs />);

    const tab1 = screen.getByRole("tab", { name: /tab 1/i });
    const tab2 = screen.getByRole("tab", { name: /tab 2/i });
    const tab3 = screen.getByRole("tab", { name: /tab 3/i });

    expect(tab1).toBeInTheDocument();
    expect(tab2).toBeInTheDocument();
    expect(tab3).toBeInTheDocument();

    expect(screen.getByRole("tabpanel")).toHaveTextContent(
      "Make changes to the overview here.",
    );
  });

  it("should switch content when a different tab is clicked", async () => {
    expect.assertions(4);
    render(<DashboardTabs />);

    const tab1 = await screen.findByRole("tab", { name: /tab 1/i });
    const tab2 = await screen.findByRole("tab", { name: /tab 2/i });
    const tab3 = await screen.findByRole("tab", { name: /tab 3/i });

    // Initially, Tab 1 content should be visible
    expect(screen.getByRole("tabpanel", { hidden: false })).toHaveTextContent(
      "Make changes to the overview here.",
    );

    // Click on Tab 2
    fireEvent.mouseDown(tab2);
    await waitFor(() => {
      expect(screen.getByRole("tabpanel", { hidden: false })).toHaveTextContent(
        "Change your analytics content here.",
      );
    });

    // Click on Tab 3
    fireEvent.mouseDown(tab3);
    await waitFor(() => {
      expect(screen.getByRole("tabpanel", { hidden: false })).toHaveTextContent(
        "Change your report content here.",
      );
    });
    //     // Click back on Tab 1

    fireEvent.mouseDown(tab1);
    await waitFor(() => {
      expect(screen.getByRole("tabpanel", { hidden: false })).toHaveTextContent(
        "Make changes to the overview here.",
      );
    });
  });
});
