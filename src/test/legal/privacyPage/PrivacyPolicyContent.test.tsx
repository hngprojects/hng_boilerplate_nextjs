import { render, screen } from "@testing-library/react";

import privacyPolicyData from "~/components/layouts/Legal/PrivacyPolicy/constants/privacyPolicyData";
import PrivacyPolicyContent from "~/components/layouts/Legal/PrivacyPolicy/PrivacyPolicyContent";

describe("privacyPolicyContent", () => {
  it("renders all sections with correct titles and content", () => {
    expect.hasAssertions();
    const elementsToAssert = [];

    for (const section of privacyPolicyData) {
      elementsToAssert.push(section.title, section.description.text);

      if (section.description.list) {
        for (const item of section.description.list) {
          elementsToAssert.push(item.title, item.body);
        }
      }
    }

    expect.assertions(elementsToAssert.length);

    render(<PrivacyPolicyContent content={privacyPolicyData} />);

    for (const text of elementsToAssert) {
      expect(screen.getByText(text)).toBeInTheDocument();
    }
  });
});
