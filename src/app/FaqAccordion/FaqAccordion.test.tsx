import { describe } from "vitest";

import { render } from "../../test/utils";
import FaqAccordion from "./index";

describe("<FaqAccordion />", () => {
  it("renders accordion", () => {
    render(<FaqAccordion />);
  });
});
