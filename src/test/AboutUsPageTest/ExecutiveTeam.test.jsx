import "@testing-library/jest-dom";

import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ExecutiveTeam from "../../app/AboutUs/ExecutiveTeam";

describe("executiveTeam component", () => {
  it("renders the main heading and subheading", () => {
    expect.hasAssertions();
    render(<ExecutiveTeam />);
    const mainHeading = screen.getByText(/the executive team/i);
    const subheading = screen.getByText(
      /meet our exclusive team that have been trained to meet your needs/i,
    );
    expect(mainHeading).toBeInTheDocument();
    expect(subheading).toBeInTheDocument();
  });

  it("renders the first two team cards with correct names and roles", () => {
    expect.hasAssertions();
    render(<ExecutiveTeam />);
    const johnCard = screen.getByText(/john abraham/i);
    const addisonCard = screen.getByText(/addison mark/i);
    const johnRole = screen.getByText(/business developer/i);
    const addisonRole = screen.getByText(/software engineer/i);

    expect(johnCard).toBeInTheDocument();
    expect(addisonCard).toBeInTheDocument();
    expect(johnRole).toBeInTheDocument();
    expect(addisonRole).toBeInTheDocument();
  });

  it("renders the last two team cards with correct names and roles", () => {
    expect.hasAssertions();
    render(<ExecutiveTeam />);
    const joyCard = screen.getByTestId(/joy tony/i);
    const philipCard = screen.getByTestId(/joshua philip/i);

    const joyRole = within(joyCard).getAllByText(/product manager/i);
    const philipRole = within(philipCard).getAllByText(/data analyst/i);

    expect(joyRole.length).toBeGreaterThan(0);
    expect(philipRole.length).toBeGreaterThan(0);
  });

  it("renders team card descriptions for the first two team members", () => {
    expect.hasAssertions();
    render(<ExecutiveTeam />);
    const johnDescription = screen.getByText(
      /john is a strategic product manager with a keen eye for market trends./i,
    );
    const addisonDescription = screen.getByText(
      /addison our skilled frontend developer, brings websites to life with clean code./i,
    );

    expect(johnDescription).toBeInTheDocument();
    expect(addisonDescription).toBeInTheDocument();
  });

  it("renders team card descriptions for the last two team members", () => {
    expect.hasAssertions();
    render(<ExecutiveTeam />);
    const joyDescription = screen.getByText(
      /joy is a passionate product manager driven by user experience./i,
    );
    const philipDescription = screen.getByText(
      /joshua, our data analyst, uses user data to optimize our boilerplates for performance./i,
    );

    expect(joyDescription).toBeInTheDocument();
    expect(philipDescription).toBeInTheDocument();
  });

  it("renders all social media icons for the first two team members", () => {
    expect.hasAssertions();
    render(<ExecutiveTeam />);
    const facebookIcons = screen.getAllByRole("button");
    const twitterIcons = screen.getAllByRole("button");
    const instagramIcons = screen.getAllByRole("button");

    expect(facebookIcons.length).toBeGreaterThanOrEqual(2);
    expect(twitterIcons.length).toBeGreaterThanOrEqual(2);
    expect(instagramIcons.length).toBeGreaterThanOrEqual(2);
  });

  it("renders all social media icons for the last two team members", () => {
    expect.hasAssertions();
    render(<ExecutiveTeam />);
    const facebookIcons = screen.getAllByRole("button");
    const twitterIcons = screen.getAllByRole("button");
    const instagramIcons = screen.getAllByRole("button");

    expect(facebookIcons.length).toBeGreaterThanOrEqual(2);
    expect(twitterIcons.length).toBeGreaterThanOrEqual(2);
    expect(instagramIcons.length).toBeGreaterThanOrEqual(2);
  });
});
