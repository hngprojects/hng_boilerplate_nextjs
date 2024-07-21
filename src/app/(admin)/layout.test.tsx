import { render, screen } from "@testing-library/react";

import AdminLayout from "./layout";

const renderComponents = () => {
  render(
    <AdminLayout>
      <div>Test page</div>
    </AdminLayout>,
  );

  return {
    navbar: screen.getByRole("navbar"),
    children: screen.getByRole("children"),
    sidebar: screen.getByRole("sidebar"),
  };
};

describe("component rendering tests", () => {
  it("navbar renders", () => {
    expect.assertions(1);
    const { navbar } = renderComponents();
    expect(navbar).toBeInTheDocument();
  });

  it("children renders", () => {
    expect.assertions(1);
    const { children } = renderComponents();
    expect(children).toBeInTheDocument();
  });

  it("sidebar renders", () => {
    expect.assertions(1);
    const { sidebar } = renderComponents();
    expect(sidebar).toBeInTheDocument();
  });
});
