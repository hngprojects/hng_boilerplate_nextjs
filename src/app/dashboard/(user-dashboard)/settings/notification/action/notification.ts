/* eslint-disable no-console */
// action/notification.ts
// "use server";

import Calls from "~/actions/axios";

const $http = Calls(process.env.NEXT_PUBLIC_API_URL);
console.log(process.env.NEXT_PUBLIC_API_URL);

const notification_id = undefined;

export const createNotification = async () => {
  const data = {
    message: `Welcome to HNGi8`,
  };
  try {
    const response = await $http.post("/notifications", data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const RetrieveUserNotificationSettings = async () => {
  try {
    const response = await $http.get("/notification-settings");
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateUserNotificationSettings = async (settings: object) => {
  try {
    const response = await $http.patch("/notification-settings", settings);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const RetrieveUserNotificationAll = async () => {
  try {
    const response = await $http.get("/notifications");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const RetrieveUserUnreadNotification = async () => {
  try {
    const response = await $http.get("/notifications?_read=false");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const markNotificationAsRead = async () => {
  try {
    const response = await $http.patch(`/notifications/${notification_id}`);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const markAllNotificationAsRead = async () => {
  try {
    const response = await $http.patch("/notifications");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
