import { fireEvent, render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import { describe, expect, it, vi } from "vitest";

import PaymentMethod from "../../components/paymentMethod/PaymentMethod";

describe("paymentMethod", () => {
  const image = "/images/Group (1).svg";
  const header = "Credit Card";
  const width = 65;
  const height = 40;
  const forms = <div>Credit Card Form</div>;
  const selectedValue = "Credit Card";
  const onChange = vi.fn();

  it("renders correctly", () => {
    expect.assertions(3);

    render(
      <PaymentMethod
        image={image}
        header={header}
        width={width}
        height={height}
        forms={forms}
        selectedValue={selectedValue}
        onChange={onChange}
      />,
    );

    // Check that the radio button and label are rendered
    const radioButton = screen.getByLabelText(header);
    expect(radioButton).toBeInTheDocument();

    // Check that the image is rendered
    const img = screen.getByAltText(header);
    expect(img).toBeInTheDocument();

    // Check that the forms are rendered
    const formContent = screen.getByText("Credit Card Form");
    expect(formContent).toBeInTheDocument();
  });

  it("calls onChange when the radio button is selected", () => {
    expect.assertions(1);

    render(
      <PaymentMethod
        image={image}
        header={header}
        width={width}
        height={height}
        forms={forms}
        selectedValue=""
        onChange={onChange}
      />,
    );

    const radioButton = screen.getByLabelText(header);
    fireEvent.click(radioButton);

    // Check that the onChange function is called with the correct value
    expect(onChange).toHaveBeenCalledWith(header);
  });
});
