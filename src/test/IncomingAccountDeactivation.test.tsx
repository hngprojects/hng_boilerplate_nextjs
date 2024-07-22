import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import "@testing-library/jest-dom";

import IncomingAccountDeactivation from "~/email/templates/incoming-account-deactivation/IncomingAccountDeactivation";

const properties = {
  title: "Account Deactivation In",
  titleDeactivationDays: "Two Days!",
  name: "John Doe",
  image: "https://i.ibb.co/LPgCcpG/deactivation-logo.png",
  accessLinkHref: "",
  email: "johndoe@gmail.com",
  lastActive: "17th June, 2024 / 11:56pm",
  deactivationDate: "20th July, 2024 / 11:56pm",
};

describe("incomingAccountDeactivation template", () => {
  it("renders the component with provided properties", () => {
    expect.assertions(2);
    render(<IncomingAccountDeactivation {...properties} />);

    expect(screen.getByText("Hi John Doe,")).toBeInTheDocument();

    expect(screen.getByText("17th June, 2024 / 11:56pm")).toBeInTheDocument();
  });

  it("renders more texts with provided properties", () => {
    expect.assertions(3);
    render(<IncomingAccountDeactivation {...properties} />);

    expect(screen.getByText("Your deactivation deatails:")).toBeInTheDocument();

    expect(screen.getByText("Regards,")).toBeInTheDocument();
    expect(screen.getByText("Boilerplate")).toBeInTheDocument();
  });

  it("renders the image with the correct src and alt text", () => {
    expect.assertions(1);
    render(<IncomingAccountDeactivation {...properties} />);

    const img = screen.getByAltText("Deactivation logo");
    expect(img).toHaveAttribute(
      "src",
      "https://i.ibb.co/LPgCcpG/deactivation-logo.png",
    );
  });
});
