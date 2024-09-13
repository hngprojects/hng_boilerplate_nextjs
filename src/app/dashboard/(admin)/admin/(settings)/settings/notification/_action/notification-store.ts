import create from "zustand";

import { notificationSettingsProperties } from "../_types/notification-settings.types";

interface NotificationStore {
  settings: notificationSettingsProperties;
  updateSettings: (
    newSettings: Partial<notificationSettingsProperties>,
  ) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  settings: {
    mobile_push_notifications: false,
    email_notification_activity_in_workspace: false,
    email_notification_always_send_email_notifications: false,
    email_notification_email_digest: false,
    email_notification_announcement_and_update_emails: false,
    slack_notifications_activity_on_your_workspace: false,
    slack_notifications_always_send_email_notifications: false,
    slack_notifications_announcement_and_update_emails: false,
  },
  updateSettings: (newSettings: Partial<notificationSettingsProperties>) =>
    set((state) => ({
      settings: { ...state.settings, ...newSettings },
    })),
}));
