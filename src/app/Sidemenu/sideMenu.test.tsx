import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import "@testing-library/jest-dom";

import SideMenu from "./sideMenu";

describe("sideMenu Component", () => {
  const TestComponent = ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  );

  it("renders SideMenu component correctly", () => {
    render(
      <SideMenu>
        <TestComponent>Test Content</TestComponent>
      </SideMenu>,
    );

    expect(screen.getByText("Boilerplate.")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search option...")).toBeInTheDocument();
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("General")).toBeInTheDocument();
    expect(screen.getByText("Account")).toBeInTheDocument();
  });

  it("toggles sidebar visibility when menu icon is clicked", () => {
    render(
      <SideMenu>
        <TestComponent>Test Content</TestComponent>
      </SideMenu>,
    );

    const menuIcon = screen.getByRole("button", { name: /menu/i });
    const sidebar = screen.getByRole("navigation");

    // Initially check for the sidebar's hidden state
    expect(sidebar).toHaveClass("left-[-100%]");

    fireEvent.click(menuIcon);
    // After clicking menu icon, sidebar should be visible
    expect(sidebar).toHaveClass("left-0");

    fireEvent.click(menuIcon);
    // After clicking menu icon again, sidebar should be hidden
    expect(sidebar).toHaveClass("left-[-100%]");
  });

  it("highlights the active menu item based on the current pathname", () => {
    render(
      <SideMenu>
        <TestComponent>Test Content</TestComponent>
      </SideMenu>,
    );

    // Assuming pathname is '/' and should highlight 'Integrations'
    // First, click on 'Integrations' if it was not already highlighted
    const integrationsItem = screen.getByText("Integrations");
    fireEvent.click(integrationsItem);

    // Now check if the 'Integrations' item has the highlight class
    expect(integrationsItem).toHaveClass("bg-[#F97316]", { exact: true });
    expect(integrationsItem).toHaveClass("text-white", { exact: true });
  });
});
