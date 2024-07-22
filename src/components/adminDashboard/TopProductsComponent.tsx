import React from "react";

import { Card } from "../ui/card";

type ProductData = {
  name: string;
  amount: string;
};

type TopProductsProperties = {
  data: ProductData[];
  gradients: string[];
};

const TopProductsComponent: React.FC<TopProductsProperties> = ({
  data,
  gradients,
}) => {
  return (
    <Card className="rounded-xl border border-slate-300 bg-white p-4 shadow">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-2xl font-semibold text-neutral-950">
            Top Products
          </h2>
          <p className="text-xs font-normal text-neutral-600">
            Your top selling products appear here.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-neutral-50">
          View All
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4.66669 11.3334L11.3334 4.66675"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4.66669 4.66675H11.3334V11.3334"
                stroke="#FAFAFA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
      <ul className="text-[#0A0A0A]">
        {data.map((item, index) => (
          <li
            key={index}
            className="mb-2 flex items-center justify-between py-2"
          >
            <div className="flex items-center space-x-4">
              <div
                className="h-10 w-10 rounded-md"
                style={{ background: gradients[index % gradients.length] }}
              />
              <div>
                <p
                  data-testid={`product-name-${index}`}
                  className="text-base font-medium"
                >
                  {item.name}
                </p>
              </div>
            </div>
            <p
              data-testid={`product-amount-${index}`}
              className="text-[16px] font-semibold"
            >
              {item.amount}
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default TopProductsComponent;
