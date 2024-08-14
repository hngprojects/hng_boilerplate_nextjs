"use client";

import { BellIcon, HelpCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next-nprogress-bar";
import { useEffect } from "react";

import UnreadNotificationCard from "~/app/dashboard/(admin)/_components/unread-notification-card/UnreadNotificationCard";
import { MobileNavlinks } from "~/app/dashboard/(user-dashboard)/_components/layout/navbar/mobile-navlinks";
import { Navlinks } from "~/app/dashboard/(user-dashboard)/_components/layout/navbar/navlinks";
import { Search } from "~/app/dashboard/(user-dashboard)/_components/layout/navbar/search";
import UserCard from "~/components/card/user-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { OrganisationSwitcher } from "./organisation-switcher";

const UserNavbar = () => {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  return (
    <nav
      className="bg-white px-5 py-2.5 md:left-[220px] lg:left-[252px]"
      role="navbar"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex gap-[50px]">
          <div className="flex items-center gap-[15px]">
            <MobileNavlinks />
            <OrganisationSwitcher />
            {/* <DashboardLogo responsive /> */}
          </div>
          <Navlinks />
        </div>
        <div className="flex items-center justify-between gap-5 bg-[#FDFDFD]">
          <Search />
          <div className="relative flex items-center justify-center">
            <Popover>
              <PopoverTrigger>
                <BellIcon
                  data-testid="bell"
                  className="h-6 w-6 text-neutral-dark-2 transition-colors duration-300 hover:cursor-pointer hover:text-neutral-dark-1"
                />
              </PopoverTrigger>
              <PopoverContent
                data-testid="notificationContent"
                align="end"
                className="w-[380px] border-none p-0 shadow-none"
              >
                <UnreadNotificationCard
                  notificationsPreview={[
                    { header: "Check mail", time: "1 hour ago" },
                    { header: "Sign up for offer", time: "2 hours ago" },
                    { header: "Register for event", time: "1 hour ago" },
                  ]}
                  unreadCount={30}
                />
              </PopoverContent>
            </Popover>
            <span className="absolute right-1 top-0 h-[6px] w-[6px] rounded-full bg-error"></span>
          </div>
          <div className="max-sm:hidden">
            <HelpCircle
              data-testid="help"
              className="h-6 w-6 text-neutral-dark-2 transition-colors duration-300 hover:cursor-pointer hover:text-neutral-dark-1"
            />
          </div>
          <div className="pr-1">
            <UserCard />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;
