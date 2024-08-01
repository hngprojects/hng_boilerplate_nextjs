import create from "zustand";

import { notificationSettingsProperties } from "../types/notification-settings.types";
import {
  RetrieveUserNotificationSettings,
  updateUserNotificationSettings,
} from "./notification";

interface NotificationStore {
  settings: notificationSettingsProperties;
  initializeSettings: () => Promise<void>;
  updateSettings: (
    newSettings: Partial<notificationSettingsProperties>,
  ) => void;
  saveSettings: () => Promise<void>;
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

  initializeSettings: async () => {
    const data = await RetrieveUserNotificationSettings();
    if (data) {
      set({ settings: data });
    }
  },
  updateSettings: (newSettings: Partial<notificationSettingsProperties>) =>
    set((state) => ({
      settings: { ...state.settings, ...newSettings },
    })),
  saveSettings: async () => {
    const state = useNotificationStore.getState();
    await updateUserNotificationSettings(state.settings);
  },
}));
