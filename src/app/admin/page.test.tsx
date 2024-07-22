import { render } from "../../test/utils";
import Page from "./page";

describe("page tests", () => {
  it("admin page renders", () => {
    expect.assertions(1);

    const view = render(<Page />);

    expect(view).toBeTruthy();
  });
});
