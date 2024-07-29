import type { PropsWithChildren } from "react";

import { DateSelector } from "~/app/dashboard/(user-dashboard)/_components/layout/dateselector";
import { Tablinks } from "~/app/dashboard/(user-dashboard)/_components/layout/tablinks";
import { Button } from "~/components/common/common-button";

const links = [
  {
    title: "Overview",
    href: "/dashboard",
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
  },
  {
    title: "Reports",
    href: "/dashboard/reports",
  },
];

export default function UserMetricsLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-full flex-col gap-[37px] bg-background">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 pt-6">
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold lg:text-[30px]">Dashboard</h1>
          <Tablinks links={links} />
        </div>
        <div className="flex flex-wrap items-center gap-2 max-sm:flex-grow max-sm:justify-between">
          <DateSelector />
          <Button variant="primary" className="h-10">
            Download
          </Button>
        </div>
      </div>
      <div className="flex-1 pb-9">{children}</div>
    </div>
  );
}
