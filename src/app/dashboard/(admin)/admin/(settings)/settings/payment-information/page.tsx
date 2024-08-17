import Link from "next/link";

import { Button } from "~/components/ui/button";

const PaymentInformation = () => {
  return (
    <div className="p-4 md:p-6">
      <h1 className="mb-10 text-[28px] font-bold">Current Plan</h1>
      <div className="flex min-h-screen max-w-[1000px] flex-col gap-6">
        <div className="w-full space-y-2 rounded-[12px] bg-[#FFF8F2] p-5">
          <h2 className="text-2xl font-semibold">Free</h2>
          <p className="text-sm">
            Your account is on a free 90-day trial of our free plan, through
            September 27th. Upgrade anytime to stay on this plan when your trial
            ends.
          </p>
          <p className="text-sm text-[#525252]">$0/month</p>
        </div>
        <div className="flex w-full p-5">
          <div className="hidden w-[152px] py-[20px] md:block">
            <p className="font-semibold">Subscribe to your desired plan</p>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:items-start md:justify-between md:gap-0">
            <div className="flex w-[258px] flex-col gap-[16px] px-[20px] py-[15px] hover:rounded-md hover:border hover:border-primary md:w-[200px] md:border-none">
              <p className="font-semibold">Free</p>
              <p>
                {" "}
                <span className="text-[25px] font-medium">$0</span>{" "}
                <span className="text-[13px]">/month</span>{" "}
              </p>
              <p className="text-sm text-[#525252]">
                The essential to provide your best work for clients.
              </p>
              <ul className="flex w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px] md:hidden">
                <li>
                  <span className="text-[14px]">10 Projects</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">Up to 10 subscribers</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">Advanced analytics</span>{" "}
                </li>
              </ul>
              <Button className="w-full rounded-[6px] bg-[#FDEEE3] px-12 py-2 text-black">
                Current Plan
              </Button>
            </div>
            <div className="flex w-[258px] flex-col gap-[16px] rounded-md border-primary bg-[#FFF8F2] px-[20px] py-[15px] hover:border md:w-[200px] md:bg-white">
              <p className="font-semibold">Basic</p>
              <p>
                {" "}
                <span className="text-[25px] font-medium">$20</span>{" "}
                <span className="text-[13px]">/month</span>{" "}
              </p>
              <p className="text-sm text-[#525252]">
                Ideal for growing needs who want more features.
              </p>
              <ul className="flex w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px] md:hidden">
                <li>
                  <span className="text-[14px]">100 Projects</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">Up to 50 subscribers</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">Advanced analytics</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">24-hour support</span>{" "}
                </li>
              </ul>
              <Link href="/dashboard/admin/settings/payment-information/upgrade">
                <Button className="w-full rounded-[6px] bg-primary px-12 py-2 text-white">
                  Upgrade
                </Button>
              </Link>
            </div>
            <div className="flex w-[258px] flex-col gap-[16px] rounded-md border-primary bg-[#FFF8F2] px-[20px] py-[15px] hover:border md:w-[200px] md:bg-white">
              <p className="font-semibold">Advanced</p>
              <p>
                {" "}
                <span className="text-[25px] font-medium">$50</span>{" "}
                <span className="text-[13px]">/month</span>{" "}
              </p>
              <p className="text-sm text-[#525252]">
                Designed for power users and maximum functionalities.
              </p>
              <ul className="flex w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px] md:hidden">
                <li>
                  <span className="text-[14px]">200 Projects</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">Up to 100 subscribers</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">Advanced analytics</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">24-hour support</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">Marketing advisor</span>{" "}
                </li>
              </ul>
              <Link href="/dashboard/admin/settings/payment-information/upgrade">
                <Button className="w-full rounded-[6px] bg-primary px-12 py-2 text-white">
                  Upgrade
                </Button>
              </Link>
            </div>
            <div className="flex w-[258px] flex-col justify-between gap-[16px] rounded-md border-primary bg-[#FFF8F2] px-[20px] py-[15px] hover:border md:h-full md:w-[200px] md:bg-white">
              <p className="font-semibold">Premium</p>
              <p>
                {" "}
                <span className="text-[25px] font-medium">$100</span>{" "}
                <span className="text-[13px]">/month</span>{" "}
              </p>
              <p className="text-sm text-[#525252]">
                Perfect for users who want more features.
              </p>
              <ul className="flex w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px] md:hidden">
                <li>
                  <span className="text-[14px]">300 Projects</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">Up to 500 subscribers</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">Advanced analytics</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">24-hour support</span>{" "}
                </li>
                <li>
                  <span className="text-[14px]">Marketing advisor</span>{" "}
                </li>
              </ul>
              <Link href="/dashboard/admin/settings/payment-information/upgrade">
                <Button className="w-full rounded-[6px] bg-primary px-12 py-2 text-white">
                  Upgrade
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden w-full flex-col rounded-[12px] bg-[#FFF8F2] p-5 md:flex md:flex-row">
          <div className="w-[152px] py-[20px]">
            <p className="font-semibold">Highlights</p>
          </div>
          <div className="flex items-start justify-between">
            <ul className="flex h-[220px] w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px]">
              <li>
                <span className="text-[14px]">10 Projects</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Up to 10 subscribers</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Advanced analytics</span>{" "}
              </li>
            </ul>
            <ul className="flex h-[220px] w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px]">
              <li>
                <span className="text-[14px]">100 Projects</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Up to 50 subscribers</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Advanced analytics</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">24-hour support</span>{" "}
              </li>
            </ul>
            <ul className="flex h-[220px] w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px]">
              <li>
                <span className="text-[14px]">200 Projects</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Up to 100 subscribers</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Advanced analytics</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">24-hour support</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Marketing advisor</span>{" "}
              </li>
            </ul>
            <ul className="flex h-[220px] w-[200px] list-disc flex-col gap-[8px] px-[20px] py-[15px]">
              <li>
                <span className="text-[14px]">300 Projects</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Up to 500 subscribers</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Advanced analytics</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">24-hour support</span>{" "}
              </li>
              <li>
                <span className="text-[14px]">Marketing advisor</span>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1000px]">
        <p>Compare all features</p>
      </div>
    </div>
  );
};

export default PaymentInformation;
