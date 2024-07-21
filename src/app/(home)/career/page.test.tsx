import { render, screen } from "../../../test/utils";
import Page from "./page";

describe("jobs page", () => {
  it("renders job listings fetched from an API", async () => {
    expect.assertions(1);

    const PreloadPage = await Page({});
    const view = render(PreloadPage);

    expect(view).toBeTruthy();
  });
  describe("job listings component", () => {
    it("renders job listings fetched from an API", async () => {
      expect.assertions(4);

      const PreloadPage = await Page({});
      const view = render(PreloadPage);

      const listingDiv = screen.getByTestId("job-listings");

      expect(view).toBeTruthy();
      expect(listingDiv).toBeTruthy();
      expect(listingDiv.children).toBeDefined();
      expect(listingDiv.children.length).toBeGreaterThan(0);
    });

    it("paginates job listings", async () => {
      expect.assertions(4);

      const PreloadPage = await Page({});
      const view = render(PreloadPage);

      const firstButton = screen.getByTestId("first-button");
      const secondButton = screen.getByTestId("second-button");
      const thirdButton = screen.getByTestId("third-button");

      expect(view).toBeTruthy();
      expect(firstButton.textContent).toBe("1");
      expect(secondButton.textContent).toBe("2");
      expect(thirdButton.textContent).toBe("3");
    });

    it("should have responsive class", async () => {
      expect.assertions(2);

      const PreloadPage = await Page({});
      const view = render(PreloadPage);

      const listingDiv = screen.getByTestId("job-listings");

      expect(view).toBeTruthy();
      expect(listingDiv.className).toBe(
        "grid grid-cols-1 gap-y-5 sm:grid-cols-2",
      );
    });
  });
});
