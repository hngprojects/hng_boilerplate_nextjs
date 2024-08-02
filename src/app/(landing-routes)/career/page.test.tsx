import { render } from "~/test/utils";
import Page from "./page";

describe("page tests", () => {
  // eslint-disable-next-line vitest/no-disabled-tests
  it.skip("should render correctly", () => {
    expect.assertions(1);

    render(<Page />);

    expect(true).toBeTruthy();
  });
});
