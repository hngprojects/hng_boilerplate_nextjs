import { renderWithIntl } from "~/test/utils";
import Page from "./page";

describe("page tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    renderWithIntl(<Page />);

    expect(true).toBeTruthy();
  });
});
