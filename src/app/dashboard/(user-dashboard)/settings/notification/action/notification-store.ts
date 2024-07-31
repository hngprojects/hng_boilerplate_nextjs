import { create } from "zustand";
import { NotificationSettingsProperties } from "../types/notification-settings.types";

// Define the fetchData function with proper types
const fetchData = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data?: Partial<NotificationSettingsProperties>,
) => {
  try {
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (data) {
      options.body = JSON.stringify(data);
    }
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(
      "There was a problem with the server configuration. Check the server logs for more information.",
      error,
    );
    throw new Error(
      "There was a problem with the server configuration. Check the server logs for more information.",
    );
  }
};

// Define the Zustand store interface
interface NotificationStore {
  settings: NotificationSettingsProperties;
  updateSettings: (
    newSettings: Partial<NotificationSettingsProperties>,
  ) => void;
}

// Create the Zustand store
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
  updateSettings: async (
    newSettings: Partial<NotificationSettingsProperties>,
  ) => {
    try {
      // Call fetchData to save the new settings to your backend
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/notification-settings`;
      await fetchData(apiUrl, "POST", newSettings);

      // Only update local state if the backend call is successful
      set((state) => ({
        settings: { ...state.settings, ...newSettings },
      }));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Failed to update settings:", error);
    }
  },
}));
