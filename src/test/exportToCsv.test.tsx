import { fireEvent, render } from "@testing-library/react";
import { expect, test } from "vitest";

import ExportToCsv from "~/components/exportToCSV/ExportToCsv";

// eslint-disable-next-line vitest/require-top-level-describe
test("buttonDownload triggers file download", async () => {
  expect.hasAssertions();
  const data = [
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", role: "User" },
  ];
  const { getByRole } = render(<ExportToCsv members={data} />);

  // Simulate button click
  // eslint-disable-next-line testing-library/prefer-screen-queries, unicorn/better-regex
  const exportButton = getByRole("button", { name: /Export CSV/i });
  fireEvent.click(exportButton);
});
