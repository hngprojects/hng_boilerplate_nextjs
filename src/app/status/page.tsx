import { Check } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";

import PastIncidents from "~/components/status/PastIncidents";
import StatusGrid from "~/components/status/StatusTable";

const StatusPage: NextPage = () => {
  return (
    <div>
      <div
        className="hidden bg-cover bg-center py-16 pl-8 md:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/status.jpg')",
        }}
      >
        <h1 className="mb-2 text-2xl font-bold text-neutral-600 md:text-4xl md:text-neutral-50">
          API Status Page
        </h1>
        <p className="text-sm text-neutral-500 md:text-lg md:text-neutral-200">
          This status page displays the API health status of HNG Boilerplate.
        </p>
      </div>
      <div className="flex flex-col items-center py-0 md:py-16">
        <div className="my-3 rounded-full border-4 border-green-600 p-3">
          <Check height={30} width={30} strokeWidth={3} color="#16a34a" />
        </div>
        <p className="font-bold text-neutral-700 md:text-xl">
          All Systems Operational
        </p>
      </div>

      <div className="py-10 text-center md:hidden">
        <p className="text-sm text-neutral-500">
          This status page displays the API health status of HNG Boilerplate.
        </p>
      </div>
      <div className="mx-auto max-w-4xl text-center text-[10px] text-neutral-600 md:text-right md:text-xs">
        Uptime over the past 30 days.{" "}
        <Link href={""} className="text-primary underline">
          View historical uptime.
        </Link>
      </div>
      <StatusGrid />
      <PastIncidents />
    </div>
  );
};

export default StatusPage;
