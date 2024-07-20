"use client"
import TabSwitcher from '~/components/common/TabSwitcher'
import React, { useState } from 'react'
import Calender from "../../../../public/calander.svg"
import { totalRevenue } from '~/data/overview'
import { subscriptions } from '~/data/overview'
import { sales } from '~/data/overview'
import { activeNow } from '~/data/overview'
import Dollar from "../../../../public/dollar.svg"
import People from "../../../../public/people.svg"
import Growth from "../../../../public/growth.svg"
import Card from "../../../../public/card.svg"
import { formatPrice } from '../../../../utils/formatPrice'
import { customersData } from '~/data/customersData'
import { Chart } from '../Chart'

const Dashboard: React.FC = () => {

    const [tab, setTab] = useState(1)

    return (
        <>
            <div className="flex flex-col w-full gap-[24px]">
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="flex flex-col gap-[24px]">
                        <h1 className="text-xl font-bold">Dashboard</h1>
                        <TabSwitcher tab={tab} setTab={setTab} />
                    </div>
                    <div className="flex gap-[8px] items-center">
                        <div className="flex items-center gap-[4px] p-[8px] rounded-sm border border-solid border-stroke">
                            <Calender />
                            <p className="text-base">Jan 20, 2024 - Feb 09, 2024</p>
                        </div>
                        <button className='bg-primary py-[9.5px] px-[16px] rounded-sm text-sm text-white'>Download</button>
                    </div>
                </div>

                <div className="">
                    {tab == 1 && <div className='flex flex-col gap-[16px]'>
                        <div className="flex gap-[16px]">
                            <div className="flex-1 flex gap-[16px]">
                                <div className="flex-1 flex flex-col p-[24px] rounded-lg border border-solid border-stroke pb-[40px] shadow-custom-light">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-[500]">{totalRevenue.name}</p>
                                        <Dollar />
                                    </div>
                                    <div className="">
                                        <h1 className="text-lg font-bold">{formatPrice(totalRevenue.overview_stats, 'en-US', 'USD')}</h1>
                                        <p className="text-xs">{`+${totalRevenue.percentage}% from last month`}</p>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col p-[24px] rounded-lg border border-solid border-stroke pb-[40px] shadow-custom-light">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-[500]">{subscriptions.name}</p>
                                        <People />
                                    </div>
                                    <div className="">
                                        <h1 className="text-lg font-bold">{`+${subscriptions.overview_stats}`}</h1>
                                        <p className="text-xs">{`+${subscriptions.percentage}% from last month`}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 flex gap-[16px]">
                                <div className="flex-1 flex flex-col p-[24px] rounded-lg border border-solid border-stroke pb-[40px] shadow-custom-light">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-[500]">{sales.name}</p>
                                        <Card />
                                    </div>
                                    <div className="">
                                        <h1 className="text-lg font-bold">{sales.overview_stats}</h1>
                                        <p className="text-xs">{`+${sales.percentage}% from last month`}</p>
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col p-[24px] rounded-lg border border-solid border-stroke pb-[40px] shadow-custom-light">
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm font-[500]">{activeNow.name}</p>
                                        <Growth />
                                    </div>
                                    <div className="">
                                        <h1 className="text-lg font-bold">{activeNow.overview_stats}</h1>
                                        <p className="text-xs">{`+${sales.percentage}% from last month`}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="flex gap-[16px]">
                            <div className="flex-[6] p-[24px] rounded-lg border border-solid border-stroke pb-[40px] shadow-custom-light">
                                <div className="">
                                    <h1 className="text-base font-bold">Overview</h1>
                                </div>
                                <div className="">
                                    <Chart/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-[24px] flex-[4] p-[24px] rounded-lg border border-solid border-stroke pb-[40px] shadow-custom-light">
                                <div className="">
                                    <h1 className="text-base font-bold">Recent Sales</h1>
                                    <p className="text-base text-black_300">You made 265 sales this month</p>
                                </div>
                                <div className="flex flex-col gap-[24px]">
                                    {customersData.map((customer) => (
                                        <div className="flex justify-between items-center">
                                            <div className="flex flex-row gap-[16px]">
                                                <div className="h-[45px] w-[45px] bg-gray-400 rounded-full bg-cover bg-center bg-no-repeat"
                                                // style={{ backgroundImage: `url(${userImg.src})` }}
                                                ></div>
                                                <div className="">
                                                    <h1 className="font-bold">{customer.name}</h1>
                                                    <p className="">{customer.email}</p>
                                                </div>
                                            </div>
                                            <p className="font-bold">{`+${formatPrice(customer.amount, 'en-US', 'USD')}`}</p>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>}
                    {tab == 2 && <div className=''>
                        tab 2
                    </div>}
                    {tab == 3 && <div className=''>
                        tab 3
                    </div>}
                </div>
            </div>

        </>

    )
}

export default Dashboard