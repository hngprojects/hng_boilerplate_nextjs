import { render, screen, within } from "@testing-library/react";

import "@testing-library/jest-dom";

// Test hero component
import {
  Blog,
  CoreValues,
  ExecutiveTeam,
  Hero,
  Mission,
  Service,
  Vision,
} from "../../components/layouts/AboutUs";

// Adjust the import path accordingly

describe("hero component", () => {
  it("renders the heading", () => {
    expect.assertions(1);
    render(<Hero />);
    const heading = screen.getByText(/about us/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the subheading", () => {
    expect.assertions(1);
    render(<Hero />);
    const subheading = screen.getByText(/more than just a boilerplate/i);
    expect(subheading).toBeInTheDocument();
  });

  it("renders the description", () => {
    expect.assertions(1);
    render(<Hero />);
    const description = screen.getByText(/welcome to hng boilerplate/i);
    expect(description).toBeInTheDocument();
  });

  it("renders the hero image", () => {
    expect.assertions(1);
    render(<Hero />);
    const heroImage = screen.getByAltText(/hero_image/i);
    expect(heroImage).toBeInTheDocument();
  });

  it("renders the dot images", () => {
    expect.assertions(1);
    render(<Hero />);
    const dotImages = screen.getAllByAltText(/dot/i);
    expect(dotImages).toHaveLength(4);
  });
});

// Test blog component
describe("blog component", () => {
  it("renders the Blog component with heading content", () => {
    expect.hasAssertions();
    render(<Blog />);
    // Check for all headings
    expect(screen.getByText("10 years")).toBeInTheDocument();
    expect(screen.getByText("75,000+")).toBeInTheDocument();
    expect(screen.getByText("100k+")).toBeInTheDocument();
    expect(screen.getByText("1.2m+")).toBeInTheDocument();
  });
});

describe("blog component", () => {
  it("renders the Blog component with description content", () => {
    expect.assertions(4);
    render(<Blog />);
    // Check for all descriptions
    expect(screen.getByText("In Business")).toBeInTheDocument();
    expect(screen.getByText("Customers")).toBeInTheDocument();
    expect(screen.getByText("Monthly Blog Readers")).toBeInTheDocument();
    expect(screen.getByText("Social Follower")).toBeInTheDocument();
  });
});

// Test Service Section
describe("service component", () => {
  it("renders the Our Services heading", () => {
    expect.assertions(1);
    render(<Service />);
    const heading = screen.getByText(/our services/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the subheading", () => {
    expect.assertions(1);
    render(<Service />);
    const subheading = screen.getByText(/trained to give you the best/i);
    expect(subheading).toBeInTheDocument();
  });

  it("renders the contact button", () => {
    expect.assertions(1);
    render(<Service />);
    const button = screen.getByText(/contact us/i);
    expect(button).toBeInTheDocument();
  });

  it("renders the description text", () => {
    expect.assertions(1);
    render(<Service />);
    const description = screen.getByText(/since our founding in/i);
    expect(description).toBeInTheDocument();
  });
});

// Test Mission Section

describe("mission component", () => {
  it("renders the main mission heading and subheading for mobile view", () => {
    expect.assertions(2);
    render(<Mission />);
    const missionHeading = screen.getByTestId(/mission mobile/i);
    const subheading = screen.getByTestId(/subheading mobile/i);
    expect(missionHeading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();
  });

  it("renders the mission description for mobile view", () => {
    expect.assertions(1);
    render(<Mission />);
    const description = screen.getByTestId(/description mobile/i);
    expect(description).toBeInTheDocument();
  });

  it("renders the mission image and mask images", () => {
    expect.assertions(4);
    render(<Mission />);
    const missionImage = screen.getByAltText("mission");
    const maskImages = screen.getAllByAltText("mask");
    expect(missionImage).toBeInTheDocument();
    expect(maskImages).toHaveLength(2); // There should be two mask images
    for (const image of maskImages) expect(image).toBeInTheDocument();
  });

  it("renders the main mission heading and subheading for desktop view", () => {
    expect.assertions(2);
    render(<Mission />);
    const missionHeadingDesktop = screen.getAllByText(/our mission/i);
    const subheadingDesktop = screen.getAllByText(
      /we are committed to giving you the best/i,
    );
    expect(missionHeadingDesktop.length).toBeGreaterThan(0);
    expect(subheadingDesktop.length).toBeGreaterThan(0);
  });

  it("renders the mission description for desktop view", () => {
    expect.assertions(1);
    render(<Mission />);
    const descriptionDesktop = screen.getAllByText(
      /at hng boilerplate, we are dedicated to exceeding your expectations. we strive to understand your unique needs and challenges, providing tailored solutions that drive real results and empower your success./i,
    );
    expect(descriptionDesktop.length).toBeGreaterThan(0);
  });
});

// test Vision component
describe("vision component", () => {
  it("renders the heading", () => {
    expect.assertions(1);
    render(<Vision />);
    const heading = screen.getByTestId(/vision/i);
    expect(heading).toBeInTheDocument();
  });

  it("renders the subheading", () => {
    expect.assertions(1);
    render(<Vision />);
    const subheading = screen.getByText(
      /leading the way, redefining industries/i,
    );
    expect(subheading).toBeInTheDocument();
  });

  it("renders the vision description", () => {
    expect.assertions(1);
    render(<Vision />);
    const description = screen.getByText(
      /at hng boilerplate, our vision is to revolutionize the industry landscape/i,
    );
    expect(description).toBeInTheDocument();
  });

  it("renders the vision image", () => {
    expect.assertions(1);
    render(<Vision />);
    const visionImage = screen.getByAltText(/mission/i);
    expect(visionImage).toBeInTheDocument();
  });

  it("renders the mask images", () => {
    expect.assertions(3);
    render(<Vision />);
    const maskImages = screen.getAllByAltText(/mask/i);
    expect(maskImages).toHaveLength(2);
    for (const mask of maskImages) {
      expect(mask).toBeInTheDocument();
    }
  });
});

// Core Values
describe("coreValues component", () => {
  it("renders the main heading", () => {
    expect.assertions(1);
    render(<CoreValues />);
    const mainHeading = screen.getByRole("heading", {
      name: /our core values/i,
    });
    expect(mainHeading).toBeInTheDocument();
  });

  it("renders the main description", () => {
    expect.assertions(1);
    render(<CoreValues />);
    const description = screen.getByText(
      /our value shapes the core of our organization, and defines the character of our industry/i,
    );
    expect(description).toBeInTheDocument();
  });

  describe("renders the Integrity section", () => {
    it("renders the heading", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const heading = screen.getByRole("heading", { name: /integrity/i });
      expect(heading).toBeInTheDocument();
    });

    it("renders the description", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const description = screen.getByText(
        /we uphold the highest ethical standards in everything we do/i,
      );
      expect(description).toBeInTheDocument();
    });
  });

  describe("renders the Customer Centricity section", () => {
    it("renders the heading", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const heading = screen.getByRole("heading", {
        name: /customer centricity/i,
      });
      expect(heading).toBeInTheDocument();
    });

    it("renders the description", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const description = screen.getByText(
        /our customers are at the heart of our business/i,
      );
      expect(description).toBeInTheDocument();
    });
  });

  describe("renders the Innovation section", () => {
    it("renders the heading", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const heading = screen.getByRole("heading", { name: /innovation/i });
      expect(heading).toBeInTheDocument();
    });

    it("renders the description", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const description = screen.getByText(
        /we embrace a culture of continuous improvement and creativity/i,
      );
      expect(description).toBeInTheDocument();
    });
  });

  describe("renders the Excellence section", () => {
    it("renders the heading", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const heading = screen.getByRole("heading", { name: /excellence/i });
      expect(heading).toBeInTheDocument();
    });

    it("renders the description", () => {
      expect.assertions(1);
      render(<CoreValues />);
      const description = screen.getByText(
        /we are committed to delivering exceptional quality in everything we do/i,
      );
      expect(description).toBeInTheDocument();
    });
  });
});

// Test for Executive team component

describe("executiveTeam component", () => {
  it("renders the main heading and description", () => {
    expect.assertions(2);
    render(<ExecutiveTeam />);
    const heading = screen.getByRole("heading", {
      name: /the executive team/i,
    });
    const description = screen.getByText(
      /meet our exclusive team that have been trained to meet your needs./i,
    );
    expect(heading).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("renders John Abraham's section with name, role, description, and social media icons", () => {
    expect.assertions(5);
    render(<ExecutiveTeam />);
    const johnSection = screen.getByTestId("johnSection");
    expect(johnSection).toBeInTheDocument();
    expect(within(johnSection).getByText(/john abraham/i)).toBeInTheDocument();
    expect(
      within(johnSection).getByText(/business developer/i),
    ).toBeInTheDocument();
    expect(
      within(johnSection).getByText(
        /john is a strategic product manager with a keen eye for market trends./i,
      ),
    ).toBeInTheDocument();
    const socialMediaIcons = within(johnSection).getAllByRole("img", {
      name: /facebook|instagram|twitter/i,
    });
    expect(socialMediaIcons).toHaveLength(3);
  });

  it("renders Addison Mark's section with name, role, description, and social media icons", () => {
    expect.assertions(5);
    render(<ExecutiveTeam />);
    const addisonSection = screen.getByTestId("addisonSection");
    expect(addisonSection).toBeInTheDocument();
    expect(
      within(addisonSection).getByText(/addison mark/i),
    ).toBeInTheDocument();
    expect(
      within(addisonSection).getByText(/software engineer/i),
    ).toBeInTheDocument();
    expect(
      within(addisonSection).getByText(
        /addison our skilled frontend developer, brings websites to life with clean code./i,
      ),
    ).toBeInTheDocument();
    const socialMediaIcons = within(addisonSection).getAllByRole("img", {
      name: /facebook|instagram|twitter/i,
    });
    expect(socialMediaIcons).toHaveLength(3);
  });

  it("renders Joy Tony's section with name, role, description, and social media icons", () => {
    expect.assertions(5);
    render(<ExecutiveTeam />);
    const joySection = screen.getByTestId("joySection");
    expect(joySection).toBeInTheDocument();
    expect(within(joySection).getByText(/joy tony/i)).toBeInTheDocument();
    expect(
      within(joySection).getByTestId(/product manager/i),
    ).toBeInTheDocument();
    expect(
      within(joySection).getByText(
        /joy is a passionate product manager driven by user experience./i,
      ),
    ).toBeInTheDocument();
    const socialMediaIcons = within(joySection).getAllByRole("img", {
      name: /facebook|instagram|twitter/i,
    });
    expect(socialMediaIcons).toHaveLength(3);
  });

  it("renders Johua Philip's section with name, role, description, and social media icons", () => {
    expect.assertions(5);
    render(<ExecutiveTeam />);
    const philipSection = screen.getByTestId("philipSection");
    expect(philipSection).toBeInTheDocument();
    expect(
      within(philipSection).getByText(/johua philip/i),
    ).toBeInTheDocument();
    expect(
      within(philipSection).getByTestId(/data analyst/i),
    ).toBeInTheDocument();
    expect(
      within(philipSection).getByText(
        /joshua, our data analyst, uses user data to optimize our boilerplates for performance./i,
      ),
    ).toBeInTheDocument();
    const socialMediaIcons = within(philipSection).getAllByRole("img", {
      name: /facebook|instagram|twitter/i,
    });
    expect(socialMediaIcons).toHaveLength(3);
  });
});
