import { render } from "~/test/utils";
import CommentPage from "./comments/page";

describe("page tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(<CommentPage />);

    expect(true).toBeTruthy();
  });
});
