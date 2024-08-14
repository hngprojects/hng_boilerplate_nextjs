import { Check } from "lucide-react";

function PricingCard() {
  return (
    <div className="border-grey-100 m-10 flex h-[550px] w-[319px] flex-col justify-between rounded-xl border p-[30px]">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold">Advanced</h1>
        <div className="flex items-end">
          <h1 className="text-3xl font-semibold">$50</h1>
          <p className="text-gray-400">/month</p>
        </div>
        <p className="text-sm text-gray-400">
          The essensitals to provide your best work for clients.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex gap-2">
          <Check size={20} className="text-gray-500" />
          <p className="text-sm text-gray-500">200 Projects</p>
        </div>

        <div className="flex gap-2">
          <Check size={20} className="text-gray-500" />
          <p className="text-sm text-gray-500">Up to 100 subscribers</p>
        </div>

        <div className="flex gap-2">
          <Check size={20} className="text-gray-500" />
          <p className="text-sm text-gray-500">Advanced analytics</p>
        </div>

        <div className="flex gap-2">
          <Check size={20} className="text-gray-500" />
          <p className="text-sm text-gray-500">24-hour support response time</p>
        </div>

        <div className="flex gap-2">
          <Check size={20} className="text-gray-500" />
          <p className="text-sm text-gray-500">Marketing advisor</p>
        </div>
      </div>

      <button className="rounded-lg bg-[#7141F8] p-2 text-sm text-white">
        Upgrade to Advanced{" "}
      </button>
    </div>
  );
}

export default PricingCard;
