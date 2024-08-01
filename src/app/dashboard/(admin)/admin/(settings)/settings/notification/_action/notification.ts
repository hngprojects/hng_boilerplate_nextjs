import axios from "axios";

const notification_id = undefined;
const BASE_URL = "https://deployment.api-csharp.boilerplate.hng.tech/api/v1";

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
    const response = await axios.get(
      `${BASE_URL}/settings/notification-settings/2846e28a-d7a7-43b9-9cba-1b289fd8ebff`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
};

export const updateUserNotificationSettings = async (settings: object) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/settings/notification-settings`,
      settings,
    );
    return response.data;
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
