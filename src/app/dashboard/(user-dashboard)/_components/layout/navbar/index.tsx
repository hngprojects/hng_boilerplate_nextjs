"use client";

import { BellIcon, HelpCircle } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { getAllNotifications } from "~/actions/notifications/getAllNotifications";
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

interface NotificationPreview {
  message: string;
  created_at: string;
  is_read: boolean;
  id: string;
}

interface NotificationsData {
  data: {
    total_unread_notification_count: number;
    total_notification_count: number;
    notifications: NotificationPreview[];
  };
  message: string;
}

const UserNavbar = () => {
  const [notifications, setNotifications] =
    useState<NotificationsData | null>();
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    async function fetchNotifications() {
      const result = await getAllNotifications();

      if (result.error) {
        return result.error;
      } else {
        setNotifications(result.data as NotificationsData);
      }
    }

    fetchNotifications();
  }, []);

  const totalUnreadNotificationCount =
    notifications?.data.total_unread_notification_count || 0;

  const totalNotificationCount =
    notifications?.data.total_notification_count || 0;
  const notificationContent: NotificationPreview[] =
    notifications?.data.notifications || [];

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
                  notificationsPreview={notificationContent}
                  unreadCount={totalUnreadNotificationCount}
                  totalNotificationCount={totalNotificationCount}
                />
              </PopoverContent>
            </Popover>
            {notifications && (
              <>
                {totalNotificationCount > 0 && (
                  <span className="absolute right-1 top-0 h-[6px] w-[6px] rounded-full bg-error"></span>
                )}
              </>
            )}
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
