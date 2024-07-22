import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { vi } from "vitest";

import BlogCard from "./BlogCard";

const setScreenSize = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
};

describe("blog Card Template", () => {
  const properties = {
    tag: "Business",
    title: "5 Mistakes That kill your start-up before it takes off",
    description:
      " We often hear about the ENIAC, hailed as the first computer, but its story is just one thread in a rich tapestry woven by brilliant",
    authorName: "Rahul Sharma",
    date: "2022-02-02",
    link: "",
    authorPfP: "",
    blogImage: "",
    timeOfReading: 7,
  };

  describe("responsiveComponent", () => {
    beforeEach(() => {
      vi.resetModules();
    });

    it("renders correctly on mobile screens", () => {
      expect.assertions(2);
      setScreenSize(375);
      render(<BlogCard {...properties} />);
      const mobileElement = screen.getByTestId("mobile-element");
      expect(mobileElement).toBeInTheDocument();
      expect(mobileElement).toBeVisible();
    });
  });

  describe("page tests", () => {
    it("navbar renders", () => {
      expect.assertions(1);

      const view = render(<BlogCard {...properties} />);

      expect(view.baseElement).toBeInTheDocument();
    });
  });
});
