"use client";

import { BellRing } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FC, useState } from "react";

import { deleteAllNotifications } from "~/actions/notifications/deleteAllNotifications";
import { markAllAsRead } from "~/actions/notifications/markAllAsRead";
import CustomButton from "~/components/common/common-button/common-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Switch } from "~/components/ui/switch";
import { cn } from "~/lib/utils";
import formatCreatedAt from "~/utils/formatDate";
import { useNotificationStore } from "../../admin/(settings)/settings/notification/_action/notification-store";
import { notificationSettingsProperties } from "../../admin/(settings)/settings/notification/_types/notification-settings.types";
import NotificationAction from "./NotificationAction";

interface NotificationPreview {
  message: string;
  is_read: boolean;
  created_at: string;
  id: string;
}

interface CardProperties extends React.ComponentProps<typeof Card> {
  notificationsPreview: NotificationPreview[];
  unreadCount: number;
  totalNotificationCount: number;
}

const handleMarkAllAsRead = async (token: string) => {
  await markAllAsRead(token);
};

const handleDeleteAllNotifications = async (token: string) => {
  await deleteAllNotifications(token);
};

const UnreadNotificationCard: FC<CardProperties> = ({
  className,
  notificationsPreview = [],
  unreadCount = 0,
  totalNotificationCount = 0,
  ...properties
}) => {
  const { settings, updateSettings } = useNotificationStore();
  const [readNotifications, setReadNotifications] = useState<string[]>([]);
  const [isAllNotificationsDeleted, setIsAllNotificationsDeleted] =
    useState<boolean>(false);
  const [visibleNotifications, setVisibleNotifications] =
    useState<NotificationPreview[]>(notificationsPreview);

  const handleToggleSwitch = (name: keyof notificationSettingsProperties) => {
    updateSettings({ [name]: !settings[name] });
  };

  const handleSetIsRead = (notificationId: string) => {
    setReadNotifications((previous) => [...previous, notificationId]);
  };

  const handleDeleteNotification = (notificationId: string) => {
    setVisibleNotifications((previous) =>
      previous.filter((notification) => notification.id !== notificationId),
    );
  };

  const { data } = useSession();
  const token = data?.access_token || "";

  const handleMarkAll = () => {
    handleMarkAllAsRead(token);
    const allNotificationIds = visibleNotifications.map(
      (preview) => preview.id,
    );
    setReadNotifications(allNotificationIds);
  };

  const handleDeleteAll = () => {
    handleDeleteAllNotifications(token);
    setIsAllNotificationsDeleted(true);
  };

  return (
    <Card
      data-testid="cardContainer"
      className={cn(
        "h-fit max-h-[469px] w-fit overflow-y-scroll sm:w-[380px]",
        className,
      )}
      {...properties}
    >
      <CardHeader className="relative px-4 sm:p-6">
        <CardTitle>Notifications</CardTitle>
        <CardDescription data-testid="unreadMessageCount">
          You have{" "}
          {unreadCount === 0 || isAllNotificationsDeleted ? 0 : unreadCount}{" "}
          unread message
          {unreadCount === 1 ? "" : "s"}.
          {totalNotificationCount > 0 && (
            <>
              {!isAllNotificationsDeleted && (
                <button
                  className="absolute right-6 top-6 text-sm font-medium text-primary"
                  onClick={handleDeleteAll}
                >
                  Delete notifications
                </button>
              )}
            </>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 p-4 pt-0 sm:p-6 sm:pt-0">
        {totalNotificationCount === 0 || isAllNotificationsDeleted ? (
          <div className="flex flex-col items-center">
            <Image
              src={"/images/bell-icon.jpg"}
              width={140}
              height={140}
              alt=""
            />
            <div className="mt-2">
              <p className="text-center text-xl font-semibold">
                All Caught Up!
              </p>
              <p className="text-center text-sm text-[#626262]">
                New notifications will show up here.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div className="flex items-center space-x-4 rounded-md border p-2 sm:p-4">
                <BellRing size={16} />
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Push Notifications
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Send notifications to device.
                  </p>
                </div>
                <Switch
                  checked={settings.mobile_push_notifications}
                  onCheckedChange={() =>
                    handleToggleSwitch("mobile_push_notifications")
                  }
                  name="mobile_push_notifications"
                />
              </div>
              <div data-testid="previewBody">
                {visibleNotifications.map((preview) => (
                  <div
                    key={preview.id}
                    className="mt-6 flex justify-between p-4 last:mb-0 last:pb-0 hover:bg-[#F6E8DF] sm:mb-4"
                  >
                    <div className="grid grid-cols-[25px_1fr] items-start">
                      <span
                        className={`flex h-2 w-2 translate-y-1 rounded-full ${
                          preview.is_read ||
                          readNotifications.includes(preview.id)
                            ? "bg-[#CBD5E1]"
                            : "bg-sky-500"
                        } `}
                      />
                      <div className="space-y-1">
                        <p
                          data-testid={`previewHeader${preview.id}`}
                          className={`text-left text-sm font-medium leading-none ${
                            preview.is_read ||
                            readNotifications.includes(preview.id)
                              ? "text-muted-foreground"
                              : "text-[#0A0A0A]"
                          }`}
                        >
                          {preview.message}
                        </p>
                        <p
                          data-testid={`previewTime${preview.id}`}
                          className="text-left text-sm text-muted-foreground"
                        >
                          {formatCreatedAt(preview.created_at)}
                        </p>
                      </div>
                    </div>
                    <div>
                      <NotificationAction
                        notificationId={preview.id}
                        handleSetIsRead={handleSetIsRead}
                        handleDeleteNotification={handleDeleteNotification}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="px-4 sm:px-6">
        {totalNotificationCount > 0 && (
          <>
            {!isAllNotificationsDeleted && (
              <div className="item-center flex w-full">
                <CustomButton
                  variant="primary"
                  isDisabled={unreadCount === 0}
                  className="w-full bg-primary"
                  onClick={handleMarkAll}
                >
                  Mark all as read
                </CustomButton>
              </div>
            )}
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default UnreadNotificationCard;
