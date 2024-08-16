import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Check, EllipsisVertical, Trash } from "lucide-react";
import { useSession } from "next-auth/react";

import { deleteNotifications } from "~/actions/notifications/deleteNotifications";
import { markOneAsRead } from "~/actions/notifications/markOneAsRead";

interface Properties {
  notificationId: string;
  handleSetIsRead: (notificationId: string) => void;
  handleDeleteNotification: (notificationId: string) => void;
}

const handleMarkOneAsRead = async (notificationId: string, token: string) => {
  await markOneAsRead({ notificationId, token });
};

const handleDeleteNotifications = async (
  notificationId: string,
  token: string,
) => {
  await deleteNotifications({ notificationId, token });
};

function NotificationAction({
  notificationId,
  handleSetIsRead,
  handleDeleteNotification,
}: Properties) {
  const { data } = useSession();
  const token = data?.access_token || "";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <EllipsisVertical />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="z-50 rounded-md border border-[#CBD5E1] bg-white px-2 py-[13px] shadow-md">
        <DropdownMenuLabel className="px-2 pb-[13px] font-semibold text-[#0A0A0A]">
          Actions
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="h-[1px] bg-[#CBD5E1]/70" />
        <DropdownMenuItem
          className="my-3 flex cursor-pointer items-center gap-2 px-2 text-sm font-medium text-[#525252] hover:text-[#525252]/80"
          onClick={async () => {
            await handleMarkOneAsRead(notificationId, token);
            handleSetIsRead(notificationId);
          }}
        >
          <Check size={16} /> Mark as read
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex cursor-pointer items-center gap-2 px-2 text-sm font-medium text-[#DC2626] hover:text-[#DC2626]/80"
          onClick={async () => {
            await handleDeleteNotifications(notificationId, token);
            handleDeleteNotification(notificationId);
          }}
        >
          <Trash size={16} /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default NotificationAction;
