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
    <div className="grid min-h-screen w-full grid-rows-[auto_1fr]">
      <Providers />
      <UserNavbar />
      <div className="relative mx-auto w-full bg-white max-lg:overflow-hidden xl:px-4">
        <div className="flex">
          <SettingsSidebar />
          <div className="w-full p-4">
            <Suspense>{children}</Suspense>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
