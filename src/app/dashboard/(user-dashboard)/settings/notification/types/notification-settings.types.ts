// Define and export types for notification settings
export interface NotificationSettingsProperties {
  mobile_push_notifications: boolean;
  email_notification_activity_in_workspace: boolean;
  email_notification_always_send_email_notifications: boolean;
  email_notification_email_digest: boolean;
  email_notification_announcement_and_update_emails: boolean;
  slack_notifications_activity_on_your_workspace: boolean;
  slack_notifications_always_send_email_notifications: boolean;
  slack_notifications_announcement_and_update_emails: boolean;
}
