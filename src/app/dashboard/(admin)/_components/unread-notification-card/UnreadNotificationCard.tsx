"use client";

import { BellRing } from "lucide-react";
import Image from "next/image";
import { FC, useState } from "react";

import { deleteAllNotifications } from "~/actions/notifications/deleteAllNotifications";
import { markAllAsRead } from "~/actions/notifications/markAllAsRead";
import { markOneAsRead } from "~/actions/notifications/markOneAsRead";
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

const handleMarkOneAsRead = async (notificationId: string) => {
  await markOneAsRead({ notificationId });
};

const handleMarkAllAsRead = async () => {
  await markAllAsRead();
};

const handleDeleteAllNotifications = async () => {
  await deleteAllNotifications();
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
  const [isNotificationsDeleted, setIsNotificationsDeleted] =
    useState<boolean>(false);

  const handleToggleSwitch = (name: keyof notificationSettingsProperties) => {
    updateSettings({ [name]: !settings[name] });
  };

  const handleSetIsRead = (notificationId: string) => {
    setReadNotifications((previous) => [...previous, notificationId]);
  };

  const handleMarkAll = () => {
    handleMarkAllAsRead();
    const allNotificationIds = notificationsPreview.map(
      (preview) => preview.id,
    );
    setReadNotifications(allNotificationIds);
  };

  const handleDeleteAll = () => {
    handleDeleteAllNotifications();
    setIsNotificationsDeleted(true);
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
          {unreadCount === 0 || isNotificationsDeleted ? 0 : unreadCount} unread
          message
          {unreadCount === 1 ? "" : "s"}.
          {totalNotificationCount > 0 && (
            <button
              className="absolute right-6 top-6 text-sm font-medium text-primary"
              onClick={handleDeleteAll}
            >
              Delete notifications
            </button>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 p-4 pt-0 sm:p-6 sm:pt-0">
        {totalNotificationCount === 0 || isNotificationsDeleted ? (
          <div className="flex flex-col items-center">
            <Image
              src={"/images/notification-bell.svg"}
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
                {notificationsPreview.map((preview) => (
                  <button
                    type="button"
                    disabled={
                      preview.is_read || readNotifications.includes(preview.id)
                    }
                    onClick={() => {
                      handleSetIsRead(preview.id);
                      handleMarkOneAsRead(preview.id);
                    }}
                    key={preview.id}
                    className="mb-2 mt-6 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0 sm:mb-4"
                  >
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
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className="px-4 sm:px-6">
        {!isNotificationsDeleted && (
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
      </CardFooter>
    </Card>
  );
};

export default UnreadNotificationCard;
