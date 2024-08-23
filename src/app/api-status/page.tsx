import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import Logo from "~/components/common/logo";
import { Button } from "~/components/ui/button";
import StatusAlert from "./components/StatusAlert";
import StatusTable from "./components/StatusTable";

export interface DataItems {
  id: string;
  name: string;
  status: "down" | "degraded" | "operational";
  lastChecked: string;
  responseTime: string;
  details: string;
}

const dummyData: DataItems[] = [
  {
    id: "1",
    name: "Website",
    status: "operational",
    lastChecked: "2023-08-23 10:00 AM",
    responseTime: "120ms",
    details: "All systems running smoothly.",
  },

  {
    id: "22",
    name: "Website 2",
    status: "down",
    lastChecked: "2023-08-23 10:00 AM",
    responseTime: "120ms",
    details: "All systems running smoothly.",
  },

  {
    id: "33",
    name: "Website 3",
    status: "degraded",
    lastChecked: "2023-08-23 10:00 AM",
    responseTime: "120ms",
    details: "All systems running smoothly.",
  },
];

const StatusPage = () => (
  <div className="mx-auto my-10 max-w-4xl px-3 md:px-0">
    <Header />
    <StatusSection status="operational" message="All systems operational" />
    <AboutSection />
    <StatusTableSection status="operational" data={dummyData} />
    <StatusFooter />
  </div>
);

const Header = () => (
  <div className="flex items-center justify-between">
    <Logo />
    <Link href="/" passHref>
      <Button variant="primary" size="sm" className="flex items-center gap-1">
        <ArrowLeft size={16} />
        <span className="capitalize">Home</span>
      </Button>
    </Link>
  </div>
);

const StatusFooter = () => {
  return (
    <div className="mt-2 text-center text-xs text-gray-400">
      Powered by{" "}
      <Link
        href={"/"}
        className="underline outline-none duration-200 ease-in hover:text-primary"
      >
        HNG Boilerplate
      </Link>
    </div>
  );
};

interface StatusSectionProperties {
  status: "down" | "degraded" | "operational";
  message: string;
}

const StatusSection = ({ status, message }: StatusSectionProperties) => (
  <div className="mt-5">
    <StatusAlert status={status} message={message} />
  </div>
);

const AboutSection = () => (
  <div className="mt-10">
    <h2 className="text-3xl font-medium capitalize text-gray-900">
      About this site
    </h2>
    <p className="mt-3 text-sm text-gray-600 md:text-base">
      This is HNG Boilerplate&apos;s status page, where you can get updates on
      how our systems are doing. If there are interruptions to service, we will
      post a note here.
    </p>
  </div>
);

interface StatusTableSectionProperties {
  status: "down" | "degraded" | "operational";
  data: DataItems[];
}

const StatusTableSection = ({ status, data }: StatusTableSectionProperties) => (
  <div className="mt-16">
    <StatusTable status={status} data={data} />
  </div>
);

export default StatusPage;
