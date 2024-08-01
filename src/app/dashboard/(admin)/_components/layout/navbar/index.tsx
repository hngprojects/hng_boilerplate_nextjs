"use client";

import { BellIcon, ChevronDown, HelpCircle, SearchIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import UserCard from "~/components/card/user-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import UnreadNotificationCard from "../../unread-notification-card/UnreadNotificationCard";
import DashboardLogo from "../logo";

interface User {
  email: string;
  image: string;
  name: string;
}

const DashboardNavbar = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b-[0.5px] border-border"
      role="navbar"
    >
      <div className="flex items-center gap-2 bg-[#FDFDFD] px-[10px] py-[14px]">
        <div className="w-[50px] md:w-[220px] md:px-4 lg:w-[320px]">
          <DashboardLogo />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex h-10 items-center justify-between gap-2 rounded-[6px] border border-border bg-white px-3 text-sm font-normal placeholder:text-sm">
            <SearchIcon
              data-testid="search"
              className="h-4 w-4 text-neutral-dark-2"
            />
            <input
              className="h-full w-full border-none text-neutral-dark-2 outline-none ring-0 placeholder:text-neutral-dark-1"
              placeholder="Search option..."
              data-testid="input"
            />
          </div>
          <div className="flex items-center justify-between gap-1 md:gap-2 lg:gap-4">
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
                  className="w-fit border-none p-0 shadow-none"
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
            <div>
              <HelpCircle
                data-testid="help"
                className="h-6 w-6 text-neutral-dark-2 transition-colors duration-300 hover:cursor-pointer hover:text-neutral-dark-1"
              />
            </div>
            <div className="hover:bg-black-1 flex w-full max-w-[64px] cursor-pointer items-center justify-between gap-2">
              {status === "authenticated" && (
                <UserCard user={session?.user as User} />
              )}
              <ChevronDown
                data-testid="chevronDown"
                className="2-5 h-5 text-neutral-dark-1"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
