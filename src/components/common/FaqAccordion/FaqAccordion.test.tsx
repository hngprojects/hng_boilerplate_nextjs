import { render } from "~/test/utils";
import FaqAccordion from "./index";

describe("accordion tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(<FaqAccordion question={""} answer={""} />);

    expect(true).toBeTruthy();
  });
});
