import axios from "axios";
import { NotificationSettingsProperties } from "../types/notification-settings.types";

// Base URL for your API
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

// Axios instance with default settings
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createNotification = async (): Promise<Notification> => {
  const data = { message: `Welcome to HNGi8` };
  try {
    const response = await axiosInstance.post("/notifications", data);
    return response.data;
  } catch (error) {
    console.error("Error creating notification:", error);
    throw error;
  }
};

export const retrieveUserNotificationSettings = async (): Promise<NotificationSettingsProperties> => {
  try {
    const response = await axiosInstance.get("/notification-settings");
    return response.data;
  } catch (error) {
    console.error("Error retrieving notification settings:", error);
    throw error;
  }
};

export const updateUserNotificationSettings = async (
  settings: NotificationSettingsProperties,
): Promise<void> => {
  try {
    await axiosInstance.patch("/notification-settings", settings);
  } catch (error) {
    console.error("Error updating notification settings:", error);
    throw error;
  }
};

export const retrieveUserNotificationAll = async (): Promise<Notification[]> => {
  try {
    const response = await axiosInstance.get("/notifications");
    return response.data;
  } catch (error) {
    console.error("Error retrieving all notifications:", error);
    throw error;
  }
};

export const retrieveUserUnreadNotification = async (
  readStatus: boolean = false,
): Promise<Notification[]> => {
  try {
    const response = await axiosInstance.get(`/notifications?_read=${readStatus}`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving unread notifications:", error);
    throw error;
  }
};

export const markNotificationAsRead = async (id: string): Promise<void> => {
  try {
    await axiosInstance.patch(`/notifications/${id}`);
  } catch (error) {
    console.error("Error marking notification as read:", error);
    throw error;
  }
};

export const markAllNotificationAsRead = async (): Promise<void> => {
  try {
    await axiosInstance.patch("/notifications");
  } catch (error) {
    console.error("Error marking all notifications as read:", error);
    throw error;
  }
};
