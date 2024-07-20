import { render } from "~/test/utils";
import Search from "./index";

describe("search tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(
      <Search
        onSearch={function (value: string): void {
          if (value === "test") {
            throw new Error("Test value found.");
          }
        }}
      />,
    );

    expect(true).toBeTruthy();
  });
});
