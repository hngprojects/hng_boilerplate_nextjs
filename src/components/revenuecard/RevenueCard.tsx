import React from "react";

interface RevenueCardProperties {
  title: string;
  revenue: number;
  performanceIndex: string;
  currency: string;
}

const getCurrencySymbol = (currencyCode: string): string => {
  try {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode,
    });
    const parts = formatter.formatToParts(0);
    const symbolPart = parts.find((part) => part.type === "currency");
    return symbolPart ? symbolPart.value : "";
  } catch {
    console.error("Invalid currency code:", currencyCode);
    return "$";
  }
};

const RevenueCard: React.FC<RevenueCardProperties> = ({
  title,
  revenue,
  performanceIndex,
  currency,
}) => {
  const currencySymbol = getCurrencySymbol(currency);
  try {
    const formattedRevenue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(revenue);

    return (
      <div
        className="bg-gray-30 mb-4 flex w-full flex-col p-4 shadow-lg"
        style={{
          width: "337.33px",
          height: "134px",
          borderRadius: "12px",
          padding: "23px, 24px, 28px, 24px",
        }}
      >
        <div
          className="flex justify-between"
          style={{ width: "289.33px", height: "24px" }}
        >
          <p className="text-lg font-semibold">{title}</p>
          <p>{currencySymbol}</p>
        </div>
        <div style={{ width: "289.33px" }}>
          <p className="text-3xl font-bold">{formattedRevenue}</p>
          <p className="text-sm text-gray-500">{performanceIndex}</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error formatting revenue:", error);

    return (
      <div
        className="mb-4 flex w-full flex-col p-4 shadow-lg"
        style={{
          width: "337.33px",
          height: "134px",
          borderRadius: "12px",
          padding: "23px, 24px, 28px, 24px",
        }}
      >
        <div
          className="flex justify-between"
          style={{ width: "289.33px", height: "24px" }}
        >
          <p className="text-lg font-semibold">{title}</p>
          <p>{currency}</p>
        </div>
        <div style={{ width: "289.33px" }}>
          <p className="text-3xl font-bold">Error displaying revenue</p>
          <p className="text-sm text-green-500">{performanceIndex}</p>
        </div>
      </div>
    );
  }
};

export default RevenueCard;
