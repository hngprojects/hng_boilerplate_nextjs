import { describe, expect, it, vi } from "vitest";

import {
  conversionRates,
  fetchRates,
} from "~/components/common/CurrencyConverter";

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

    const rates = await fetchRates();
    expect(rates).toStrictEqual(mockRates);
  });

  it("should handle failed fetch response", async () => {
    expect.assertions(1);

    const mockResponse = {
      ok: false,
      json: async () => ({}),
    };

    vi.spyOn(global, "fetch").mockResolvedValue(mockResponse as Response);

    const rates = await fetchRates();
    expect(rates).toBeUndefined();
  });

  it("should handle fetch exceptions", async () => {
    expect.assertions(1);

    vi.spyOn(global, "fetch").mockRejectedValue(new Error("Network Error"));

    const rates = await fetchRates();
    expect(rates).toBeUndefined();
  });
});
