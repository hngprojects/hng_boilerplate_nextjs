"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";

import CustomButton from "~/components/common/Button/button";
import NotificationSavedModal from "~/components/modals/NotificationSettingSavedModal";
import { Switch } from "~/components/ui/switch";

const LOCAL_STORAGE_KEY = "notificationSettings";

interface Settings {
  pushNotifications: boolean;
  emailActivity: boolean;
  emailAlways: boolean;
  emailDigests: boolean;
  emailAnnouncements: boolean;
  slackActivity: boolean;
  slackAlways: boolean;
  slackAnnouncements: boolean;
}

interface SettingItem {
  label: string;
  description: string;
  key: keyof Settings;
}

const SETTINGS_DATA: { category: string; settings: SettingItem[] }[] = [
  {
    category: "Notifications Alert",
    settings: [
      {
        label: "Mobile push notifications",
        description:
          "Receive push notifications on mentions and comments via your mobile app",
        key: "pushNotifications",
      },
    ],
  },
  {
    category: "Email Notifications",
    settings: [
      {
        label: "Activity in your workspace",
        description:
          "Receive emails when you get comments, mentions, page invites, reminders, access requests, and property changes",
        key: "emailActivity",
      },
      {
        label: "Always send email notifications",
        description:
          "Receive emails about activity in your workspace, even when you are active on the app",
        key: "emailAlways",
      },
      {
        label: "Email digests",
        description:
          "Receive email digest every 8 hours for changes to pages you are subscribed to",
        key: "emailDigests",
      },
      {
        label: "Announcements and update emails",
        description:
          "Receive occasional emails about product launches and new features from Notion",
        key: "emailAnnouncements",
      },
    ],
  },
  {
    category: "Slack notifications",
    settings: [
      {
        label: "Activity in your workspace",
        description:
          "Receive emails when you get comments, mentions, page invites, reminders, access requests, and property changes",
        key: "slackActivity",
      },
      {
        label: "Always send email notifications",
        description:
          "Receive emails about activity in your workspace, even when you are active on the app",
        key: "slackAlways",
      },
      {
        label: "Announcements and update emails",
        description:
          "Receive occasional emails about product launches and new features from Notion",
        key: "slackAnnouncements",
      },
    ],
  },
];

export default function NotificationSettings() {
  const [settings, setSettings] = useState<Settings>({
    pushNotifications: false,
    emailActivity: false,
    emailAlways: false,
    emailDigests: false,
    emailAnnouncements: false,
    slackActivity: false,
    slackAlways: false,
    slackAnnouncements: false,
  });

  const [temporarySettings, setTemporarySettings] =
    useState<Settings>(settings);

  useEffect(() => {
    const savedSettings = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      setSettings(parsedSettings);
      setTemporarySettings(parsedSettings);
    }
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = (setting: keyof Settings) => {
    setTemporarySettings((previousSettings) => ({
      ...previousSettings,
      [setting]: !previousSettings[setting],
    }));
  };

  const handleSaveChanges = () => {
    setSettings(temporarySettings);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(temporarySettings));
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex w-full bg-default-foreground">
      <div className="w-full py-8 pl-8 pr-28">
        {SETTINGS_DATA.map((section) => (
          <div key={section.category} className="mb-6">
            <h3 className="mb-4 text-base font-bold sm:text-lg lg:text-2xl">
              {section.category}
            </h3>
            {section.settings.map((setting) => (
              <div key={setting.key} className="mb-3">
                <h4
                  data-testid={`switch-${setting.key}`}
                  className="text-sm font-medium"
                >
                  {setting.label}
                </h4>
                <div className="flex flex-col justify-between gap-2 text-sm sm:flex-row sm:text-base lg:text-lg">
                  <p className="text-sm text-gray-600">{setting.description}</p>
                  <div
                    onClick={() => handleToggle(setting.key)}
                    data-testid="switch-pushNotifications"
                  >
                    <Switch
                      role="switch"
                      data-testid={`switch-${setting.key}`}
                      checked={temporarySettings[setting.key]}
                      onCheckedChange={() => handleToggle(setting.key)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div
          onClick={handleSaveChanges}
          className="mt-6 flex w-full justify-end"
        >
          <CustomButton variant="primary">
            <Check /> Save Changes
          </CustomButton>
        </div>
      </div>
      <NotificationSavedModal show={isModalOpen} onClose={closeModal} />
    </div>
  );
}
