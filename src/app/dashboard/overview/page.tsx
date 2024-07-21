"use client";

import React, { useState } from "react";

import Card from "~/../../public/card.svg";
import Dollar from "~/../../public/dollar.svg";
import Growth from "~/../../public/growth.svg";
import People from "~/../../public/people.svg";
import DateSwitcher from "~/components/common/DateSwitcher";
import TabSwitcher from "~/components/common/TabSwitcher";
import { Chart } from "~/components/layouts/Chart";
import { customersData } from "~/data/customersData";
import { chartData } from "~/data/graph";
import { activeNow, sales, subscriptions, totalRevenue } from "~/data/overview";
import { formatPrice } from "../../../../utils/formatPrice";

const Overview: React.FC = () => {
  const [tab, setTab] = useState(1);

  return (
    <div className="flex min-h-screen p-[42px] pt-[110px]">
      <div className="flex w-full flex-col gap-[24px]">
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div className="flex flex-col gap-[24px]">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <TabSwitcher tab={tab} setTab={setTab} />
          </div>
          <div className="flex items-center gap-[8px]">
            <DateSwitcher />
            <button className="rounded-sm bg-primary px-[16px] py-[9.5px] text-sm text-white">
              Download
            </button>
          </div>
        </div>

        <div>
          {tab === 1 && (
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[16px] md:flex-row">
                <div className="flex flex-1 flex-col gap-[16px] md:flex-row">
                  <div className="flex flex-1 flex-col rounded-lg border border-solid border-stroke_dashboard p-[24px] pb-[40px] shadow-custom-light">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-[500]">{totalRevenue.name}</p>
                      <Dollar />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold">
                        {formatPrice(
                          totalRevenue.overview_stats,
                          "en-US",
                          "USD",
                        )}
                      </h1>
                      <p className="text-xs">{`+${totalRevenue.percentage}% from last month`}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col rounded-lg border border-solid border-stroke_dashboard p-[24px] pb-[40px] shadow-custom-light">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-[500]">{subscriptions.name}</p>
                      <People />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold">{`+${subscriptions.overview_stats}`}</h1>
                      <p className="text-xs">{`+${subscriptions.percentage}% from last month`}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-[16px] md:flex-row">
                  <div className="flex flex-1 flex-col rounded-lg border border-solid border-stroke_dashboard p-[24px] pb-[40px] shadow-custom-light">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-[500]">{sales.name}</p>
                      <Card />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold">
                        {sales.overview_stats}
                      </h1>
                      <p className="text-xs">{`+${sales.percentage}% from last month`}</p>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col rounded-lg border border-solid border-stroke_dashboard p-[24px] pb-[40px] shadow-custom-light">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-[500]">{activeNow.name}</p>
                      <Growth />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold">
                        {activeNow.overview_stats}
                      </h1>
                      <p className="text-xs">{`+${activeNow.percentage}% from last month`}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[16px] md:flex-row">
                <div className="flex flex-[6] flex-col rounded-lg border border-solid border-stroke_dashboard p-[24px] pb-[40px] shadow-custom-light">
                  <div className="flex-[1]">
                    <h1 className="text-base font-bold">Overview</h1>
                  </div>
                  <div className="flex-[9]">
                    <Chart data={chartData} />
                  </div>
                </div>
                <div className="flex flex-[4] flex-col gap-[24px] rounded-lg border border-solid border-stroke_dashboard p-[24px] pb-[40px] shadow-custom-light">
                  <div>
                    <h1 className="text-base font-bold">Recent Sales</h1>
                    <p className="text-base text-black_300">
                      You made 265 sales this month
                    </p>
                  </div>
                  <div className="flex flex-col gap-[24px]">
                    {customersData.map((customer, id) => (
                      <div
                        key={id}
                        className="flex items-center justify-between"
                      >
                        <div className="flex flex-row gap-[16px]">
                          <div
                            className="h-[45px] w-[45px] rounded-full bg-gray-400 bg-cover bg-center bg-no-repeat"
                            // style={{ backgroundImage: `url(${userImg.src})` }}
                          ></div>
                          <div>
                            <h1 className="font-bold">{customer.name}</h1>
                            <p>{customer.email}</p>
                          </div>
                        </div>
                        <p className="font-bold">{`+${formatPrice(customer.amount, "en-US", "USD")}`}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {tab === 2 && <div>tab 2</div>}
          {tab === 3 && <div>tab 3</div>}
        </div>
      </div>
    </div>
  );
};

export default Overview;
