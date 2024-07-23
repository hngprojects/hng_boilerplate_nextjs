import {
  BellIcon,
  ChevronDown,
  HelpCircle,
  MenuIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import DashboardLogo from "../logo";

const navold = () => {
  const navLinks = [
    {
      route: "Overview",
      link: "overview",
    },
    {
      route: "Email",
      link: "email",
    },
    {
      route: "Products",
      link: "products",
    },
  ];
  return (
    <nav className="sticky left-0 right-0 top-0 border-b-[1px] border-[#CBD5E14D] bg-background px-10 py-4">
      <div className="flex items-center justify-between gap-5">
        <div className="flex w-full max-w-[435px] items-center justify-between gap-2">
          <div className="flex items-center justify-start gap-[15px]">
            <MenuIcon className="h-6 w-6 text-black" />
            <DashboardLogo />
          </div>
          <div className="flex w-full max-w-[185px] items-center justify-between gap-2">
            {navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-xs font-medium text-black transition-all duration-300 hover:text-primary"
              >
                {item.route}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full max-w-[440px] items-center justify-between gap-2">
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
          <div className="relative flex items-center justify-center">
            <BellIcon
              data-testid="bell"
              className="h-6 w-6 text-neutral-dark-2 transition-colors duration-300 hover:cursor-pointer hover:text-neutral-dark-1"
            />

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

export default navold;
