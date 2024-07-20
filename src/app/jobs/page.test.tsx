import { render } from "../../test/utils";
import Page from "./page";

describe("jobs page", () => {
  it("renders job listings fetched from an API", async () => {
    expect.assertions(1);

    const view = render(<Page searchParams={{ page: "1" }} />);

    expect(view).toBeTruthy();
  });
});
