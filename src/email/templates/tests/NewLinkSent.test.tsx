/* eslint-disable vitest/prefer-expect-assertions */
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import NewLinkSent from "../link/NewLinkSent";

const properties = {
  title: "New Activation Link Sent",
  name: "John Doe",
  image: "/new-link-sent-icon.svg",
  activationLink: "https://github.com",
};

describe("newLinkSent Component", () => {
  it("renders correctly with given props", () => {
    render(<NewLinkSent {...properties} />);

    // Check if the title is rendered
    expect(screen.getByText(properties.title)).toBeInTheDocument();

    // Check if the name is rendered
    expect(screen.getByText(`Hi ${properties.name},`)).toBeInTheDocument();

    // Check if the image is rendered
    const image = screen.getByAltText("Email header");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", properties.image);

    // Check if the activation link button is rendered
    const button = screen.getByRole("link", { name: /activate my account/i });
    expect(button).toBeInTheDocument();
    // eslint-disable-next-line vitest/max-expects
    expect(button).toHaveAttribute("href", properties.activationLink);
  });
});
