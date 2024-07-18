import { render } from "@testing-library/react";

import Navbar from "./index";

describe("component rendering tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(<Navbar />);

    expect(true).toBeTruthy();
  });
});
