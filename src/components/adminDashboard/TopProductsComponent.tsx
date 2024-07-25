import Image from "next/image";
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

const ExternalLinkIcon = () => {
  return (
    <>
      <Image
        src="/admin-dashboard/icons/arrowUp.svg"
        alt="external link icon"
        height={16}
        width={16}
        className="invert"
      />
    </>
  );
};

const TopProductsComponent: React.FC<TopProductsProperties> = ({
  data,
  gradients,
}) => {
  return (
    <Card className="basis-1/2 rounded-xl border border-border bg-white p-3 md:p-5">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-xl font-semibold text-neutral-dark-2 md:text-2xl">
            Top Products
          </h2>
          <p className="text-xs font-normal text-neutral-dark-1">
            Your top selling products <br className="block md:hidden" /> appear
            here.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-neutral-50">
          <div className="text-base font-[500] leading-[24px]">View All</div>
          <ExternalLinkIcon />
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
                  className="text-xs font-medium md:text-base"
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
