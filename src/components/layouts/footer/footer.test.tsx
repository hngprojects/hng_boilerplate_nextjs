import Footer from ".";

import { render } from "~/test/utils";

describe("page tests", () => {
  it("footer renders", () => {
    expect.assertions(1);

    const view = render(<Footer />);

    expect(view.baseElement).toBeInTheDocument();
  });
});
