// src/components/_components/notification-switch-box.tsx

import React from "react";

interface NotificationSwitchBoxProperties {
  title: string;
  description: string;
  name: string;
  isChecked: boolean;
  onToggle: (name: string) => void; // Ensure this type matches
}

export const NotificationSwitchBox: React.FC<
  NotificationSwitchBoxProperties
> = ({ title, description, name, isChecked, onToggle }) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onToggle(name)} // Call the onToggle function with the name
      />
    </div>
  );
};
