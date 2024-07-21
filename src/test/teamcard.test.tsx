import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import TeamCard from "~/components/common/TeamCard/teamcard";

describe("teamcard component", () => {
  const defaultProps = {
    name: "John Doe",
    role: "Software Engineer",
    description:
      "John is a strategic product manager with a keen eye for market trends.",
    imageSrc: "/john.jpg",
    imageAlt: "John Doe",
  };

  it("renders the name, role, and description", () => {
    expect.assertions(3);
    render(<TeamCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.name)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.role)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
  });

  it("renders the image", () => {
    expect.assertions(1);
    render(<TeamCard {...defaultProps} />);
    expect(screen.getByAltText(defaultProps.imageAlt)).toBeInTheDocument();
  });

  it("renders the Facebook, Instagram, and Twitter links if provided", () => {
    expect.assertions(3);
    render(
      <TeamCard
        {...defaultProps}
        facebookURL="https://facebook.com"
        instagramURL="https://instagram.com"
        twitterURL="https://twitter.com"
      />,
    );
    expect(screen.getByRole("link", { name: /facebook/i })).toHaveAttribute(
      "href",
      "https://facebook.com",
    );
    expect(screen.getByRole("link", { name: /instagram/i })).toHaveAttribute(
      "href",
      "https://instagram.com",
    );
    expect(screen.getByRole("link", { name: /twitter/i })).toHaveAttribute(
      "href",
      "https://twitter.com",
    );
  });
});
