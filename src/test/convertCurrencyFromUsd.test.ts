import { describe, expect, it } from "vitest";

import {
  CObject,
  conversionRates,
  convertCurrencyFromUSD,
} from "~/components/common/CurrencyConverter";

describe("#convertCurrenncyFromUSD", () => {
  it("should return converted amount and symbol for valid inputs", () => {
    expect.assertions(1);
    const exchangerate: conversionRates = { AMD: 0.0026 };
    const result: CObject = convertCurrencyFromUSD(1000, "AMD", exchangerate);
    expect(result).toStrictEqual({ convertedAmount: 2.6, currencySymbol: "֏" });
  });

  it("should return default values when conversion rate is undefined", () => {
    expect.assertions(1);
    const rate = undefined;
    const result: CObject = convertCurrencyFromUSD(1000, "AMD", rate);
    expect(result).toStrictEqual({ convertedAmount: 0, currencySymbol: "$" });
  });

  it("should return default values when currencyCode is not in conversionRates", () => {
    expect.assertions(1);
    const exchangeRate: conversionRates = { EUR: 0.0022 };
    const result: CObject = convertCurrencyFromUSD(1000, "AMD", exchangeRate);
    expect(result).toStrictEqual({ convertedAmount: 0, currencySymbol: "$" });
  });

  it("should return default values when totalAmount is null", () => {
    expect.assertions(1);
    const exchangeRate: conversionRates = { AMD: 0.0026 };
    const result: CObject = convertCurrencyFromUSD(
      undefined as unknown as number,
      "AMD",
      exchangeRate,
    );
    expect(result).toStrictEqual({ convertedAmount: 0, currencySymbol: "֏" });
  });

  it("should return default values when currencyCode is null", () => {
    expect.assertions(1);
    const exchangeRate: conversionRates = { AMD: 0.0026 };
    const result: CObject = convertCurrencyFromUSD(
      1000,
      undefined as unknown as string,
      exchangeRate,
    );
    expect(result).toStrictEqual({ convertedAmount: 0, currencySymbol: "$" });
  });

  it("should return default values when totalAmount is a string", () => {
    expect.assertions(1);
    const exchangeRate: conversionRates = { AMD: 0.0026 };
    const result: CObject = convertCurrencyFromUSD(
      "1000" as unknown as number,
      "AMD",
      exchangeRate,
    );
    expect(result).toStrictEqual({ convertedAmount: 0, currencySymbol: "֏" });
  });

  it("should return a negative converted amount when totalAmount is negative", () => {
    expect.assertions(1);
    const conversionRates: conversionRates = { EUR: 0.85 };
    const result: CObject = convertCurrencyFromUSD(
      -100,
      "EUR",
      conversionRates,
    );
    expect(result).toStrictEqual({
      convertedAmount: -85,
      currencySymbol: "€",
    });
  });
});
