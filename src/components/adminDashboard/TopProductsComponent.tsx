import { ArrowUpRightIcon } from "lucide-react";
import { FC } from "react";

import { Card } from "../ui/card";

type ProductData = {
  name: string;
  amount: string;
};

type TopProductsProperties = {
  data: ProductData[];
  gradients: string[];
};

const TopProductsComponent: FC<TopProductsProperties> = ({
  data,
  gradients,
}) => {
  return (
    <Card className="basis-1/2 rounded-xl border border-border bg-white p-3 md:p-5">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-semibold text-neutral-dark-2">
            Top Products
          </h2>
          <p className="text-xs font-normal text-neutral-dark-1 md:text-sm">
            Your top selling products <br className="block md:hidden" /> appear
            here.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-orange-500 px-4 py-2 text-sm font-medium text-neutral-50">
          <div className="text-sm font-semibold leading-6">View All</div>
          <ArrowUpRightIcon size={16} />
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
                  className="text-sm font-medium"
                >
                  {item.name}
                </p>
              </div>
            </div>
            <p
              data-testid={`product-amount-${index}`}
              className="text-sm font-medium"
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
