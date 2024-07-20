import { DatePickerWithRange } from ".";

import { render, screen } from "../../../test/utils";
import { data } from "./data";

describe("dateRangePicker Component", () => {
  it("should render two date inputs", () => {
    expect.hasAssertions();
    render(<DatePickerWithRange data={data} />);
    const button = screen.getByTestId("date-range-picker-button");
    expect(button).toBeInTheDocument();
  });
});
