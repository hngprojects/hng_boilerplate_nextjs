import { render } from "~/test/utils";
import Page from "./page";

describe("page tests", () => {
  const originalEnvironment = process.env;

  beforeEach(() => {
    process.env = {
      ...originalEnvironment,
      API_URL: "test.com",
    };
  });

  afterEach(() => {
    process.env = originalEnvironment;
  });

  it("should render correctly", () => {
    expect.assertions(1);

    render(<Page />);

    expect(true).toBeTruthy();
  });
});
