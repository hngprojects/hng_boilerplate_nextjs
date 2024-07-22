import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import SubscriptionAndPlan from "./page";

// Mock the user data
vi.mock("~/app/api/userdata", () => ({
  managementData: [
    { title: "Team Security", value: "../../../public/icon.svg", id: "1" },
    { title: "Data Backup", value: "../../../public/icon.svg", id: "2" },
    { title: "HIPAA Compliance", value: "../../../public/icon.svg", id: "3" },
  ],
  projectData: [
    { title: "Projects", value: "Up to 5", id: "4" },
    { title: "File Upload", value: "20gb", id: "5" },
    { title: "User Account", value: "10", id: "6" },
    { title: "Terms", value: "Unlimited", id: "7" },
  ],
  sharingData: [
    { title: "Integration", value: "../../../public/icon.svg", id: "8" },
    { title: "Guest", value: "../../../public/icon.svg", id: "9" },
    { title: "Page Analysis", value: "../../../public/icon.svg", id: "10" },
    { title: "Task Management", value: "../../../public/icon.svg", id: "11" },
  ],
  supportData: [
    { title: "Priority Support", value: "../../../public/icon.svg", id: "12" },
    { title: "Customer Support", value: "../../../public/icon.svg", id: "3" },
  ],
}));

describe("subscriptionAndPlan Component", () => {
  it("renders current plan section", () => {
    expect.assertions(1);
    render(<SubscriptionAndPlan />);
    const currentPlans = screen.getAllByText("Current Plan");
    expect(currentPlans).toHaveLength(1);
  });

  it("renders project management section with correct data", () => {
    expect.assertions(3);
    render(<SubscriptionAndPlan />);
    expect(screen.getByText("Project Management")).toBeInTheDocument();
    expect(screen.getByText("User Account")).toBeInTheDocument();
    expect(screen.getByText("Terms")).toBeInTheDocument();
  });

  it("renders sharing and collaboration section with correct data", () => {
    expect.assertions(2);
    render(<SubscriptionAndPlan />);
    expect(screen.getByText("Sharing and collaboration")).toBeInTheDocument();
    expect(screen.getByAltText("Integration")).toBeInTheDocument();
  });

  it("renders management and security section with correct data", () => {
    expect.assertions(2);
    render(<SubscriptionAndPlan />);
    expect(screen.getByText("Management and security")).toBeInTheDocument();
    expect(screen.getByAltText("Team Security")).toBeInTheDocument();
  });

  it("renders support section with correct data", () => {
    expect.assertions(2);
    render(<SubscriptionAndPlan />);
    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByAltText("Customer Support")).toBeInTheDocument();
  });

  it("renders recent section with correct data", () => {
    expect.assertions(3);
    render(<SubscriptionAndPlan />);
    expect(screen.getByText("Recent")).toBeInTheDocument();
    expect(screen.getByText("7-7-24")).toBeInTheDocument();
    expect(screen.getByText("paid")).toBeInTheDocument();
  });
});
