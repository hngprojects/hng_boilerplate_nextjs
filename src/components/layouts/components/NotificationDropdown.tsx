import React from "react";

import Notification from "../../../../public/notification-icon.svg";

type NotificationDropdownProperties = {
  isOpen: boolean;
  toggleDropdown: () => void;
};

const NotificationDropdown: React.FC<NotificationDropdownProperties> = ({
  isOpen,
  toggleDropdown,
}) => {
  return (
    <div className="relative">
      <div onClick={toggleDropdown} className="">
        <Notification />
        <div className="absolute right-0 top-0 h-[5px] w-[5px] cursor-pointer rounded-full bg-red-600"></div>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-[300px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-4">
            <p className="text-sm font-semibold text-gray-700">Notifications</p>
          </div>
          <div className="max-h-[400px] p-2">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              New comment on your post
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              You have a new follower
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Your password was changed
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              New message from John
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Server maintenance scheduled
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              New friend request
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Your order has been shipped
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              New review on your product
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Your subscription is expiring
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
