import React from "react";

import { Card } from "~/components/ui/card";

type ProductData = {
  name: string;
  amount: string;
  email: string;
};

type TopProductsProperties = {
  data: ProductData[];
  gradients: string[];
  noOfSales: number;
};

const RecentSales: React.FC<TopProductsProperties> = ({
  data,
  gradients,
  noOfSales,
}) => {
  return (
    <Card className="h-full basis-1/2 rounded-xl border border-border bg-white p-3 shadow-spread md:p-5">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h2 className="text-base font-semibold text-[#080808]">
            Recent Sales
          </h2>
          <p className="text-sm font-medium text-[#626262] md:text-sm">
            You made {noOfSales} sales this month
          </p>
        </div>
      </div>
      <ul className="text-[#0A0A0A]">
        {data.map((item, index) => {
          let amount = Number(item.amount).toFixed(2);
          amount = amount
            .replaceAll(
              new RegExp(
                String.raw`^(\d{` +
                  (amount.length % 3 ?? 0) +
                  String.raw`})(\d{3})`,
                "g",
              ),
              "$1 $2",
            )
            .replaceAll(/(\d{3})+?/gi, "$1 ")
            .trim();
          const separator = ",";
          amount = amount.replaceAll(/\s/g, separator);
          amount = amount.replace(",.", ".");

          return (
            <li
              key={index}
              className="mb-2 flex items-center justify-between py-2"
            >
              <div className="flex items-center space-x-4">
                <div
                  className="h-10 w-10 rounded-full"
                  style={{ background: gradients[index % gradients.length] }}
                />
                <div>
                  <p
                    data-testid={`product-name-${index}`}
                    className="text-base font-medium"
                  >
                    {item.name}
                  </p>
                  <p className="text-sm text-neutral-dark-1">{item.email}</p>
                </div>
              </div>
              <p
                data-testid={`product-amount-${index}`}
                className="text-base font-semibold"
              >
                +${amount}
              </p>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default RecentSales;
