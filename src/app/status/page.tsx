import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import Logo from "~/components/common/logo";
import { Button } from "~/components/ui/button";
import StatusAlert from "./components/StatusAlert";
import StatusTable from "./components/StatusTable";

interface DummyDataProperties {
  id: string;
  name: string;
  status: "down" | "degraded" | "operational";
}

const dummyData: DummyDataProperties[] = [
  {
    id: "1",
    name: "Website",
    status: "operational",
  },
];

const StatusPage = () => {
  return (
    <div className="mx-auto my-10 max-w-4xl">
      <Header />
      <StatusSection />
      <AboutSection />
      <StatusTableSection />
    </div>
  );
};

const Header = () => (
  <div className="flex flex-row items-center">
    <div className="mr-auto">
      <Logo />
    </div>
    <Link href="/" className="no-underline outline-none">
      <Button
        variant="primary"
        className="flex items-center gap-1 outline-none duration-300 ease-in"
        size="sm"
      >
        <ArrowLeft size={16} />
        <span className="capitalize">Home</span>
      </Button>
    </Link>
  </div>
);

const StatusSection = () => (
  <div className="mt-5">
    <StatusAlert status="operational" message="All systems operational" />
  </div>
);

const AboutSection = () => (
  <div className="mt-10">
    <h2 className="text-3xl font-medium capitalize text-gray-900">
      About this site
    </h2>
    <p className="mt-3 text-base text-gray-400">
      This is HNG Boilerplate&apos;s status page, where you can get updates on
      how our systems are doing. If there are interruptions to service, we will
      post a note here.
    </p>
  </div>
);

const StatusTableSection = () => (
  <div className="mt-16">
    <StatusTable status="down" data={dummyData} />
  </div>
);

export default StatusPage;
