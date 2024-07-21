import { render, screen } from "@testing-library/react";

import CurrencyConverter from "~/components/common/CurrencyConverter";

describe("currencyConverter Component", () => {
  it("should render without crashing", () => {
    expect.assertions(1);
    render(<CurrencyConverter amount={100} currencyCode="USD" showSymbol />);
    expect(screen.getByText(/total revenue/i)).toBeInTheDocument();
  });

  it("should display error message on conversion failure", async () => {
    expect.assertions(1);
    render(
      <CurrencyConverter amount={100} currencyCode="INVALID" showSymbol />,
    );
    const errorMessage = await screen.findByText(/conversion failed/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it("should correctly display the currency symbol and formatted amount", async () => {
    expect.assertions(2);

    render(<CurrencyConverter amount={100} currencyCode="EUR" showSymbol />);
    const currencySymbols = await screen.findAllByText("€");
    expect(currencySymbols).toHaveLength(2);

    const formattedAmount = await screen.findByText("93.00");
    expect(formattedAmount).toBeInTheDocument();
  });

  it("should update state when amount or currencyCode changes", async () => {
    expect.assertions(3);
    const { rerender } = render(
      <CurrencyConverter amount={100} currencyCode="USD" showSymbol />,
    );
    await expect(screen.findByText("100.00")).resolves.toBeInTheDocument();

    rerender(<CurrencyConverter amount={200} currencyCode="USD" showSymbol />);
    await expect(screen.findByText("200.00")).resolves.toBeInTheDocument();

    rerender(<CurrencyConverter amount={200} currencyCode="EUR" showSymbol />);
    await expect(screen.findByText("186.00")).resolves.toBeInTheDocument();
  });
});
