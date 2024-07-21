import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Payment from "~/components/common/settings/Payment";

describe("payment Component", () => {
  it("should toggle the visibility of the features table when the button is clicked", () => {
    expect.hasAssertions();
    render(<Payment />);

    expect(screen.queryByRole("grid")).not.toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("features"));

    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});
