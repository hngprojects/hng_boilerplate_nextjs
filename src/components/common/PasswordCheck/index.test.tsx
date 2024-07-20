import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import PasswordCheck from "./index";

describe("passwordCheck component", () => {
  it("displays all criteria as not met when the password is empty", () => {
    expect.hasAssertions();
    render(<PasswordCheck data="" />);
    expect(
      screen.getByText("Weak password. Must contains;"),
    ).toBeInTheDocument();
    const criteriaTexts = [
      "At least 1 uppercase",
      "At least 1 number",
      "At least 8 characters",
    ];
    for (const text of criteriaTexts) {
      expect(screen.getByText(text)).toBeInTheDocument();
    }
    const checkIcons = screen.getAllByTestId("circle-check-icon");
    expect(checkIcons).toHaveLength(3);
    expect(
      checkIcons.every((icon) => icon.style.color === "rgb(182, 182, 182)"),
    ).toBeTruthy();
  });
  it("displays all criteria as met when the password meets all requirements", () => {
    expect.hasAssertions();
    render(<PasswordCheck data="Password123" />);
    const checkIcons = screen.getAllByTestId("circle-check-icon");
    expect(checkIcons).toHaveLength(3);
    expect(
      checkIcons.every((icon) => icon.style.color === "rgb(109, 195, 71)"),
    ).toBeTruthy();
  });
  it("displays criteria correctly when the password meets some requirements", () => {
    expect.hasAssertions();
    render(<PasswordCheck data="Partial1" />);
    const checkIcons = screen.getAllByTestId("circle-check-icon");
    expect(checkIcons).toHaveLength(3);
    const [uppercaseIcon, numberIcon] = checkIcons;
    expect(uppercaseIcon.style.color).toBe("rgb(109, 195, 71)");
    expect(numberIcon.style.color).toBe("rgb(109, 195, 71)");
  });
  it("displays criteria correctly when the password does not meet any requirements", () => {
    expect.hasAssertions();
    render(<PasswordCheck data="weak" />);
    const checkIcons = screen.getAllByTestId("circle-check-icon");
    expect(checkIcons).toHaveLength(3);
    expect(
      checkIcons.every((icon) => icon.style.color === "rgb(182, 182, 182)"),
    ).toBeTruthy();
  });
});
