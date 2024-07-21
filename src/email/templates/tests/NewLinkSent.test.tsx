import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import NewLinkSent from "../link/NewLinkSent";

const properties = {
  title: "New Activation Link Sent",
  name: "John Doe",
  image: "/images/link-sent.png",
  activationLink: "https://example.com/activate",
};

describe("newLinkSent Component", () => {
  it("renders correctly with given props", () => {
    expect.hasAssertions();
    render(<NewLinkSent {...properties} />);

    expect(screen.getByText(properties.title)).toBeInTheDocument();

    expect(screen.getByText(`Hi ${properties.name},`)).toBeInTheDocument();

    const image = screen.getByAltText("Email header");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", properties.image);

    const button = screen.getByRole("link", { name: /activate my account/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", properties.activationLink);
  });
});
