import { describe, expect, it, vi } from "vitest";

import {
  conversionRates,
  fetchRates,
  mockConversionRates,
} from "~/components/common/CurrencyConverter";

const mockUrl =
  "https://v6.exchangerate-api.com/v6/c58fed89b800f3566d6c89f1/latest/USD";

describe("fetchRates", () => {
  it("should return conversion rates for a successful fetch", async () => {
    expect.assertions(1);
    const mockRates: conversionRates = { USD: 1, EUR: 0.85, GBP: 0.75 };
    const mockResponse = {
      ok: true,
      json: async () => ({
        conversion_rates: mockRates,
      }),
    };

    vi.spyOn(global, "fetch").mockResolvedValue(mockResponse as Response);

    const rates = await fetchRates(mockUrl);
    expect(rates).toStrictEqual(mockRates);
  });

  it("should handle failed fetch response", async () => {
    expect.assertions(1);
    const mockResponse = {
      ok: false,
      json: async () => ({}),
    };

    vi.spyOn(global, "fetch").mockResolvedValue(mockResponse as Response);

    const rates = await fetchRates(mockUrl);
    expect(rates).toStrictEqual(mockConversionRates);
  });

  it("should handle fetch exceptions", async () => {
    expect.assertions(1);

    vi.spyOn(global, "fetch").mockRejectedValue(new Error("Network Error"));
    const rates = await fetchRates(mockUrl);
    expect(rates).toStrictEqual(mockConversionRates);
  });
});
