import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TableData from "~/components/common/Table";

describe("tableData component", () => {
  it("renders the table headers correctly", () => {
    expect.assertions(6);

    render(<TableData />);

    const headers = [
      "Name",
      "Price",
      "Total sales",
      "Status",
      "Created at",
      "Action",
    ];
    for (const header of headers) {
      expect(screen.getByText(header)).toBeInTheDocument();
    }
  });

  it("renders the data rows correctly", () => {
    expect.assertions(6);

    render(<TableData />);

    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(5);

    const firstRowCells = within(rows[1]).getAllByRole("cell");
    expect(firstRowCells[0]).toHaveTextContent("Hypernova Headphones");
    expect(firstRowCells[1]).toHaveTextContent("129.99");
    expect(firstRowCells[2]).toHaveTextContent("25");
    expect(firstRowCells[3]).toHaveTextContent("Draft");
    expect(firstRowCells[4]).toHaveTextContent("2024-07-16 10:35AM");
  });

  it("renders the correct status styles", () => {
    expect.assertions(4); // We expect 4 assertions in this test

    render(<TableData />);

    const activeStatuses = screen.getAllByText("Active");
    for (const status of activeStatuses) {
      expect(status).toHaveClass("border-[#6DC347]", "text-[#6DC347]");
    }

    const draftStatuses = screen.getAllByText("Draft");
    for (const status of draftStatuses) {
      expect(status).toHaveClass("border-[#525252]");
    }
  });

  it("renders action button images correctly", () => {
    expect.assertions(1);

    render(<TableData />);

    const actionButtons = screen.getAllByAltText("action button");
    expect(actionButtons).toHaveLength(4);
  });
});
