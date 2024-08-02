"use client";

import axios from "axios";
import create from "zustand";

import { getApiUrl } from "~/utils/getApiUrl";
import { notificationSettingsProperties } from "../_types/notification-settings.types";

interface NotificationStore {
  allNotifications: [];
  settings: notificationSettingsProperties;
  updateSettings: (
    newSettings: Partial<notificationSettingsProperties>,
  ) => void;
  RetrieveUserNotificationAll: (token: string) => Promise<void>;
  retrieveUserSettingsById: (userId: string, token: string) => Promise<void>;
  updateUserNotificationSettings: (
    userId: string,
    newSettings: Partial<notificationSettingsProperties>,
    token: string,
  ) => Promise<void>;
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
  allNotifications: [],
  updateSettings: (newSettings: Partial<notificationSettingsProperties>) =>
    set((state) => ({
      settings: { ...state.settings, ...newSettings },
    })),
  RetrieveUserNotificationAll: async (token: string) => {
    const baseUrl = await getApiUrl();
    try {
      const axiosInstance = axios.create({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await axiosInstance.get(
        `${baseUrl}/api/v1/notification-settings`,
      );
      set({ allNotifications: response.data.data.notifications });
    } catch {
      /* empty */
    }
  },

  retrieveUserSettingsById: async (userId: string, token: string) => {
    const baseUrl = await getApiUrl();
    try {
      const axiosInstance = axios.create({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await axiosInstance.get(
        `${baseUrl}/api/v1/settings/notification-settings/${userId}`,
      );
      set({ settings: response.data.data });
    } catch {
      /* empty */
    }
  },
  updateUserNotificationSettings: async (
    userId: string,
    newSettings: Partial<notificationSettingsProperties>,
    token: string,
  ) => {
    const baseUrl = await getApiUrl();
    try {
      const axiosInstance = axios.create({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await axiosInstance.post(
        `${baseUrl}/api/v1/settings/notification-settings`,
        {
          user_id: userId,
          ...newSettings,
        },
      );
      set((state) => ({
        settings: { ...state.settings, ...newSettings },
      }));
    } catch {
      /* empty */
    }
  },
}));
