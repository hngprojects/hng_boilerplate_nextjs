import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import PasswordCheck from "./index";

const handleStrengthChange = () => {};

describe("passwordCheck", () => {
  const setup = (password: string, minLength: number = 8) => {
    render(
      <PasswordCheck
        password={password}
        minLength={minLength}
        onStrengthChange={handleStrengthChange}
      />,
    );
  };

  it("renders without crashing", () => {
    expect.assertions(1);
    setup("password");
    expect(
      screen.getByText("Weak password. Must contain:"),
    ).toBeInTheDocument();
  });

  it("checks for at least 1 uppercase letter", () => {
    expect.assertions(1);
    setup("Password");
    const icon = screen.getAllByTestId("circle-check-icon")[0];
    expect(icon).toHaveStyle("color: #6DC347");
  });

  it("checks for at least 1 number", () => {
    expect.assertions(1);
    setup("Password1");
    const icon = screen.getAllByTestId("circle-check-icon")[1];
    expect(icon).toHaveStyle("color: #6DC347");
  });

  it("checks for minimum length", () => {
    expect.assertions(1);
    setup("Password1");
    const icon = screen.getAllByTestId("circle-check-icon")[2];
    expect(icon).toHaveStyle("color: #6DC347");
  });

  it("updates the strength indicators correctly", () => {
    expect.assertions(3);
    setup("Password1");
    const icons = screen.getAllByTestId("circle-check-icon");
    expect(icons[0]).toHaveStyle("color: #6DC347");
    expect(icons[1]).toHaveStyle("color: #6DC347");
    expect(icons[2]).toHaveStyle("color: #6DC347");
  });

  it("handles passwords with less than the minimum length", () => {
    expect.assertions(1);
    setup("Pass1");
    const icons = screen.getAllByTestId("circle-check-icon");
    expect(icons[2]).toHaveStyle("color: #B6B6B6");
  });

  it("handles passwords without uppercase letters", () => {
    expect.assertions(1);
    setup("password1");
    const icons = screen.getAllByTestId("circle-check-icon");
    expect(icons[0]).toHaveStyle("color: #B6B6B6");
  });

  it("handles passwords without numbers", () => {
    expect.assertions(1);
    setup("Password");
    const icons = screen.getAllByTestId("circle-check-icon");
    expect(icons[1]).toHaveStyle("color: #B6B6B6");
  });
});
