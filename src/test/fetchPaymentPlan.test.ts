import { describe, expect, it, vi } from "vitest";

import { detailedPayment } from "~/app/dummyData";
import { fetchPaymentPlan } from "~/app/paymentDetailedPage/page";

describe("fetchPaymentPlan", () => {
  it("should fetch payment plans successfully", async () => {
    expect.assertions(1);
    vi.spyOn(global, "fetch").mockResolvedValueOnce(
      new Response(JSON.stringify(detailedPayment), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    const result = await fetchPaymentPlan();
    expect(result).toStrictEqual(detailedPayment);

    vi.restoreAllMocks();
  });

  it("should handle fetch errors and return default data", async () => {
    expect.assertions(1);
    vi.spyOn(global, "fetch").mockRejectedValueOnce(
      new Error("Failed to Fetch Plans"),
    );

    const result = await fetchPaymentPlan();
    expect(result).toStrictEqual(detailedPayment);

    vi.restoreAllMocks();
  });
});
