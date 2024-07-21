import { DatePickerWithRange } from ".";

import { render, screen } from "../../../test/utils";
import { mockData } from "./data";

describe("dateRangePicker Component", () => {
  it("should render a button", () => {
    expect.hasAssertions();
    render(<DatePickerWithRange data={mockData} />);
    const button = screen.getByTestId("date-range-picker-button");
    expect(button).toBeInTheDocument();
  });
});
