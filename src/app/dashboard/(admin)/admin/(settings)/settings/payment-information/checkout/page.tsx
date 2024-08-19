"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import CheckoutForm from "../_components/checkoutForm/checkoutForm";

const Page = () => {
  return (
    <div className="px-[30px]">
      <div className="flex flex-col gap-y-[16px]">
        <div className="flex items-center gap-x-[10px]">
          <Link href={"/dashboard/admin/settings/payment-information"}>
            <ArrowLeft />
          </Link>
          <p className="px-[14px] text-[24px] font-semibold">
            Upgrade to Basic
          </p>
        </div>
        <p className="text-[14px] text-neutral-dark-2">
          Do more with unlimited users and Integration when you upgrade
        </p>
      </div>
      <CheckoutForm plan={undefined} />
    </div>
  );
};

export default Page;
