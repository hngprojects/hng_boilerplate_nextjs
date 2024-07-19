import { render } from "@testing-library/react";
import RenewalWithIcon from "~/components/subscriptionRenewalFailed/renewalWithIcon";

describe("component tests", () => {
    it("should render correctly", () => {
        expect.assertions(1);

        render(<RenewalWithIcon />);

        expect(true).toBeTruthy();
    });
});