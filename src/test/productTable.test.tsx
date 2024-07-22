import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it } from "vitest";

import TableData from "~/components/common/Table";

const data = [
  {
    id: 1,
    name: "Hypernova Headphones",
    price: 129.99,
    status: "Draft",
    totalSales: 25,
    createdAt: "2024-07-16 10:35AM",
  },
  {
    id: 2,
    name: "Hypernova Headphones",
    price: 129.99,
    status: "Active",
    totalSales: 25,
    createdAt: "2024-07-16 10:35AM",
  },
  {
    id: 3,
    name: "Hypernova Headphones",
    price: 129.99,
    status: "Active",
    totalSales: 25,
    createdAt: "2024-07-16 10:35AM",
  },
  {
    id: 4,
    name: "Hypernova Headphones",
    price: 129.99,
    status: "Draft",
    totalSales: 25,
    createdAt: "2024-07-16 10:35AM",
  },
];

describe("tableData Component", () => {
  it("renders correctly", () => {
    expect.assertions(6);
    render(<TableData />);

    // Check if the table headers are rendered
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Total sales")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();
    expect(screen.getByText("Created at")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();

    for (const item of data) {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.price.toString())).toBeInTheDocument();
      expect(screen.getByText(item.totalSales.toString())).toBeInTheDocument();
      expect(screen.getByText(item.status)).toBeInTheDocument();
      expect(screen.getByText(item.createdAt)).toBeInTheDocument();
    }

    const images = screen.getAllByAltText("action button");
    expect(images).toHaveLength(data.length);
  });

  it("renders the correct number of table rows", () => {
    expect.assertions(1);

    render(<TableData />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(data.length + 1);
  });
});
