import { render } from "@testing-library/react";

import Page from "./page";

describe("page tests", () => {
  it("product details page renders", () => {
    expect.assertions(1);

    const view = render(<Page />);

    expect(view).toBeTruthy();
  });
});
