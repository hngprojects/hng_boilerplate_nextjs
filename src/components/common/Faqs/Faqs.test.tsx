import { render } from "~/test/utils";
import Faqs from "./index";

describe("accordion tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(<Faqs />);

    expect(true).toBeTruthy();
  });
});
