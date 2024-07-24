import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PrivacyPolicy from "~/app/(landing-routes)/privacy-policy/page";

// 

describe("PrivacyPolicy Component", () => {
    it("renders the SubPageHero", () => {
        expect.assertions(2);
        render(<PrivacyPolicy />);
        const heroHeading = screen.getByText("Privacy Policy");
        const heroDescription = screen.getByText("Achieve your dreams with us today");

        expect(heroHeading).toBeInTheDocument();
        expect(heroDescription).toBeInTheDocument();
    });

    it("renders the Breadcrumb", () => {
        expect.assertions(1);
        render(<PrivacyPolicy />);
        const breadcrumb = screen.getByRole("navigation");
        expect(breadcrumb).toBeInTheDocument();
    });

    it("renders the PrivacyPolicyContent", () => {
        expect.assertions(1);
        render(<PrivacyPolicy />);
        const content = screen.getByTestId("privacy-policy-content");
        expect(content).toBeInTheDocument();
    });

    it("renders the TableOfContent", () => {
        expect.assertions(1);
        render(<PrivacyPolicy />);
        const toc = screen.getByTestId("table-of-content");
        expect(toc).toBeInTheDocument();
    });
});
