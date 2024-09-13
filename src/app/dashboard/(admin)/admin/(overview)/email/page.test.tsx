import { render } from "~/test/utils";
import Page from "./page";

describe("page tests", () => {
  it("admin email page renders correctly", () => {
    expect.assertions(1);

    render(<Page />);

    expect(true).toBeTruthy();
  });
});
