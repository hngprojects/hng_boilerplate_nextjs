/* eslint-disable testing-library/prefer-screen-queries */
import Navbar from ".";

import { render } from "~/test/utils";

describe("page tests", () => {
  it("navbar renders", () => {
    expect.assertions(1);

    const view = render(<Navbar />);

    expect(view.baseElement).toBeInTheDocument();
  });

  it("logo renders", () => {
    expect.assertions(1);

    const view = render(<Navbar />);

    expect(view.getByTestId("logo")).toBeInTheDocument();
  });
});
