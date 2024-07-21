import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Email from "~/email/templates/activationFailed/activation-failed";

describe("email component", () => {
  it("renders with correct props", () => {
    expect.assertions(4);
    const properties = {
      name: "John Doe",
      title: "Activation Link Expired",
      image: "https://i.postimg.cc/1XY1dBhq/404-page-not-found-1-24-1.jpg",
    };

    render(<Email {...properties} />);

    expect(screen.getByText(`Welcome ${properties.name}`)).toBeInTheDocument();

    expect(screen.getByText(properties.title)).toBeInTheDocument();
    expect(screen.getByText(`Hi ${properties.name},`)).toBeInTheDocument();

    expect(
      screen.getByText("Send Another Activation Link"),
    ).toBeInTheDocument();

    expect(screen.getByText("Contact our customer support")).toHaveAttribute(
      "href",
      "https://example.com",
    );

    expect(screen.getByText("update your preferences")).toHaveAttribute(
      "href",
      "https://example.com",
    );
    expect(screen.getByText("unsubscribe from this list.")).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });
});
