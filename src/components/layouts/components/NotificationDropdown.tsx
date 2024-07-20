import React from 'react';
import Notification from "../../../../public/notification-icon.svg"

type NotificationDropdownProps = {
    isOpen: boolean;
    toggleDropdown: () => void;
};

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({ isOpen, toggleDropdown }) => {

    return (
        <div className="relative">
            <div
                onClick={toggleDropdown}
                className="">
                <Notification />
                <div className="h-[5px] w-[5px] rounded-full bg-red-600 absolute top-0 right-0 cursor-pointer"></div>
            </div>

            {isOpen && (
                <div className="absolute right-0 w-[300px] mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-4">
                        <p className="text-sm text-gray-700 font-semibold">Notifications</p>
                    </div>
                    <div className="p-2 max-h-[400px]">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">New comment on your post</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">You have a new follower</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your password was changed</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">New message from John</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Server maintenance scheduled</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">New friend request</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your order has been shipped</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">New review on your product</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your subscription is expiring</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;
