"use client";

import axios from "axios";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getApiUrl } from "~/actions/getApiUrl";
import { useToast } from "~/components/ui/use-toast";
import CheckoutForm from "../_components/checkoutForm/checkoutForm";

const Page = ({ params }: { params: { slug: string } }) => {
  const [plan, setPlan] = useState({
    id: "",
    name: "",
    price: 0,
  });
  const { toast } = useToast();

  useEffect(() => {
    const getSpecificPlan = async () => {
      try {
        const apiUrl = await getApiUrl();
        const response = await axios.get(
          `${apiUrl}/api/v1/billing-plans/${params.slug}`,
        );
        setPlan(response.data.data);
      } catch {
        toast({
          title: "Error",
          description: "Error fetching topics",
          variant: "destructive",
        });
      }
    };
    getSpecificPlan();
  }, [toast, params.slug]);

  return (
    <div className="">
      <div className="flex flex-col gap-y-[16px] px-[14px]">
        <div className="flex items-center gap-x-[10px]">
          <Link href={"/dashboard/admin/settings/payment-information"}>
            <ArrowLeft />
          </Link>
          <p className="text-[24px] font-semibold">{`Upgrade to ${plan.name}`}</p>
        </div>
        <p className="text-[14px] text-neutral-dark-2">
          Do more with unlimited users and Integration when you upgrade
        </p>
      </div>
      <CheckoutForm plan={plan} />
    </div>
  );
};

export default Page;
