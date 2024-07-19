import { describe, test } from "vitest";

import { render } from "../../test/utils";
import Faqs from "./index";

describe("<Faqs />", () => {
  test("renders Faqs", () => {
    render(<Faqs />);
  });
});
