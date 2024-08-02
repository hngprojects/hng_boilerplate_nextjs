import axios from "axios";

import { getApiUrl } from "~/utils/getApiUrl";
import { notificationSettingsProperties } from "../_types/notification-settings.types";

const saveNotificationSettings = async (
  token: string | undefined,
  settings: notificationSettingsProperties,
) => {
  const baseUrl = await getApiUrl();
  const endpoint = "/api/v1/settings/notification-settings";
  const url = `${baseUrl}${endpoint}`;

  const response = await axios.post(url, settings, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status !== 201) {
    throw new Error(
      "An error occurred when trying to save notification settings :(",
    );
  }
};

export default saveNotificationSettings;
