import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";

import TableData from "~/components/common/Table";

interface TableDataItem {
  id: number;
  name: string;
  price: number;
  totalSales: number;
  status: string;
  createdAt: string;
}

const data: TableDataItem[] = [
  {
    id: 1,
    name: "Hypernova Headphones",
    price: 129.99,
    status: "Draft",
    totalSales: 25,
    createdAt: "2024-07-16 10:35AM",
  },
];

describe("tableData component", () => {
  it("renders the table header with correct columns", () => {
    expect.assertions(6);
    render(<TableData />);

    const columnHeaders = screen.getAllByRole("columnheader");
    expect(columnHeaders).toHaveLength(6);
    expect(columnHeaders[0]).toHaveTextContent("Name");
    expect(columnHeaders[1]).toHaveTextContent("Price");
    expect(columnHeaders[2]).toHaveTextContent("Total sales");
    expect(columnHeaders[3]).toHaveTextContent("Status");
    expect(columnHeaders[4]).toHaveTextContent("Created at");
    expect(columnHeaders[5]).toHaveTextContent("Action");
  });

  it("renders the table body with data from props", () => {
    expect.assertions(5);
    render(<TableData />);

    for (const item of data) {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.price.toString())).toBeInTheDocument();
      expect(screen.getByText(item.totalSales.toString())).toBeInTheDocument();
      expect(screen.getByText(item.status)).toBeInTheDocument();
      expect(screen.getByText(item.createdAt)).toBeInTheDocument();
    }
  });

  it("renders the action icon using Next/Image", () => {
    expect.assertions(1);
    render(<TableData />);

    const image = screen.getByAltText("action button");
    expect(image).toBeInTheDocument();
  });
});
