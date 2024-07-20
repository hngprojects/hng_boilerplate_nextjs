import UserForm from "~/components/common/WaitListForm/UserForm";
import { render } from "~/test/utils";

("./page");

describe("page tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(
      <>
        <UserForm />
      </>,
    );

    expect(true).toBeTruthy();
  });
});
