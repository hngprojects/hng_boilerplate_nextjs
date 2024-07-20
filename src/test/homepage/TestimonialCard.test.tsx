import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import TestimonialCard from "~/components/layouts/homepage/TestimonialCard";

describe("testimonialCard Component", () => {
  const properties = {
    image: "/images/testimonial-image.svg",
    content:
      "“I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!”",
    name: "John Doe",
    stack: "Full Stack Developer",
  };

  it("renders the testimonial content", () => {
    expect.assertions(1);

    render(<TestimonialCard {...properties} />);
    const content = screen.getByText(
      /i've been using this web hosting service for over a year and i'm really impressed with the uptime and support./i,
    );
    expect(content).toBeInTheDocument();
  });

  it("renders the testimonial name", () => {
    expect.assertions(1);

    render(<TestimonialCard {...properties} />);
    const name = screen.getByText(properties.name);
    expect(name).toBeInTheDocument();
  });

  it("renders the testimonial stack", () => {
    expect.assertions(1);

    render(<TestimonialCard {...properties} />);
    const stack = screen.getByText(properties.stack);
    expect(stack).toBeInTheDocument();
  });

  it("renders the image with the correct src and alt attributes", () => {
    expect.assertions(2);

    render(<TestimonialCard {...properties} />);
    const image = screen.getByAltText("testimonial-image");
    expect(image).toHaveAttribute("src", properties.image);
    expect(image).toHaveAttribute("alt", "testimonial-image");
  });

  it("renders the Rating component", () => {
    expect.assertions(1);

    render(<TestimonialCard {...properties} />);
    const rating = screen.getByTestId("rating");
    expect(rating).toBeInTheDocument();
  });
});
