import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import Hero from "~/components/layouts/homepage/Hero";

describe("hero Component", () => {
  it("renders the hero heading", () => {
    expect.assertions(1); // Ensure exactly one assertion

    render(<Hero />);
    const heading = screen.getByRole("heading", {
      name: /focus on what matters. we've got the foundation covered./i,
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the hero paragraph", () => {
    expect.assertions(1); // Ensure exactly one assertion

    render(<Hero />);
    const paragraph = screen.getByText(
      /streamline your processes with a boilerplate built for efficiency and optimal productivity./i,
    );
    expect(paragraph).toBeInTheDocument();
  });

  it("renders the get started button", () => {
    expect.assertions(1); // Ensure exactly one assertion

    render(<Hero />);
    const button = screen.getByRole("button", { name: /get started/i });
    expect(button).toBeInTheDocument();
  });

  it("renders the HeroCheckMark component", () => {
    expect.assertions(1); // Ensure exactly one assertion

    render(<Hero />);
    const checkMark = screen.getByTestId("hero-checkmark");
    expect(checkMark).toBeInTheDocument();
  });

  it("renders the HeroChat component", () => {
    expect.assertions(1); // Ensure exactly one assertion

    render(<Hero />);
    const chat = screen.getByTestId("hero-chat");
    expect(chat).toBeInTheDocument();
  });

  it("renders the HeroBoilerPlate component", () => {
    expect.assertions(1); // Ensure exactly one assertion

    render(<Hero />);
    const boilerPlate = screen.getByTestId("hero-boilerplate");
    expect(boilerPlate).toBeInTheDocument();
  });

  it("renders the Swiper component", () => {
    expect.assertions(1); // Ensure exactly one assertion

    render(<Hero />);
    const swiper = screen.getByTestId("swiper");
    expect(swiper).toBeInTheDocument();
  });

  it("renders all Swiper slides", () => {
    expect.assertions(1); // Ensure exactly one assertion

    render(<Hero />);
    const slides = screen.getAllByAltText("Hero Image");
    expect(slides).toHaveLength(4);
  });
});
