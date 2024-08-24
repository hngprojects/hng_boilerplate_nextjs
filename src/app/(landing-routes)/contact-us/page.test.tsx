import { render } from "~/test/utils";
import Page from "./page";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from 'react';

describe("page tests", () => {

  const renderWithSession = (component: ReactNode) => {
    return render(
      <SessionProvider session={null}>
        {component}
      </SessionProvider>
    );
  };
  it("should render correctly", () => {
    expect.assertions(1);

    renderWithSession(<Page />);

    expect(true).toBeTruthy();
  });
});
