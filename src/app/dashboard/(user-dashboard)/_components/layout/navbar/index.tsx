"use client";

import {
  BellIcon,
  ChevronDown,
  HelpCircle,
  Menu,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import UnreadNotificationCard from "~/app/dashboard/(admin)/_components/unread-notification-card/UnreadNotificationCard";
import Logo from "~/components/common/logo";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";

const navlinks = [
  {
    route: "Overview",
    link: "/dashboard",
    id: "dashboard",
  },
  {
    route: "Customers",
    link: "/dashboard/customer",
    id: "customers",
  },
  {
    route: "Products",
    link: "/dashboard/products",
    id: "products",
  },
  {
    route: "Settings",
    link: "/dashboard/settings",
    id: "settings",
  },
];

const UserNavbar = () => {
  const pathname = usePathname();
  const currentPath = pathname?.split("/")[2];
  return (
    <nav
      className="overflow-hidden border-b-[0.5px] border-border bg-background px-5 py-2.5 md:left-[220px] lg:left-[252px]"
      role="navbar"
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex w-full max-w-[470px] justify-between gap-1">
          <div className="flex w-full max-w-[200px] items-center justify-start gap-1">
            <Menu className="h-[18px] w-[18px] text-neutral-dark-2 transition-all duration-300 hover:text-neutral-dark-2/50" />
            <Logo />
          </div>
          <div className="flex w-full max-w-[290px] items-center justify-between gap-1">
            {navlinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`text-sm font-bold transition-all duration-200 hover:text-primary ${currentPath === item.id ? "text-primary" : "text-neutral-dark-2"}`}
              >
                {item.route}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full max-w-[440px] items-center justify-between gap-2 bg-[#FDFDFD]">
          <div className="flex h-10 items-center justify-between gap-2 rounded-[6px] border border-border bg-white px-3 text-sm font-normal placeholder:text-sm">
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

export default UserNavbar;
