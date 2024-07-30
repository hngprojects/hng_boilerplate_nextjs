// src/app/dashboard/(user-dashboard)/settings/notification/action/notification.ts

import axiosInstance from "~/app/conf/axiosConfig"; // Adjust path as needed

const notification_id = undefined;

export const createNotification = async () => {
  const data = {
    message: `Welcome to HNGi8`,
  };
  try {
    await axiosInstance.post("/notifications", data);
  } catch (error) {
    return error;
  }
};

export const RetrieveUserNotificationSettings = async () => {
  try {
    await axiosInstance.get("/notification-settings");
  } catch (error) {
    return error;
  }
};

export const updateUserNotificationSettings = async (settings: object) => {
  try {
    await axiosInstance.patch("/notification-settings", settings);
  } catch (error) {
    return error;
  }
};

export const RetrieveUserNotificationAll = async () => {
  try {
    await axiosInstance.get("/notifications");
  } catch (error) {
    return error;
  }
};

export const RetrieveUserUnreadNotification = async () => {
  try {
    await axiosInstance.get("/notifications?_read=false");
  } catch (error) {
    return error;
  }
};

export const markNotificationAsRead = async () => {
  try {
    await axiosInstance.patch(`/notifications/${notification_id}`);
  } catch (error) {
    return error;
  }
};

export const markAllNotificationAsRead = async () => {
  try {
    await axiosInstance.patch("/notifications");
  } catch (error) {
    return error;
  }
};
