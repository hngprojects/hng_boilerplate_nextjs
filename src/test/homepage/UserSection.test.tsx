import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import UserSection from "~/components/layouts/homepage/UserSection";

describe("userSection Component", () => {
  it("renders the heading with the correct text", () => {
    expect.assertions(1);

    render(<UserSection />);
    const heading = screen.getByRole("heading", {
      name: /more than 200 users make use of our boilerplate/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the Unsplash logo", () => {
    expect.assertions(1);

    render(<UserSection />);
    const unsplash = screen.getByTestId("unsplash-logo");
    expect(unsplash).toBeInTheDocument();
  });

  it("renders the Notion logo", () => {
    expect.assertions(1);

    render(<UserSection />);
    const notion = screen.getByTestId("notion-logo");
    expect(notion).toBeInTheDocument();
  });

  it("renders the Intercom logo", () => {
    expect.assertions(1);

    render(<UserSection />);
    const intercom = screen.getByTestId("intercom-logo");
    expect(intercom).toBeInTheDocument();
  });

  it("renders the Descript logo", () => {
    expect.assertions(1);

    render(<UserSection />);
    const descript = screen.getByTestId("descript-logo");
    expect(descript).toBeInTheDocument();
  });

  it("renders the Grammarly logo", () => {
    expect.assertions(1);

    render(<UserSection />);
    const grammarly = screen.getByTestId("grammarly-logo");
    expect(grammarly).toBeInTheDocument();
  });
});
