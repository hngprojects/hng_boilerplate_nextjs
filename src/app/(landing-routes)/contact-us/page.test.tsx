import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

import { render } from "~/test/utils";
import Page from "./page";

describe("page tests", () => {
  const renderWithSession = (component: ReactNode) => {
    return render(
      <SessionProvider session={undefined}>{component}</SessionProvider>,
    );
  };
  it("should render correctly", () => {
    expect.assertions(1);

    renderWithSession(<Page />);

    expect(true).toBeTruthy();
  });
});
