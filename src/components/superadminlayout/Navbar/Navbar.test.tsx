import { render } from "@testing-library/react";

import Navbar from "./index";

describe("component rendering tests", () => {
  it("render help icon", () => {
    expect.assertions(1);
    const utils = render(<Navbar />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByTestId("help")).toBeTruthy();
  });
  it("render bell icon", () => {
    expect.assertions(1);

    const utils = render(<Navbar />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByTestId("bell")).toBeTruthy();
  });
  it("render chevron down icon", () => {
    expect.assertions(1);

    const utils = render(<Navbar />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByTestId("chevronDown")).toBeTruthy();
  });
  it("input filed icon", () => {
    expect.assertions(1);
    const utils = render(<Navbar />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByTestId("search")).toBeTruthy();
  });
  it("input field has placeholder", () => {
    expect.assertions(1);
    const utils = render(<Navbar />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByPlaceholderText("Search option...")).toBeTruthy();
  });

  it("input field renders", () => {
    expect.assertions(1);
    const utils = render(<Navbar />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByTestId("input")).toBeTruthy();
  });
});
