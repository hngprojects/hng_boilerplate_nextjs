import { Banknote, Bell, Database, Globe, User, UserPlus } from "lucide-react";

import { SettingsSidebarProps } from "~/types";

export const Settings_Sidebar_Links: SettingsSidebarProps[] = [
  {
    id: 1,
    label: "Profile",
    icon: User,
    link: "profile",
  },
  {
    id: 2,
    label: "account-security",
    icon: UserPlus,
    link: "account-security",
  },
  {
    id: 3,
    label: "Notification Settings",
    icon: Bell,
    link: "notification-settings",
  },
  {
    id: 4,
    label: "Payment Information",
    icon: Banknote,
    link: "payment-information",
  },
  {
    id: 5,
    label: "Data and Privacy Settings",
    icon: Database,
    link: "privacy-settings",
  },
  {
    id: 6,
    label: "Language and Region",
    icon: Globe,
    link: "language-settings",
  },
];
