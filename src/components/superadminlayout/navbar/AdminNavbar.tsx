import { BellIcon, ChevronDown, HelpCircle, SearchIcon } from "lucide-react";

import UnreadNotificationCard from "~/components/common/UnreadNotificationCard/UnreadNotificationCard";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

const AdminNavbar = () => {
  return (
    <nav className="border-b-[0.5px] border-border" role="navbar">
      <div className="flex items-center justify-between gap-2 bg-background px-[10px] py-[14px]">
        <div className="flex h-10 items-center justify-between gap-2 rounded-[6px] border border-[#E4E4E7] bg-white px-3 text-sm font-normal placeholder:text-sm">
          <SearchIcon
            data-testid="search"
            className="h-4 w-4 text-neutral-dark-2"
          />
          <input
            className="h-full w-full border-none text-neutral-dark-2 outline-none ring-0 placeholder:text-neutral-dark-1"
            placeholder="Search option..."
            data-testid="input"
          />
        </div>
        <div className="flex w-full max-w-[152px] items-center justify-between gap-1">
          <div className="relative flex items-center justify-center">
            <Popover>
              <PopoverTrigger>
                <BellIcon
                  data-testid="bell"
                  className="h-6 w-6 text-neutral-dark-2 transition-colors duration-300 hover:cursor-pointer hover:text-neutral-dark-1"
                />
              </PopoverTrigger>
              <PopoverContent
                data-testid="notificationContent"
                align="end"
                className="w-[380px] border-none p-0 shadow-none"
              >
                <UnreadNotificationCard
                  notificationsPreview={[
                    { header: "Check mail", time: "1 hour ago" },
                    { header: "Sign up for offer", time: "2 hours ago" },
                    { header: "Register for event", time: "1 hour ago" },
                  ]}
                  unreadCount={30}
                />
              </PopoverContent>
            </Popover>
            <span className="absolute right-1 top-0 h-[6px] w-[6px] rounded-full bg-error"></span>
          </div>
          <div>
            <HelpCircle
              data-testid="help"
              className="h-6 w-6 text-neutral-dark-2 transition-colors duration-300 hover:cursor-pointer hover:text-neutral-dark-1"
            />
          </div>
          <div className="hover:bg-black-1 flex w-full max-w-[64px] cursor-pointer items-center justify-between gap-2">
            <Avatar data-testid="avatar" className="h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <ChevronDown
              data-testid="chevronDown"
              className="2-5 h-5 text-neutral-dark-1"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
