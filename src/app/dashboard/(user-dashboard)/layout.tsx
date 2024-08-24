import { Suspense } from "react";

import Providers from "~/components/providers";
import SettingsSidebar from "../(admin)/admin/(settings)/settings/_components/layout/sidebar";
import UserNavbar from "./_components/layout/navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid h-screen w-full grid-rows-[auto_1fr] overflow-y-hidden">
      <Providers />
      <UserNavbar />
      <div className="relative mx-auto h-full w-full overflow-y-hidden bg-white max-lg:overflow-hidden xl:px-4">
        <div className="flex h-full">
          <SettingsSidebar />
          <div className="w-full overflow-y-auto p-4">
            <Suspense>{children}</Suspense>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
