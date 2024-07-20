import { render } from "@testing-library/react";

import MemberSidebar from "./MemberSidebar";

describe("member setting sidebar", () => {
  it("renders sidebar", () => {
    expect.assertions(1);
    const utils = render(<MemberSidebar />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(utils.getByTestId("nav")).toBeInTheDocument();
  });
});
