import PageHeader from ".";

import { render, screen } from "~/test/utils";

describe("page header test", () => {
  it("page header renders title and description", () => {
    expect.assertions(2);
    render(<PageHeader title="Page title" description="Page description" />);
    expect(screen.getByTestId("page-title")).toHaveTextContent("Page title");
    expect(screen.getByTestId("page-description")).toHaveTextContent(
      "Page description",
    );
  });
});
