import { render } from "~/test/utils";
import Faqs from "./index";

describe("accordion tests", () => {
  const originalEnvironment = process.env;

  beforeEach(() => {
    vi.clearAllMocks();
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

    render(<Faqs />);

    expect(true).toBeTruthy();
  });
});
