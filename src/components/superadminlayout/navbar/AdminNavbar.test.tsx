import { render } from "@testing-library/react";

import AdminNavbar from "./AdminNavbar";

describe("component rendering tests", () => {
  it("render help icon", () => {
    expect.assertions(1);
    const utils = render(<AdminNavbar />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByTestId("help")).toBeInTheDocument();
  });
  it("render bell icon", () => {
    expect.assertions(1);

    const utils = render(<AdminNavbar />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByTestId("bell")).toBeInTheDocument();
  });
  it("render chevron down icon", () => {
    expect.assertions(1);

    const utils = render(<AdminNavbar />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByTestId("chevronDown")).toBeInTheDocument();
  });
  it("input search icon", () => {
    expect.assertions(1);
    const utils = render(<AdminNavbar />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByTestId("search")).toBeInTheDocument();
  });
  it("input field has placeholder", () => {
    expect.assertions(1);
    const utils = render(<AdminNavbar />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByPlaceholderText("Search option...")).toBeInTheDocument();
  });

  it("input field renders", () => {
    expect.assertions(1);
    const utils = render(<AdminNavbar />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByTestId("input")).toBeInTheDocument();
  });

  it("avatar renders", () => {
    expect.assertions(1);
    const utils = render(<AdminNavbar />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByTestId("avatar")).toBeInTheDocument();
  });
});
