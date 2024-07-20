import { render } from "~/test/utils";
import ProductPage from "./page";

describe("page tests", () => {
  it("admin product page renders", () => {
    expect.assertions(1);

    const view = render(<ProductPage />);

    expect(view).toBeTruthy();
  });
});
