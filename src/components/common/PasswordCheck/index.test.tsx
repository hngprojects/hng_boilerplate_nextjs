import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PasswordCheck from "~/components/common/PasswordCheck";
import { describe, expect, it } from "vitest";

describe("PasswordCheck component", () => {
  it("displays all criteria as not met when the password is empty", () => {
    expect.assertions(6);
    render(<PasswordCheck data="3474648udhT" />);

    expect(screen.getByText("Weak password. Must contains;")).toBeInTheDocument();
    expect(screen.getByText("At least 1 uppercase")).toBeInTheDocument();
    expect(screen.getByText("At least 1 number")).toBeInTheDocument();
    expect(screen.getByText("At least 8 characters")).toBeInTheDocument();

    const checkIcons = screen.getAllByTestId("circle-check-icon");
    expect(checkIcons).toHaveLength(3);
    for (const icon of checkIcons) {
      expect(icon).not.toHaveAttribute("color", "#6DC347");
    }
  });

  it("displays all criteria as met when the password meets all requirements", () => {
    expect.assertions(6);
    render(<PasswordCheck data="Password123" />);

    expect(screen.getByText("At least 1 uppercase")).toBeInTheDocument();
    expect(screen.getByText("At least 1 number")).toBeInTheDocument();
    expect(screen.getByText("At least 8 characters")).toBeInTheDocument();

    const checkIcons = screen.getAllByTestId("circle-check-icon");
    expect(checkIcons).toHaveLength(3);
    for (const icon of checkIcons) {
      expect(icon).toHaveAttribute("color", "#6DC347");
    }
  });

  it("displays criteria correctly when the password meets some requirements", () => {
    expect.assertions(6);
    render(<PasswordCheck data="Partial1" />);

    expect(screen.getByText("At least 1 uppercase")).toBeInTheDocument();
    expect(screen.getByText("At least 1 number")).toBeInTheDocument();
    expect(screen.getByText("At least 8 characters")).toBeInTheDocument();

    const checkIcons = screen.getAllByTestId("circle-check-icon");
    expect(checkIcons).toHaveLength(3);

    const [uppercaseIcon, numberIcon, lengthIcon] = checkIcons;
    expect(uppercaseIcon).toHaveAttribute("color", "#6DC347");
    expect(numberIcon).toHaveAttribute("color", "#6DC347");
    expect(lengthIcon).not.toHaveAttribute("color", "#6DC347");
  });

  it("displays criteria correctly when the password does not meet any requirements", () => {
    expect.assertions(6);
    render(<PasswordCheck data="weak" />);

    expect(screen.getByText("At least 1 uppercase")).toBeInTheDocument();
    expect(screen.getByText("At least 1 number")).toBeInTheDocument();
    expect(screen.getByText("At least 8 characters")).toBeInTheDocument();

    const checkIcons = screen.getAllByTestId("circle-check-icon");
    expect(checkIcons).toHaveLength(3);
    for (const icon of checkIcons) {
      expect(icon).not.toHaveAttribute("color", "#6DC347");
    }
  });
});
