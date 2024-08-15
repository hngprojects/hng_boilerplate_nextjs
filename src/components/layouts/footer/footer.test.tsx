import Footer from ".";

import { renderWithIntl } from "~/test/utils";

describe("page tests", () => {
  it("footer renders", () => {
    expect.assertions(1);

    const view = renderWithIntl(<Footer />);

    expect(view.baseElement).toBeInTheDocument();
  });
});
