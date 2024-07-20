// fetchPaymentPlan.test.ts
import { describe, expect, it, vi } from "vitest";

import { detailedPayment } from "~/app/dummyData";
import { fetchPaymentPlan } from "~/app/page";

describe("fetchPaymentPlan", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should fetch payment plans successfully", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify(detailedPayment), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    const result = await fetchPaymentPlan();
    expect(result).toEqual(detailedPayment);
  });

  it("should handle fetch errors and return default data", async () => {
    vi.spyOn(global, "fetch").mockRejectedValueOnce(
      new Error("Failed to Fetch Plans"),
    );

    const result = await fetchPaymentPlan();
    expect(result).toEqual(detailedPayment);
  });
});
