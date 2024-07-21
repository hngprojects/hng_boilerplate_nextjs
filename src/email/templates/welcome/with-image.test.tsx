import { render, screen } from "@testing-library/react";

import {
  BUTTON_TEST_ID,
  EMAIL_WITH_IMAGE_TEST_ID,
  IMAGES_TEST_ID,
  PERSONALIZED_NAME_TEST_ID,
  WelcomeWithImage,
} from "./with-image";

const highlights = {
  title: "Here’s what you can look forward to",
  body: [
    {
      item: "Exclusive Offers",
      description:
        "Enjoy special promotions and discounts available only to our members.",
    },
    {
      item: "24/7 Support",
      description: "To help you at any time",
    },
    {
      item: "Secure and reliable",
      description: "Platform to keep your products safe",
    },
  ],
};

const ComponentProperties = {
  name: "John Doe",
  main_heading: "Welcome to Boilerplate",
  sub_heading: "Get started with us today",
  description:
    "We're thrilled to have you join us. Experience quality and innovation like never before.  Our product is made to fit your needs and make your life easier.",
  action_url: "https://boilerplate-weblink.com",
  tracking_parameters:
    "?utm_source=email&utm_medium=welcome&utm_campaign=onboarding",
  cta_text: "Learn more about us",
  app_name: "Boilerplate",
};

describe("email Template For Welcome With Image", () => {
  it("renders email template", async () => {
    expect.hasAssertions();
    render(
      <WelcomeWithImage
        name={ComponentProperties.name}
        main_heading={ComponentProperties.main_heading}
        sub_heading={ComponentProperties.sub_heading}
        description={ComponentProperties.description}
        with_highlights={true}
        highlights={highlights}
        action_url={ComponentProperties.action_url}
        tracking_parameters={ComponentProperties.tracking_parameters}
        cta_text={ComponentProperties.cta_text}
        app_name={ComponentProperties.app_name}
      />,
    );

    //Ensure all elements render correctly.
    const EmailTemplate = screen.getByTestId(EMAIL_WITH_IMAGE_TEST_ID);
    expect(EmailTemplate).toBeInTheDocument();

    //Ensure the image are rendered correctly.
    const image = screen.getByTestId(IMAGES_TEST_ID);
    expect(image).toBeInTheDocument();

    //Ensure the functionality of the CTA.
    const button = screen.getByTestId(BUTTON_TEST_ID);
    expect(button).toHaveAttribute(
      "href",
      `${ComponentProperties.action_url}${ComponentProperties.tracking_parameters}`,
    );

    //Asserts that the personalized name is rendered correctly.
    const element = screen.getByTestId(PERSONALIZED_NAME_TEST_ID);
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent("John Doe");
  });
});
