import { axe } from "jest-axe";
import { expect } from "vitest";

import Footer from "~/components/layouts/Footer";
import Navbar from "~/components/layouts/Navbar";
import { render } from "~/test/utils";
import Page from "./page";

describe("page tests", () => {
  const sizes = [
    { width: 375, height: 667 }, // iPhone 6
    { width: 768, height: 1024 }, // iPad
    { width: 1024, height: 768 }, // Desktop
  ];

  it("ensure the page renders correctly", () => {
    expect.assertions(1);

    render(<Page />);

    expect(true).toBeTruthy();
  });

  it("ensure the page renders correctly all required elements", () => {
    expect.assertions(2);
    // check that navbar is rendered in page
    expect(render(<Navbar />));
    // Check for footer
    expect(render(<Footer />));
  });

  it.each(sizes)(
    "should display correctly at $description size: $width x $height",
    async ({ width, height }) => {
      expect.assertions(2);

      window.innerWidth = width;
      window.innerHeight = height;
      window.dispatchEvent(new Event("resize"));

      const { container } = render(<Page />);
      expect(container).toBeInTheDocument();

      const results = await axe(container);
      expect(results.violations.length).toHaveLength(0);
    },
  );
});
