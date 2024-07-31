import axios from "axios";

/**
 * THIS API IMPLEMENTATION ARE NOT WORKING CURRENTLY, THE BACKEND WOULD BE INTEGRTED SHORTLY. ☺️
 */

const notification_id = undefined;

export const createNotification = async () => {
  const data = {
    message: `Welcome to HNGi8`,
  };
  try {
    await axios.post("/notifications", data);
  } catch (error) {
    return error;
  }
};

export const RetrieveUserNotificationSettings = async () => {
  try {
    await axios.get("/notification-settings");
  } catch (error) {
    return error;
  }
};

export const updateUserNotificationSettings = async (settings: object) => {
  try {
    await axios.patch("/notification-settings", settings);
  } catch (error) {
    return error;
  }
};

export const RetrieveUserNotificationAll = async () => {
  try {
    await axios.get("/notifications");
  } catch (error) {
    return error;
  }
};

export const RetrieveUserUnreadNotification = async () => {
  try {
    await axios.get("/notifications?_read=false");
  } catch (error) {
    return error;
  }
};

export const markNotificationAsRead = async () => {
  try {
    await axios.patch(`/notifications/${notification_id}`);
  } catch (error) {
    return error;
  }
};

export const markAllNotificationAsRead = async () => {
  try {
    await axios.patch("/notifications");
  } catch (error) {
    return error;
  }
};
