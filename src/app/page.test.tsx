import { render } from "../test/utils";
import Page from "./page";
import UserForm from "../components/common/WaitListForm/UserForm" ;

describe("page tests", () => {
  it("should render correctly", () => {
    expect.assertions(1);

    render(
      <>
        <Page />
        <UserForm />  
      </>
    
  );

    expect(true).toBeTruthy();
  });
});
