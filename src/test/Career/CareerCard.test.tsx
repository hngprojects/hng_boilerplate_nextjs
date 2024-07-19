// components/CustomCard.test.tsx

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import "@testing-library/jest-dom";

import CareerCard from "~/components/common/CareerCard/CareerCard";

describe("customCard", () => {
  it("renders loading skeletons when isLoading is true", () => {
    expect.hasAssertions();

    render(<CareerCard isLoading={true} />);

    expect(screen.getAllByTestId("skeleton")).toHaveLength(5);
  });

  it("renders job information when isLoading is false", () => {
    expect.hasAssertions();

    const properties = {
      isLoading: false,
      jobTitle: "Frontend Developer",
      location: "San Francisco, CA",
      description: "We are seeking a talented Frontend Developer",
      amount: "$120,000/yr",
    };

    render(<CareerCard {...properties} />);

    expect(screen.getByText(properties.jobTitle)).toBeInTheDocument();
    expect(screen.getByText(properties.location)).toBeInTheDocument();
    expect(screen.getByText(properties.description)).toBeInTheDocument();
    expect(screen.getByText(properties.amount)).toBeInTheDocument();
    expect(screen.getByText("View Details")).toBeInTheDocument();
  });

  it("calls onViewDetails when View Details button is clicked", async () => {
    expect.hasAssertions();

    const onViewDetails = vi.fn();
    const user = userEvent.setup();

    render(
      <CareerCard
        isLoading={false}
        jobTitle="Test Job"
        onViewDetails={onViewDetails}
      />,
    );

    const button = screen.getByText("View Details");
    await user.click(button);

    expect(onViewDetails).toHaveBeenCalledTimes(1);
  });
});
