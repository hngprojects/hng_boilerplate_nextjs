import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TermsConditions from "~/app/(landing-routes)/terms-and-conditions/page";

// 

describe("TermsConditions Component", () => {
    it("renders the SubPageHero with correct heading and description", () => {
        render(<TermsConditions />);
        const subpageHero = screen.getByTestId("subpage-hero");
        expect(subpageHero).toBeInTheDocument();
        expect(subpageHero).toHaveTextContent("Terms and Conditions");
        expect(subpageHero).toHaveTextContent("Achieve your dreams with us today");
    });

    it("renders the Breadcrumb with correct links", () => {
        render(<TermsConditions />);
        const breadcrumb = screen.getByTestId("breadcrumb");
        expect(breadcrumb).toBeInTheDocument();
        expect(breadcrumb).toHaveTextContent("Home");
        expect(breadcrumb).toHaveTextContent("Legal Terms");
        expect(breadcrumb).toHaveTextContent("Terms and Conditions");
    });

    it("renders the Main component", () => {
        render(<TermsConditions />);
        const mainContent = screen.getByTestId("main-content");
        expect(mainContent).toBeInTheDocument();
    });
});
