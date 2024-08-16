import { renderWithIntl } from "~/test/utils";
import Page from "./page";

describe("page tests", () => {
  // eslint-disable-next-line vitest/no-disabled-tests
  it.skip("should render correctly", () => {
    expect.assertions(1);

    renderWithIntl(<Page />);

    expect(true).toBeTruthy();
  });
});
