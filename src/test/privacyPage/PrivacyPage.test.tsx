import { render, screen } from "@testing-library/react";

import PrivacyPolicy from "~/app/legal/privacy-policy/page";

vi.mock(
  "../../components/layouts/PrivacyPolicy/constants/privacyPolicyData",
  () => ({
    getTableOfContents: () => [
      { href: "#section1", label: "Section 1" },
      { href: "#section2", label: "Section 2" },
    ],
    default: [
      { id: "section1", title: "Section 1", description: { text: "Text 1" } },
      { id: "section2", title: "Section 2", description: { text: "Text 2" } },
    ],
  }),
);

describe("the Privacy Policy Page", () => {
  it("renders without crashing", () => {
    expect.hasAssertions();
    render(<PrivacyPolicy />);
    expect(screen.getByText("sub page hero section")).toBeInTheDocument();
  });

  it("adds and removes CSS classes correctly", () => {
    expect.hasAssertions();
    const { unmount } = render(<PrivacyPolicy />);

    // Check if CSS classes are added
    const htmlElement = document.documentElement;
    const addedClasses = ["scroll-smooth", "scroll-pt-6", "md:scroll-pt-10"];
    for (const className of addedClasses) {
      expect(htmlElement.classList.contains(className)).toBeTruthy();
    }

    // Clean up and check if CSS classes are removed
    unmount();
    for (const className of addedClasses) {
      expect(htmlElement.classList.contains(className)).toBeFalsy();
    }
  });

  it("renders TableOfContent with correct props", () => {
    expect.hasAssertions();
    render(<PrivacyPolicy />);

    const sections = screen.getAllByRole("listitem");
    expect(sections).toHaveLength(2);

    // Check the link in the Table of Content
    const tocLinkSection1 = screen.getByRole("link", { name: "Section 1" });
    expect(tocLinkSection1).toBeInTheDocument();

    const tocLinkSection2 = screen.getByRole("link", { name: "Section 2" });
    expect(tocLinkSection2).toBeInTheDocument();

    // Check the header in the content section
    const contentHeaderSection1 = screen.getByRole("heading", {
      name: "Section 1",
    });
    expect(contentHeaderSection1).toBeInTheDocument();

    const contentHeaderSection2 = screen.getByRole("heading", {
      name: "Section 2",
    });
    expect(contentHeaderSection2).toBeInTheDocument();
  });

  it("renders PrivacyPolicyContent with correct props", () => {
    expect.hasAssertions();
    render(<PrivacyPolicy />);

    // Check if PrivacyPolicyContent is rendered
    const contentSections = screen.getAllByText(/Text/);
    expect(contentSections).toHaveLength(2);
    expect(screen.getByText("Text 1")).toBeInTheDocument();
    expect(screen.getByText("Text 2")).toBeInTheDocument();
  });
});
