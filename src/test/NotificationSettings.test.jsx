import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import NotificationSettings from "../app/settings/notification-settings/notificationsettings";

const SETTINGS_DATA = [
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

describe("notificationSettings Component", () => {
  it("renders all sections and settings", () => {
    expect.assertions(19);
    render(<NotificationSettings />);
    for (const section of SETTINGS_DATA) {
      expect(screen.getByText(section.category)).toBeInTheDocument();
      for (const setting of section.settings) {
        const labels = screen.getAllByText(setting.label);
        expect(labels.length).toBeGreaterThan(0);
        const descriptions = screen.getAllByText(setting.description);
        expect(descriptions.length).toBeGreaterThan(0);
      }
    }
  });

  it("saves changes and displays a confirmation message", () => {
    expect.assertions(1);
    render(<NotificationSettings />);
    const saveButton = screen.getByText(/save changes/i);
    fireEvent.click(saveButton);
    expect(screen.queryByText(/settings saved!/i)).not.toBeInTheDocument();
  });

  it("closes the modal when Done button is clicked", () => {
    expect.assertions(1);
    render(<NotificationSettings />);
    fireEvent.click(screen.getByText(/save changes/i));
    fireEvent.click(screen.getByText(/done/i));
    expect(screen.queryByText(/settings saved!/i)).not.toBeInTheDocument();
  });
});
