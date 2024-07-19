import { describe, test } from "vitest";

import { render } from "../../test/utils";
import Search from "./index";

describe("<Search />", () => {
  test("renders search", () => {
    render(<Search />);
  });
});
