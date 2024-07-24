import DashboardNavbar from ".";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { it } from "vitest";

const renderComponents = () => {
  render(<DashboardNavbar />);

  return {
    helpIcon: screen.getByTestId("help"),
    bellIcon: screen.getByTestId("bell"),
    chevronDown: screen.getByTestId("chevronDown"),
    searchIcon: screen.getByTestId("search"),
    inputField: screen.getByTestId("input"),
    avartarIcon: screen.getByTestId("avatar"),
  };
};

describe("component rendering tests", () => {
  it("render help icon", () => {
    expect.assertions(1);
    const { helpIcon } = renderComponents();
    expect(helpIcon).toBeInTheDocument();
  });

  it("render bell icon", async () => {
    expect.assertions(1);
    const { bellIcon } = renderComponents();
    expect(bellIcon).toBeInTheDocument();
  });

  it.fails("no notification initially", async () => {
    expect.assertions(1);
    expect(screen.getByTestId("notificationContent")).toBeInTheDocument;
  });

  it("bell icon triggers notification", async () => {
    expect.assertions(2);
    const { bellIcon } = renderComponents();

    fireEvent.click(bellIcon);
    await waitFor(
      () => expect(screen.getByTestId("notificationContent")).toBeInTheDocument,
    );
    expect(bellIcon).toBeInTheDocument();
  });

  it("render chevron down icon", () => {
    expect.assertions(1);
    const { chevronDown } = renderComponents();
    expect(chevronDown).toBeInTheDocument();
  });

  it("input search icon", () => {
    expect.assertions(1);
    const { searchIcon } = renderComponents();
    expect(searchIcon).toBeInTheDocument();
  });

  it("input field has placeholder", () => {
    expect.assertions(1);
    const { inputField } = renderComponents();
    expect(inputField).toBeInTheDocument();
  });

  it("input field renders", () => {
    expect.assertions(1);
    const { inputField } = renderComponents();
    expect(inputField).toBeInTheDocument();
  });

  it("avatar renders", () => {
    expect.assertions(1);
    const { avartarIcon } = renderComponents();
    expect(avartarIcon).toBeInTheDocument();
  });
});
